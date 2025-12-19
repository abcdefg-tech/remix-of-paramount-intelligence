import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            We strive to lead the field and we will not stop until we are the best at what we do
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At Paramount Intelligence, our mission isn't corporate rhetoric—it is deeply personal commitment. 
            As recognized founders, we know that technology is only transformative when it solves real human 
            problems. That is why, we are laser-focused on one thing—help organizations implement Agentic AI 
            in mission-critical processes and workplace pain points, enabling people to focus on what truly matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
