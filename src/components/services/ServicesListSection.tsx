import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface Service {
  title: string;
  description: string;
}

interface ServicesListSectionProps {
  title: string;
  subtitle: string;
  services: Service[];
}

const ServicesListSection = ({ title, subtitle, services }: ServicesListSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Services List */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeService === index
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background hover:bg-primary/10 text-foreground'
                }`}
              >
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Service Card */}
          <div className="bg-background rounded-xl p-8 shadow-elegant">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                {services[activeService].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {services[activeService].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesListSection;
