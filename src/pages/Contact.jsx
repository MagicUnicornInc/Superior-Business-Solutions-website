import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

    export default function Contact() {
      return (
        <div>
          {/* Hero Section */}
          <section className="bg-primary text-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Get in touch with our team of experts for personalized financial solutions
              </p>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FaPhone className="text-primary mt-1 mr-4" />
                        <div>
                          <div className="font-semibold">Phone</div>
                          <a href="tel:+16316813196" className="text-gray-600 hover:text-primary">+1 (631) 681-3196</a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaEnvelope className="text-primary mt-1 mr-4" />
                        <div>
                          <div className="font-semibold">Email</div>
                          <a href="mailto:jaclyn@superiorbsolutions.com" className="text-gray-600 hover:text-primary">jaclyn@superiorbsolutions.com</a>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-primary mt-1 mr-4" />
                        <div>
                          <div className="font-semibold">Address</div>
                          <div className="text-gray-600">1050 Hallock Ave, Port Jefferson Station, NY 11776</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaClock className="text-primary mt-1 mr-4" />
                        <div>
                          <div className="font-semibold">Business Hours</div>
                          <div className="text-gray-600">
                            Monday - Friday: 9:00 AM - 5:00 PM<br />
                            Saturday: By Appointment<br />
                            Sunday: Closed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="text-xl font-bold mb-6">Location</h3>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.7604307925417!2d-73.0651892!3d40.9276283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8483b8b6be6ef%3A0x9bb0d0f1b08340d8!2s1050%20Hallock%20Ave%2C%20Port%20Jefferson%20Station%2C%20NY%2011776!5e0!3m2!1sen!2sus!4v1629308000000!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
