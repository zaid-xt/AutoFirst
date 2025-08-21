// import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team - we're here to help 24/7
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Whether you need emergency assistance, want to learn about our services, 
                or have questions about packages, we're here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Hotline</h3>
                    <a
                      href="tel:+27123456789"
                      className="text-red-600 hover:text-red-700 font-semibold text-lg transition-colors block"
                    >
                      +27 12 345 6789
                    </a>
                    <p className="text-gray-600 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">General Inquiries</h3>
                    <a
                      href="tel:+27115551234"
                      className="text-red-600 hover:text-red-700 font-semibold text-lg transition-colors block"
                    >
                      +27 11 555 1234
                    </a>
                    <p className="text-gray-600 mt-1">Monday - Friday: 8AM - 6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                    <a
                      href="mailto:info@autofirst.co.za"
                      className="text-red-600 hover:text-red-700 font-semibold text-lg transition-colors block"
                    >
                      info@autofirst.co.za
                    </a>
                    <a
                      href="mailto:bookings@autofirst.co.za"
                      className="text-red-600 hover:text-red-700 font-semibold text-lg transition-colors block"
                    >
                      bookings@autofirst.co.za
                    </a>
                    <p className="text-gray-600 mt-1">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Head Office</h3>
                    <p className="text-gray-700 leading-relaxed">
                      123 Service Road<br />
                      Johannesburg Central<br />
                      Johannesburg, 2000<br />
                      South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form
                action="https://api.web3forms.com/submit/"
                method="POST"
                className="space-y-6"
                target="_self"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="e4e0d434-3028-497f-866a-69ab847863f0" />

            {/* Redirect to React Thank You page */}
            <input type="hidden" name="redirect" value={`${window.location.origin}/thank-you`} />

            {/* First Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="first_name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
              />
            </div>
            <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name *
            </label>
            <input
            type="text"
            name="last_name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
            />
          </div>
          </div>

          {/* Email */}
          <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
           Email Address *
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
            />
          </div>

        {/* Phone */}
          <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
          </label>
          <input
          type="tel"
          name="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

  {/* Subject */}
  <div>
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    Subject *
  </label>
  <select
  name="subject"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
  required
>
  <option value="">Select a subject</option>
  <option value="General Inquiry">General Inquiry</option>
  <option value="Service Question">Service Question</option>
  <option value="Package Information">Package Information</option>
  <option value="Complaint">Complaint</option>
  <option value="Compliment">Compliment</option>
</select>
</div>

  {/* Message */}
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Message *
    </label>
    <textarea
      name="message"
      rows={5}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
      placeholder="Tell us how we can help you..."
      required
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-red-800 hover:bg-red-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 hover:shadow-lg"
  >
    Send Message
  </button>
</form>

            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-red-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Services</h3>
              <p className="text-gray-600 text-lg font-semibold">24/7</p>
              <p className="text-gray-500">Available every day</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-red-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Support</h3>
              <p className="text-gray-600">
                Monday - Friday: 8AM - 6PM<br />
                Saturday: 9AM - 4PM<br />
                Sunday: 10AM - 2PM
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-red-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8AM - 5PM<br />
                Saturday: 9AM - 1PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find Us</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Visit our head office or find us anywhere in South Africa through our mobile service
      </p>
    </div>

    <div className="rounded-2xl overflow-hidden h-96 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3396766504025!2d18.68943658812081!3d-33.932390653247374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc51e6ac8a654f%3A0x5b0da9390693fadb!2s6%20Mossie%20St%2C%20Kuils%20River%2C%20Cape%20Town%2C%207580!5e0!3m2!1sen!2sza!4v1754250930260!5m2!1sen!2sza"
        width="100%"
        height="100%"
        style={{ border: 0 }}
       
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  </div>
</section>



      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Follow Us
          </h2>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Stay connected for updates, tips, and special offers
          </p>

         <div className="flex justify-center space-x-8">
  <a
    href="#"
    className="bg-red-700 text-white hover:bg-white hover:text-black p-4 rounded-full transition-colors duration-300 transform hover:scale-110"
  >
    <Facebook className="h-8 w-8" />
  </a>
  <a
    href="#"
    className="bg-red-700 text-white hover:bg-white hover:text-black p-4 rounded-full transition-colors duration-300 transform hover:scale-110"
  >
    <Instagram className="h-8 w-8" />
  </a>
  <a
    href="#"
    className="bg-red-700 text-white hover:bg-white hover:text-black p-4 rounded-full transition-colors duration-300 transform hover:scale-110"
  >
    <Twitter className="h-8 w-8" />
  </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;