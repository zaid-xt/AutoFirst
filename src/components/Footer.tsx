import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Auto First</span>
                <span className="text-sm text-gray-300 block -mt-1">Mechanical Aid</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional roadside assistance and vehicle repair services. Available 24/7 to keep you moving.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-orange-500 transition-colors">Packages</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Emergency Breakdowns</li>
              <li>Vehicle Repairs</li>
              <li>Roadside Assistance</li>
              <li>Towing Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+27123456789" className="text-gray-300 hover:text-orange-500 transition-colors">
                  +27 12 345 6789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:info@autofirst.co.za" className="text-gray-300 hover:text-orange-500 transition-colors">
                  info@autofirst.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-300">
                  123 Service Road<br />
                  Johannesburg, 2000<br />
                  South Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Auto First Mechanical Aid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;