import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake, Lightbulb, Settings, CheckCircle, Monitor } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  title: string;
  reasons: Reason[];
}

const iconMap: Record<string, LucideIcon> = {
  handshake: Handshake,
  lightbulb: Lightbulb,
  settings: Settings,
  checkmark: CheckCircle,
  computer: Monitor,
};

const WhyChooseUsSection = ({ title, reasons }: WhyChooseUsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12"
        >
          {title}
        </motion.h2>

        <div className={`grid gap-8 ${reasons.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
          {reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon] || Handshake;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
