import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setToast({ show: true, type: "success", message: "Message sent successfully!" });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setToast({ show: true, type: "error", message: "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setToast({ show: true, type: "error", message: "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ ...toast, show: false }), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="pt-16 relative">
      {/* SEO Helmet */}
      <Helmet>
        <title>Contact Auto First | 24/7 Roadside Assistance & Support</title>
        <meta
          name="description"
          content="Contact Auto First today for 24/7 roadside assistance, towing, and vehicle support across South Africa. Call us anytime for emergencies or general inquiries."
        />
        <meta
          name="keywords"
          content="Auto First contact, roadside assistance South Africa, 24/7 towing, emergency vehicle service, Auto First phone number, Auto First email"
        />
        <link rel="canonical" href="https://autofirst.co.za/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Auto First | 24/7 Roadside Assistance & Support" />
        <meta
          property="og:description"
          content="Get in touch with Auto First for professional roadside assistance, towing services, and vehicle support anywhere in South Africa."
        />
        <meta property="og:image" content="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg" />
        <meta property="og:url" content="https://autofirst.co.za/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team - we're here to help 24/7
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Whether you need emergency assistance, want to learn about our services, 
                or have questions about packages, we're here to help.
              </p>

              <div className="space-y-8">
                {/* Emergency */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Hotline</h3>
                    <a href="tel:+27123456789" className="text-red-600 hover:text-red-700 font-semibold text-lg block">
                      +27 12 345 6789
                    </a>
                    <p className="text-gray-600 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                {/* General */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">General Inquiries</h3>
                    <a href="tel:+27115551234" className="text-red-600 hover:text-red-700 font-semibold text-lg block">
                      +27 11 555 1234
                    </a>
                    <p className="text-gray-600 mt-1">Monday - Friday: 8AM - 6PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                    <a href="mailto:admin@autofirst.co.za" className="text-red-600 hover:text-red-700 font-semibold text-lg block">
                      admin@autofirst.co.za
                    </a>
                    <a href="mailto:bookings@autofirst.co.za" className="text-red-600 hover:text-red-700 font-semibold text-lg block">
                      bookings@autofirst.co.za
                    </a>
                    <p className="text-gray-600 mt-1">Response within 2 hours</p>
                  </div>
                </div>

                {/* Head Office */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Head Office</h3>
                    <p className="text-gray-700 leading-relaxed">
                      06 Mossie Street<br />
                  Setaria, Thabazimbi<br />
                  Limpopo, 0383<br />
                  South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition-all"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name *"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition-all"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition-all"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition-all"
                />

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition-all bg-white text-gray-900"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Service Question">Service Question</option>
                  <option value="Package Information">Package Information</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Compliment">Compliment</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition-all resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-800 hover:bg-red-900 text-white py-4 px-6 rounded-lg font-semibold transition-colors"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* Toast */}
              {toast.show && (
                <div
                  className={`absolute top-4 right-4 p-4 rounded-lg shadow-lg text-white ${
                    toast.type === "success" ? "bg-green-600" : "bg-red-600"
                  } animate-slide-in`}
                >
                  {toast.message}
                </div>
              )}
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
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600">admin@autofirst.co.za<br />bookings@autofirst.co.za</p>
              <p className="text-gray-500">Response within 2 hours</p>
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
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3621.951455335602!2d27.399317076122863!3d-24.797112108153392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzQ5LjYiUyAyN8KwMjQnMDYuOCJF!5e0!3m2!1sen!2sza!4v1756230055784!5m2!1sen!2sza"
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