import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCTAProps {
  title: string;
}

const ServiceCTA = ({ title }: ServiceCTAProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-background rounded-xl p-8 md:p-12 shadow-elegant text-center"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-8">
            Contact us to discuss how we can help with your {title.toLowerCase()} needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-navy-light hover:shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
