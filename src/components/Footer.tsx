import React from 'react';
import autoFirstLogo from '../images/auto first.png';

// ✅ Import Payment Logos
import PayFastLogo from "../images/assets/Payfast logo.svg";
import MasterCardLogo from "../images/assets/Master Card.svg";
import VisaLogo from "../images/assets/sid.svg";
import SecureIDLogo from "../images/assets/SCode_logoMark_grp.svg";
import InstantEft from "../images/assets/instantEFT_hi-Res_logo_svg.svg";
import Paygate from "../images/assets/PayGate-3D-Secure-Logo-Verified-by-Visa.png";

import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src={autoFirstLogo}
                alt="Auto First Logo"
                className="h-36 w-36 rounded-lg object-contain filter brightness-150 drop-shadow-lg"
              />
            </div>

            <p className="text-gray-300 mb-4">
              Professional roadside assistance and vehicle repair services.
              Available 24/7 to keep you moving.
            </p>

            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-red-700 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-red-700 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-700 transition-colors">
                  Contact
                </Link>
              </li>
               <li>
                <Link to="/Privacy-Policy" className="text-gray-300 hover:text-red-700 transition-colors">
                 Privacy Policy
                </Link>
              </li>
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
                <Phone className="h-5 w-5 text-red-700" />
                <a href="tel:+27649044716" className="text-gray-300 hover:text-red-700 transition-colors">
                   +27 64 904 4716
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-10 w-5 text-red-700" />
                <a href="mailto:admin@autofirstmechanicalaid.co.za" className="text-gray-300 hover:text-red-700 text-sm transition-colors">
                  admin@autofirstmechanicalaid.co.za
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-700 mt-1" />
                <span className="text-gray-300">
                  06 Mossie Street<br />
                  Setaria, Thabazimbi<br />
                  Limpopo, 0383<br />
                  South Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Payment Logos */}
            <div className="flex flex-wrap justify-center items-center gap-5">
              <img src={PayFastLogo} alt="PayFast" className="h-12 object-contain p-2 rounded-lg " />
              <img src={VisaLogo} alt="Visa" className="h-12 object-contain  p-2 rounded-lg " />
              <img src={MasterCardLogo} alt="MasterCard" className="h-12 object-contain  p-2 " />
              <img src={SecureIDLogo} alt="Secure ID" className="h-12 object-contain  p-2 " />
              <img src={InstantEft} alt="Instant EFT" className="h-12 object-contain  p-2 " />
              <img src={Paygate} alt="PayGate" className="h-12 object-contain  p-2 " />
            </div>

            {/* Copyright */}
            <p className="text-white-400 text-sm">
              © 2025 Auto First Mechanical Aid. All rights reserved.
            </p>
             <p className="text-white text-sm mt-2">
            Powered by <a href="https://www.devtechinnovations.co.za/" className="font-bold text-white hover:text-red-700 transition-colors">DevTech Innovations</a>
        </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
