import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface Outcome {
  title: string;
  description: string;
}

interface OutcomesSectionProps {
  title: string;
  outcomes: Outcome[];
}

const OutcomesSection = ({ title, outcomes }: OutcomesSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeOutcome, setActiveOutcome] = useState(0);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
        >
          {title}
        </motion.h2>

        {/* Outcome Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {outcomes.map((outcome, index) => (
            <button
              key={index}
              onClick={() => setActiveOutcome(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeOutcome === index
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              {outcome.title}
            </button>
          ))}
        </motion.div>

        {/* Outcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-secondary rounded-xl p-8 shadow-elegant">
            <motion.div
              key={activeOutcome}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                {outcomes[activeOutcome].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {outcomes[activeOutcome].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomesSection;
