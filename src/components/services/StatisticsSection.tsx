import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Stat {
  number: string;
  title: string;
  description: string;
}

interface StatisticsSectionProps {
  title: string;
  description: string;
  stats: Stat[];
}

const StatisticsSection = ({ title, description, stats }: StatisticsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="w-full bg-secondary rounded-xl p-8 text-center shadow-elegant"
            >
              <div 
                className="font-heading text-5xl md:text-6xl font-bold mb-4"
                style={{ color: '#001E48' }}
              >
                {stat.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {stat.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
