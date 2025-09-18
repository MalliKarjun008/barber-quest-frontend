import { Scissors, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-barbershop-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-barbershop-gold p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-barbershop-navy" />
              </div>
              <span className="font-bold text-xl">BarberBook</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your premier destination for booking appointments at the finest barbershops. 
              Experience professional grooming with just a few clicks.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-barbershop-gold" />
                <span>(555) 123-BARBER</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-barbershop-gold" />
                <span>info@barberbook.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-barbershop-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-barbershop-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shops"
                  className="text-primary-foreground/80 hover:text-barbershop-gold transition-colors"
                >
                  Find Shops
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-barbershop-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-barbershop-gold transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-barbershop-gold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-barbershop-gold mt-1" />
                <div className="text-sm text-primary-foreground/80">
                  <p>123 Business Street</p>
                  <p>Downtown, NY 10001</p>
                </div>
              </div>
              <div className="text-sm text-primary-foreground/80">
                <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                <p>Sat - Sun: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 BarberBook. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;