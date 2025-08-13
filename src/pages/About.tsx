// import React from 'react';
import { Shield, Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            About Auto First
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed">
            Dedicated to keeping South Africa moving with reliable, 
            professional automotive services 
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional roadside assistance and mechanical services that ensure our 
                customers' safety, minimize downtime, and deliver peace of mind on every journey.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be South Africa's most trusted and innovative automotive assistance provider, 
                setting industry standards through technology, expertise, and customer service excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, reliability, and customer-centricity guide everything we do. We believe 
                in building lasting relationships through honest service and consistent excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg"
                alt="Professional mechanic at work"
                className="rounded-xl shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                {/* <p>
                  Auto First Mechanical Aid was founded in 2010 with a simple yet powerful vision: 
                  to transform the roadside assistance industry in South Africa. Our founder, 
                  Michael Thompson, a veteran automotive engineer with over 20 years of experience, 
                  recognized the gap in reliable, professional emergency vehicle services.
                </p>
                 */}
                <p>
                 Auto-First began as a passionate side hustle that I operated from my garage, driven by a vision to provide affordable vehicle protection to South African motorists. What started as a modest operation has grown into a thriving business over our five-year journey. While we're proud to have assisted thousands of customers with their mechanical needs, we remain focused on our 99.5% customer satisfaction rate as we work toward our goal of transforming this garage-born business into a major industry player. Every day, we're building on those humble beginnings to create a company that maintains its personal touch while expanding our reach and services.
                </p>

                {/* <p>
                  What started as a small operation with just two service vehicles has grown into 
                  South Africa's premier mechanical aid service, operating across all major cities 
                  and highways. We've assisted thousands of customers and maintained a 99.5% 
                  customer satisfaction rating.
                </p> */}
                
                {/* <p>
                  Today, Auto First continues to innovate, incorporating cutting-edge diagnostic 
                  technology and expanding our service offerings to meet the evolving needs of 
                  modern drivers. Our commitment remains unchanged: delivering exceptional service 
                  when you need it most.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to automotive excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Michael Thompson"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Thompson</h3>
              <p className="text-orange-500 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                20+ years automotive engineering experience. Passionate about customer service excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"
                alt="Sarah Mitchell"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Mitchell</h3>
              <p className="text-orange-500 font-semibold mb-4">Operations Director</p>
              <p className="text-gray-600">
                Expert in logistics and fleet management. Ensures 24/7 service availability nationwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg"
                alt="David Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">David Rodriguez</h3>
              <p className="text-orange-500 font-semibold mb-4">Technical Director</p>
              <p className="text-gray-600">
                Master technician specializing in modern vehicle diagnostics and repair technologies.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              By The Numbers
            </h2>
            <p className="text-xl text-white">
              Trusted by thousands across South Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">50,000+</div>
              <p className="text-white text-lg">Customers Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">99.5%</div>
              <p className="text-white text-lg">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">24/7</div>
              <p className="text-white text-lg">Service Availability</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">15</div>
              <p className="text-white text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;