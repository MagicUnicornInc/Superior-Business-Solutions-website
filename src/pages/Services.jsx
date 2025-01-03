import { FaCalculator, FaChartPie, FaBuilding, FaBook, FaLightbulb } from 'react-icons/fa'

    export default function Services() {
      const services = [
        {
          title: 'Tax Returns',
          description: 'Comprehensive tax preparation ensuring maximum deductions and full compliance with current tax laws.',
          icon: <FaCalculator className="text-4xl text-primary" />,
          features: ['Individual & Business Returns', 'Electronic Filing', 'Tax Liability Analysis']
        },
        {
          title: 'Tax Planning',
          description: 'Strategic tax planning to minimize future tax burdens and optimize your financial position.',
          icon: <FaChartPie className="text-4xl text-primary" />,
          features: ['Tax Reduction Strategies', 'Investment Planning', 'Retirement Planning']
        },
        {
          title: 'Corporation Setups',
          description: 'Expert guidance in establishing and structuring your business for optimal success.',
          icon: <FaBuilding className="text-4xl text-primary" />,
          features: ['Entity Selection', 'License Applications', 'Compliance Setup']
        },
        {
          title: 'Bookkeeping',
          description: 'Accurate and timely financial reporting to keep your business on track.',
          icon: <FaBook className="text-4xl text-primary" />,
          features: ['Financial Statements', 'Payroll Services', 'Account Reconciliation']
        },
        {
          title: 'Business Coaching',
          description: 'Strategic guidance to help your business grow and thrive in today\'s competitive market.',
          icon: <FaLightbulb className="text-4xl text-primary" />,
          features: ['Growth Strategies', 'Market Analysis', 'Performance Optimization']
        }
      ]

      return (
        <div>
          {/* Hero Section */}
          <section className="bg-primary text-white py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your unique needs
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how we can help you achieve your financial goals.
              </p>
              <a 
                href="/contact" 
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition duration-300 inline-block"
              >
                Schedule a Consultation
              </a>
            </div>
          </section>
        </div>
      )
    }
