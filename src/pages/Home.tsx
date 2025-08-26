import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Shield, Clock, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Auto First saved my day! My car broke down on the highway and they had me back on the road within an hour. Professional and reliable service.",
    },
    {
      name: "Mike Peters",
      rating: 5,
      text: "Excellent service and fair pricing. The technician was knowledgeable and explained everything clearly. Highly recommend!",
    },
    {
      name: "Lisa Williams",
      rating: 5,
      text: "24/7 availability is a game-changer. Had an emergency and they were there promptly. Outstanding customer service!",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-16">
      {/* SEO META TAGS */}
      <Helmet>
        <title>Auto First | 24/7 Roadside Assistance & Vehicle Repairs in South Africa</title>
        <meta
          name="description"
          content="Auto First offers professional roadside assistance, vehicle repairs, and emergency breakdown services available 24/7 across South Africa. Fast, reliable, and trusted."
        />
        <meta
          name="keywords"
          content="roadside assistance, vehicle repairs, breakdown recovery, emergency car repair, towing services, South Africa"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* Open Graph */}
        <meta property="og:title" content="Auto First | 24/7 Roadside Assistance & Vehicle Repairs" />
        <meta property="og:description" content="Fast, reliable roadside assistance and vehicle repairs available anytime, anywhere in South Africa." />
        <meta property="og:image" content="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg" />
        <meta property="og:url" content="https://www.autofirst.co.za" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black/40 to-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg"
            alt="Professional mechanic working on car"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Breakdowns happen —<br/>
            <span style={{ color: '#b91c1c', fontWeight: 'bold' }}>We've got you sorted</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-5xl mx-auto leading-relaxed">
            Professional roadside assistance and vehicle repair services available 24/7. 
            Get back on the road quickly with South Africa's most trusted mechanical aid service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="bg-[#b91c1c] hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <span className="text-white">View Packages</span>
              <ArrowRight className="ml-2 h-5 w-5 text-white" />
            </Link>
            <Link
              to="/book"
               className="border-2 border-white text-white hover:bg-white hover:text-[#b91c1c] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center"
               >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Auto First?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With years of experience in automotive services, Auto First Mechanical Aid 
              has established itself as South Africa's premier roadside assistance provider. 
              We combine cutting-edge technology with experienced technicians to deliver 
              unmatched service quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-red-800 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliable Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Trusted by thousands of customers across South Africa. Our proven track record 
                speaks for itself with 99.5% customer satisfaction.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-red-800 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock emergency assistance. Whether it's 3 AM or a public holiday, 
                we're always ready to help when you need us most.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-red-800 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Technicians</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified mechanics with extensive experience across all vehicle makes and models. 
                Professional, courteous, and highly skilled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive solutions designed to keep you moving
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Vehicle Repairs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From routine maintenance to complex repairs, our certified technicians handle 
                all your vehicle needs with precision and care.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full mr-3"></div>
                  Engine diagnostics and repair
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full mr-3"></div>
                  Brake system maintenance
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full mr-3"></div>
                  Electrical system repairs
                </li>
              </ul>
              <Link
                to="/services"
                  className="text-[#b91c1c] hover:text-red-700 font-semibold flex items-center transition-colors"
>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Mechanical Breakdowns</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stranded on the road? Our emergency response team provides rapid assistance 
                to get you back on track safely.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full mr-3"></div>
                  24/7 emergency callouts
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full mr-3"></div>
                  On-site diagnostic services
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#b91c1c] rounded-full mr-3"></div>
                  Towing and recovery services
                </li>
              </ul>
              <Link
                to="/services"
                  className="text-[#b91c1c] hover:text-red-700 font-semibold flex items-center transition-colors"
                  >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-[#b91c1c] hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >            
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 text-center mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-red-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-black-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Auto First for their vehicle needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="bg-[#b91c1c] hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Choose Your Package
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-[#b91c1c] hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;