import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Shri Sanwariya Road Lines" 
                className="h-12 w-auto"
              />
              <div>
                <span className="text-xl font-bold">Shri Sanwariya Road Lines</span>
                <p className="text-xs text-background/70 -mt-1">
                  Trusted Transport Partner
                </p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              We provide reliable logistics and truck transport services across Mumbai, Delhi, Pune, Indore, Ahmedabad, Jaipur, Bengaluru, Chennai, Hyderabad, Kolkata, and all major cities in India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Our Fleet", path: "/fleet" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Full Truck Load",
                "Part Truck Load",
                "Express Delivery",
                "Warehousing",
                "Last Mile Delivery",
                "Same Day Dispatch",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-background/80 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-background/80">Phone / WhatsApp</p>
                  <a
                    href="tel:+916260001228"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    +91 6260001228
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-background/80">Email</p>
                  <a
                    href="mailto:info@shrisanwariyaroadlines.in"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    info@shrisanwariyaroadlines.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-background/80">Head Office</p>
                  <a
                    href="https://maps.app.goo.gl/j8x5jppczWW8W2w2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Plot No. 24, New Loha Mandi, Gopal Ganj Square, Dewas Naka, Indore - 452010
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              © {currentYear} Shri Sanwariya Road Lines. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-background/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
