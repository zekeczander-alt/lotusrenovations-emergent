import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo } from '../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold">Lotus Renovations</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming homes with exceptional craftsmanship and attention to detail. 
              Your trusted partner for all renovation projects, from kitchens and baths to complete home makeovers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-amber-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-amber-500 transition-colors">Testimonials</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-amber-500 transition-colors">Our Process</Link></li>
              <li><Link to="/estimate" className="text-gray-300 hover:text-amber-500 transition-colors">Get Estimate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-gray-300">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-gray-300">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-gray-300">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Licensed & Insured<br />
                License #: {contactInfo.licenseNumber}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lotus Renovations. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};