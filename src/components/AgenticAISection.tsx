import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import aiEngineeringImage from '@/assets/ai-engineering.jpg';
import aiConsultingImage from '@/assets/ai-consulting.jpg';

const tabs = [
  {
    id: 'engineering',
    title: 'AI Engineering',
    image: aiEngineeringImage,
    description: 'We help clients leap over roadblocks to AI Agentic Automation (Intelligent Automation). As an end-to-end partner, we deliver tailored advanced Agentic solutions. We automate processes through deep practical expertise in all fields related to AI Agents – from orchestrating frameworks to engineering unique components using Machine Learning and Deep Learning. Our mission is to engineer and implement Agentic AI solutions that align perfectly with your strategic goals.',
  },
  {
    id: 'consulting',
    title: 'AI Consulting & Advisory',
    image: aiConsultingImage,
    description: 'We uniquely blend strategy, advisory services, and LLM technologies to help organizations achieve operational scalability, high ROI on AI investments, and improved efficiency through tailored AI Agents. With our deep business, economic, and technical understanding, we address short-term goals while maintaining a long-term vision for your complete transformation process.',
  },
];

const AgenticAISection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('engineering');

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-12"
        >
          Agentic AI company
        </motion.h2>

        {/* Tab Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-lg font-heading font-semibold text-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-foreground text-primary shadow-lg'
                  : 'bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
              <motion.img
                key={activeContent?.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={activeContent?.image}
                alt={activeContent?.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20" />
            </div>

            {/* Description */}
            <div className="p-8 lg:p-12 flex items-center">
              <motion.div
                key={activeContent?.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary-foreground mb-6">
                  {activeContent?.title}
                </h3>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  {activeContent?.description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticAISection;
