import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase } from 'lucide-react';

const AgenticAISection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-16"
        >
          Agentic AI company
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Engineering */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden group"
          >
            <div className="aspect-video bg-gradient-to-br from-navy-light/50 to-accent/30 flex items-center justify-center">
              <Code2 className="w-20 h-20 text-primary-foreground/40 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                AI Engineering
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                We help clients leap over roadblocks to AI Agentic Automation (Intelligent Automation). 
                As an end-to-end partner, we deliver tailored advanced Agentic solutions. We automate 
                processes through deep practical expertise in all fields related to AI Agents – from 
                orchestrating frameworks to engineering unique components using Machine Learning and 
                Deep Learning. Our mission is to engineer and implement Agentic AI solutions that 
                align perfectly with your strategic goals.
              </p>
            </div>
          </motion.div>

          {/* AI Consulting & Advisory */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden group"
          >
            <div className="aspect-video bg-gradient-to-br from-accent/30 to-navy-light/50 flex items-center justify-center">
              <Briefcase className="w-20 h-20 text-primary-foreground/40 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                AI Consulting & Advisory
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                We uniquely blend strategy, advisory services, and LLM technologies to help 
                organizations achieve operational scalability, high ROI on AI investments, 
                and improved efficiency through tailored AI Agents. With our deep business, 
                economic, and technical understanding, we address short-term goals while 
                maintaining a long-term vision for your complete transformation process.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgenticAISection;
