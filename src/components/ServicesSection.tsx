import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, MessageSquare, Link2, Server } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'RAG Engineering',
    description: 'Implement tailored RAG pipelines using advanced techniques and strategies to automate complex processes without hallucination.',
    link: '/services/rag-engineering',
  },
  {
    icon: MessageSquare,
    title: 'AI Strategy & Consulting',
    description: 'Our AI consultancy identifies the best solutions for your business, optimizing processes with advanced language models and tailored AI technologies.',
    link: '/services/ai-consulting',
  },
  {
    icon: Link2,
    title: 'LangChain Development',
    description: 'Speed up your project development by using the LangChain framework to build Large Language Models (LLMs) more efficiently.',
    link: '/services/langchain-development',
  },
  {
    icon: Server,
    title: 'AI Operations',
    description: 'Efficiently optimize, scale, and manage your Large Language Models with tailored LLM Ops solutions.',
    link: '/services/llm-ops',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our LLM development services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link
                to={service.link}
                className="group block bg-secondary rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
