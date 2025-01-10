#!/bin/bash

# --- Configuration ---
APP_NAME="superior-business-solutions"
COMPOSE_PROJECT_NAME="superior-business-solutions"
TAG="prod-$(date +%Y%m%d%H%M%S)"
START_PORT=8081
MAX_ATTEMPTS=10
CONTAINER_HEALTH_TIMEOUT=30

# --- Colors for output ---
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# --- Functions ---
check_status() {
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ $1${NC}"
  else
    echo -e "${RED}✗ $1${NC}"
    exit 1
  fi
}

find_available_port() {
  local port=$START_PORT
  local attempts=0
  
  while [ $attempts -lt $MAX_ATTEMPTS ]; do
    if ! lsof -i :$port > /dev/null 2>&1 && ! netstat -tuln | grep -q ":$port "; then
      echo $port
      return 0
    fi
    port=$((port + 1))
    attempts=$((attempts + 1))
  done
  
  echo -e "${RED}Error: Could not find available port in range ${START_PORT}-$((START_PORT + MAX_ATTEMPTS))${NC}"
  exit 1
}

check_dependencies() {
  echo -e "${BLUE}Checking dependencies...${NC}"
  
  # Check Docker
  if ! command -v docker >/dev/null 2>&1; then
    echo -e "${RED}Error: Docker is not installed${NC}"
    exit 1
  fi
  
  # Check Docker Compose
  if ! command -v docker-compose >/dev/null 2>&1; then
    echo -e "${RED}Error: Docker Compose is not installed${NC}"
    exit 1
  }
  
  # Check if Docker daemon is running
  if ! docker info >/dev/null 2>&1; then
    echo -e "${RED}Error: Docker daemon is not running${NC}"
    exit 1
  fi
}

cleanup_old_images() {
  echo -e "${BLUE}Cleaning up old images...${NC}"
  # Keep only the last 3 images
  docker images --format "{{.ID}} {{.Repository}}" | grep "$APP_NAME" | tail -n +4 | awk '{print $1}' | xargs -r docker rmi
  check_status "Old images cleaned up"
}

# --- Main Deployment Script ---
echo -e "${GREEN}🚀 Starting deployment of $APP_NAME${NC}"

# Check dependencies
check_dependencies

# Find available port
PORT=$(find_available_port)
export PORT

echo -e "${GREEN}Using port: $PORT${NC}"

# Create backup of current deployment if exists
if [ -f "docker-compose.yml" ]; then
  echo -e "${BLUE}Creating backup of current deployment...${NC}"
  cp docker-compose.yml docker-compose.yml.backup
  check_status "Backup created"
fi

# Build the image
echo -e "${BLUE}Building Docker image...${NC}"
COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME TAG=$TAG docker-compose build
check_status "Docker image built"

# Stop and remove existing containers
echo -e "${BLUE}Stopping and removing old containers...${NC}"
if docker ps -a --format '{{.Names}}' | grep -q "$APP_NAME"; then
  docker-compose -p $COMPOSE_PROJECT_NAME down
fi
check_status "Old containers removed"

# Start the new container
echo -e "${BLUE}Starting new container...${NC}"
COMPOSE_PROJECT_NAME=$COMPOSE_PROJECT_NAME TAG=$TAG docker-compose up -d
check_status "Container started"

# Wait for container to be ready
echo -e "${YELLOW}Waiting for container to be ready...${NC}"
sleep 5

# Verify deployment with timeout and retries
echo -e "${BLUE}Verifying deployment...${NC}"
TIMEOUT=$CONTAINER_HEALTH_TIMEOUT
ELAPSED=0
DELAY=5
VERIFIED=false

while [ $ELAPSED -lt $TIMEOUT ]; do
  if curl -s -f http://localhost:$PORT > /dev/null; then
    VERIFIED=true
    break
  fi
  echo -e "${YELLOW}Waiting for service to be ready... ($ELAPSED/$TIMEOUT seconds)${NC}"
  sleep $DELAY
  ELAPSED=$((ELAPSED + DELAY))
done

if [ "$VERIFIED" = true ]; then
  echo -e "${GREEN}✅ Deployment successful!${NC}"
  echo -e "${GREEN}Application is running on port $PORT${NC}"
  echo -e "${GREEN}You can point your reverse proxy to this server's IP and port $PORT${NC}"
  
  # Cleanup old images
  cleanup_old_images
  
  # Remove backup if everything is successful
  if [ -f "docker-compose.yml.backup" ]; then
    rm docker-compose.yml.backup
  fi
else
  echo -e "${RED}❌ Deployment verification failed${NC}"
  echo -e "${YELLOW}Container logs:${NC}"
  docker-compose -p $COMPOSE_PROJECT_NAME logs
  
  # Rollback if backup exists
  if [ -f "docker-compose.yml.backup" ]; then
    echo -e "${YELLOW}Rolling back to previous deployment...${NC}"
    mv docker-compose.yml.backup docker-compose.yml
    docker-compose -p $COMPOSE_PROJECT_NAME up -d
  fi
  
  exit 1
fi

# Print final status
echo -e "\n${GREEN}=== Deployment Summary ===${NC}"
echo -e "Application: ${BLUE}$APP_NAME${NC}"
echo -e "Port: ${BLUE}$PORT${NC}"
echo -e "Status: ${GREEN}Running${NC}"
echo -e "Access URL: ${BLUE}http://localhost:$PORT${NC}"
echo -e "${YELLOW}Note: Remember to update your reverse proxy configuration if needed${NC}"
