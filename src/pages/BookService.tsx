import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Car, User, Phone, Mail, MessageSquare } from 'lucide-react';

const BookService = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    issueDescription: '',
    pickupLocation: '',
    preferredDate: '',
    preferredTime: '',
    serviceType: 'repair',
    urgency: 'normal'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Service request submitted successfully! We will contact you shortly.');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Book a Service
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get professional automotive assistance tailored to your needs
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Service Request Form
                </h2>
                <p className="text-xl text-gray-600">
                  Fill in the details below and we'll get back to you within 30 minutes
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Service Type Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="repair">Common Vehicle Repair</option>
                      <option value="emergency">Emergency Breakdown</option>
                      <option value="maintenance">Routine Maintenance</option>
                      <option value="inspection">Vehicle Inspection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="normal">Normal (24-48 hours)</option>
                      <option value="urgent">Urgent (Same day)</option>
                      <option value="emergency">Emergency (ASAP)</option>
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <User className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          required
                          placeholder="+27 12 345 6789"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Car className="h-6 w-6 text-orange-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Vehicle Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vehicle Make *
                      </label>
                      <input
                        type="text"
                        name="vehicleMake"
                        value={formData.vehicleMake}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        required
                        placeholder="e.g., Toyota"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vehicle Model *
                      </label>
                      <input
                        type="text"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        required
                        placeholder="e.g., Corolla"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Year
                      </label>
                      <input
                        type="number"
                        name="vehicleYear"
                        value={formData.vehicleYear}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        min="1980"
                        max="2025"
                        placeholder="2020"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Issue Description *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        name="issueDescription"
                        value={formData.issueDescription}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                        required
                        placeholder="Please describe the issue you're experiencing with your vehicle..."
                      />
                    </div>
                  </div>
                </div>

                {/* Location and Schedule */}
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Location & Schedule</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Pickup/Service Location *
                      </label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        required
                        placeholder="Enter full address or describe location"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                            required
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select time preference</option>
                            <option value="morning">Morning (8AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 5PM)</option>
                            <option value="evening">Evening (5PM - 8PM)</option>
                            <option value="anytime">Anytime</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-900 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Submit Service Request
                  </button>
                  
                  <p className="text-gray-600 mt-4">
                    We'll contact you within 30 minutes to confirm your request
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              For urgent requests or if you prefer to speak directly with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Hotline</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for emergencies</p>
              <a
                href="tel:+27123456789"
                className="text-red-600 hover:text-red-700 font-semibold text-lg transition-colors"
              >
                +27 12 345 6789
              </a>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp Chat</h3>
              <p className="text-gray-600 mb-4">Quick response via messaging</p>
              <button
                onClick={() => {
                  const message = encodeURIComponent("Hi, I need to book a service");
                  window.open(`https://wa.me/27123456789?text=${message}`, '_blank');
                }}
                className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors"
              >
                Start Chat
              </button>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-4">Non-urgent inquiries</p>
              <a
                href="mailto:bookings@autofirst.co.za"
                className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
              >
                bookings@autofirst.co.za
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookService;