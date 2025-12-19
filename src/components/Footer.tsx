import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Paramount Intelligence" className="h-10 w-auto brightness-0 invert" />
              <span className="font-heading font-bold text-lg">
                Paramount Intelligence
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Automating intelligence, engineering autonomy.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Business Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">For Business</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/rag-engineering" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Social Media</h4>
            <a
              href="https://www.linkedin.com/company/paramount-intelligence-co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-primary-foreground/60 text-sm">
            All rights reserved © 2025 Paramount Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
