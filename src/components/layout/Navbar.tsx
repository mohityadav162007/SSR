import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Fleet", path: "/fleet" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg",
        isScrolled
          ? "bg-black/40 shadow-lg border-b border-white/10"
          : "bg-black/20"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Shri Sanwariya Road Lines" 
              className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <span className="text-xl font-bold text-white">
                Shri Sanwariya Road Lines
              </span>
              <p className="text-xs text-white/70 -mt-1">
                Trusted Transport Partner
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative group",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-white hover:text-primary"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
            <Link to="/contact">
              <Button className="hover-glow">Request Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "block py-2 text-sm font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-white hover:text-primary hover:translate-x-2"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="block pt-2">
            <Button className="w-full">Request Quote</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
