import React from 'react';
import { Wrench, Zap, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Professional automotive solutions designed to keep you safe and mobile
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Common Vehicle Repairs */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-2xl">
              <div className="bg-blue-800 p-4 rounded-full w-16 h-16 mb-8 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Vehicle Repairs
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Comprehensive repair services for all makes and models, performed by certified technicians 
                using state-of-the-art equipment and genuine parts.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Complete engine diagnostics and repair</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Brake system inspection and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Electrical system troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Transmission services and repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Air conditioning and heating systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Suspension and steering components</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How Clients Qualify:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vehicle must be roadworthy and accessible</li>
                  <li>• Service area coverage (major cities and highways)</li>
                  <li>• Valid identification and vehicle registration</li>
                  <li>• Pre-authorization for estimated repair costs</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Process:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Apply</h4>
                      <p className="text-gray-600">Contact us via phone, web, or WhatsApp with vehicle details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Review</h4>
                      <p className="text-gray-600">Initial assessment and quote provided within 30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Assistance</h4>
                      <p className="text-gray-600">Certified technician dispatched to your location</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Resolution</h4>
                      <p className="text-gray-600">Professional repair completed with warranty included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Mechanical Breakdowns */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-2xl">
              <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mb-8 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Emergency Mechanical Breakdowns
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                24/7 emergency response service for when you're stranded. Our rapid response team 
                gets you back on the road quickly and safely.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">24/7 emergency callout service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">On-site diagnostic and troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Jump-start and battery replacement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Flat tire repair and replacement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Towing and recovery services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Emergency fuel delivery</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How Clients Qualify:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Active subscription or pay-per-service option</li>
                  <li>• Location within service coverage area</li>
                  <li>• Safe and accessible breakdown location</li>
                  <li>• Valid contact information for dispatch</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Process:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Apply</h4>
                      <p className="text-gray-600">Call emergency hotline or use mobile app to request help</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Review</h4>
                      <p className="text-gray-600">Location confirmed and nearest technician dispatched</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Assistance</h4>
                      <p className="text-gray-600">Emergency technician arrives within promised timeframe</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Resolution</h4>
                      <p className="text-gray-600">Issue resolved on-site or vehicle safely towed to garage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional excellence backed by years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Response</h3>
              <p className="text-gray-600">
                Emergency callouts within 45 minutes, regular services scheduled at your convenience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guaranteed Work</h3>
              <p className="text-gray-600">
                All repairs come with comprehensive warranty and satisfaction guarantee
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Technicians</h3>
              <p className="text-gray-600">
                Certified professionals with extensive training on all vehicle makes and models
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art diagnostic tools and equipment for accurate, efficient service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Our Services?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Don't let vehicle problems slow you down. Get professional help today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Book Service Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;