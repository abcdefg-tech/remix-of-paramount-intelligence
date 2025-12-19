import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

const services = [
  { name: 'Custom Large Language Model', path: '/services/custom-llm' },
  { name: 'RAG Advanced Engineering', path: '/services/rag-engineering' },
  { name: 'LangChain Development', path: '/services/langchain-development' },
  { name: 'AI Consulting & Advisory', path: '/services/ai-consulting' },
  { name: 'LLM Development', path: '/services/llm-development' },
  { name: 'LLM Ops Service', path: '/services/llm-ops' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elegant'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Paramount Intelligence" className="h-10 w-auto" />
            <span className="font-heading font-bold text-xl text-primary">
              Paramount Intelligence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-lg border border-border overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/case-studies"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Case Studies
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="bg-primary-foreground text-primary border-2 border-primary px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="py-4 space-y-2">
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-secondary"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="block px-8 py-3 text-sm text-foreground hover:text-primary"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link
                  to="/case-studies"
                  className="block px-4 py-3 text-foreground font-medium hover:text-primary"
                >
                  Case Studies
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-3 text-foreground font-medium hover:text-primary"
                >
                  About Us
                </Link>
                <div className="px-4 pt-2">
                  <Link
                    to="/contact"
                    className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
