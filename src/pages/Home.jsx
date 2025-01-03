import { FaChartLine, FaHandshake, FaShieldAlt, FaClock } from 'react-icons/fa'

    export default function Home() {
      return (
        <div>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-32">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="max-w-6xl mx-auto px-4 relative">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold mb-6 leading-tight">
                  Transform Your Financial Future with Expert CPA Services
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Over 20 years of excellence in providing strategic financial guidance and personalized accounting solutions for businesses and individuals.
                </p>
                <div className="space-x-4">
                  <a href="/contact" 
                    className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block">
                    Schedule Free Consultation
                  </a>
                  <a href="/services" 
                    className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition duration-300 inline-block">
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-gray-600">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16">Why Choose Superior Business Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                  <FaChartLine className="text-4xl text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Strategic Approach</h3>
                  <p className="text-gray-600">Customized solutions that align with your business goals and maximize financial efficiency.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                  <FaHandshake className="text-4xl text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Personal Touch</h3>
                  <p className="text-gray-600">Direct access to experienced CPAs who understand your unique business needs.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                  <FaShieldAlt className="text-4xl text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Tax Protection</h3>
                  <p className="text-gray-600">Comprehensive tax planning strategies to minimize liability and ensure compliance.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                  <FaClock className="text-4xl text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Timely Service</h3>
                  <p className="text-gray-600">Prompt responses and reliable support when you need it most.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Finances?</h2>
              <p className="text-xl mb-8">
                Schedule your free consultation today and discover how we can help optimize your financial future.
              </p>
              <a 
                href="/contact" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
              >
                Get Started Now
              </a>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">"Superior Business Solutions transformed our financial operations. Their expertise and personal attention are unmatched."</p>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-gray-500">CEO, Tech Startup</div>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">"Their tax planning strategies saved us thousands. Highly recommended for any growing business."</p>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-gray-500">Small Business Owner</div>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <p className="text-gray-600 mb-4">"Professional, responsive, and truly invested in our success. They're more than just our CPAs."</p>
                  <div className="font-semibold">Michael Brown</div>
                  <div className="text-gray-500">Restaurant Chain Owner</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
