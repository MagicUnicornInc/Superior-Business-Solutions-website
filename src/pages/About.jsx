export default function About() {
      return (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">About Superior Business Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Superior Business Solutions is a boutique CPA firm with over 20 years of experience, 
                  offering personalized accounting and bookkeeping services tailored to businesses of all sizes.
                </p>
                <p className="mb-4">
                  Our mission is to provide comprehensive financial solutions that help our clients achieve 
                  their business goals while maintaining compliance and maximizing profitability.
                </p>
                <p>
                  We pride ourselves on building long-term relationships with our clients, offering 
                  personalized attention and customized solutions to meet their unique needs.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Integrity and professionalism</li>
                  <li>Personalized service</li>
                  <li>Timely and accurate reporting</li>
                  <li>Continuous education and improvement</li>
                  <li>Client-focused solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )
    }
