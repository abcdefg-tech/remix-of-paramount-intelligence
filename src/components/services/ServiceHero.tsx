import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

const ServiceHero = ({ title, subtitle }: ServiceHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary via-navy-dark to-black pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />
      </div>
      <div className="relative z-10 container-wide text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceHero;
