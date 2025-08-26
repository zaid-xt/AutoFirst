import { Shield, Award, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className="pt-16">
      {/* SEO Meta Tags */}
       <Helmet>
        <title>About Auto First | Reliable Roadside Assistance in South Africa</title>
        <meta
          name="title"
          content="About Auto First | Reliable Roadside Assistance in South Africa"
        />
        <meta
          name="description"
          content="Discover Auto First's mission, vision, and values. We are South Africa's trusted roadside assistance and vehicle service provider, committed to keeping you moving."
        />
        <meta
          name="keywords"
          content="Auto First, roadside assistance South Africa, emergency vehicle service, auto repair, breakdown service, towing South Africa, mechanical aid services, vehicle maintenance, car repair South Africa, 24/7 roadside help, professional automotive services, vehicle protection plans"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://www.autofirst.co.za/about" />

         {/* Open Graph / Social */}
        <meta property="og:title" content="About Auto First | Reliable Roadside Assistance" />
        <meta
          property="og:description"
          content="Learn about Auto First – our mission, vision, and values. Trusted by thousands for fast, reliable roadside assistance in South Africa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.autofirst.co.za/about" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg"
        />
        <meta property="og:site_name" content="Auto First" />
      </Helmet>

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
                <p>
                  Auto-First began as a passionate side hustle that I operated from my garage, driven by a vision to provide affordable vehicle protection to South African motorists. What started as a modest operation has grown into a thriving business over our five-year journey. While we're proud to have assisted thousands of customers with their mechanical needs, we remain focused on our 99.5% customer satisfaction rate as we work toward our goal of transforming this garage-born business into a major industry player. Every day, we're building on those humble beginnings to create a company that maintains its personal touch while expanding our reach and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="text-5xl font-bold text-red-500 mb-2">50,000</div>
              <p className="text-white text-lg">Customers Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">99.5%</div>
              <p className="text-white text-lg">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">24/7</div>
              <p className="text-white text-lg">Service Availability</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">5</div>
              <p className="text-white text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
