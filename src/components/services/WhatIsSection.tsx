import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface WhatIsSectionProps {
  title: string;
  description: string;
}

const WhatIsSection = ({ title, description }: WhatIsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
