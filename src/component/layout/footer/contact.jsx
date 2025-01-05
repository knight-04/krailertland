import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-extrabold mb-8 text-amber-500">Contact Us</h3>
            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <MapPin className="text-amber-500" />
                <span>123 เมืองเอก คลองหลวง ปทุมธานี 11200</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-amber-500" />
                <span>+66 2 123 4567</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-amber-500" />
                <span>contact@yourdomain.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-amber-500" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5438771523025!2d100.56324707475226!3d13.745287297998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQzLjAiTiAxMDDCsDMzJzUyLjAiRQ!5e0!3m2!1sen!2sth!4v1620120000000!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
