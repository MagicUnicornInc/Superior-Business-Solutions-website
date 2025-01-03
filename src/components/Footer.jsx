export default function Footer() {
      return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Phone: +1 (631) 681-3196</p>
              <p>Email: jaclyn@superiorbsolutions.com</p>
              <p>Address: 1050 Hallock Ave, Port Jefferson Station, NY 11776</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/about" className="hover:text-gray-400">About</a></li>
                <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Superior Business Solutions. All rights reserved.</p>
          </div>
        </footer>
      )
    }
