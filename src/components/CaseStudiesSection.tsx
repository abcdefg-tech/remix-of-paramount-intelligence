import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import healthcareImg from '@/assets/case-studies/healthcare.jpg';
import realEstateImg from '@/assets/case-studies/real-estate.jpg';
import telecomImg from '@/assets/case-studies/telecommunications.jpg';
import hardwareImg from '@/assets/case-studies/hardware.jpg';

const caseStudies = [
  {
    image: healthcareImg,
    category: 'Healthcare',
    title: 'Multi-channel AI Agent for personalized appointments in Healthcare',
    description: 'A U.S. healthcare provider serving 100,000+ members across multiple states relies on advanced technology to deliver high-quality, affordable care. By deploying of multi-channel, pre-appointment AI Agent, each doctor now saves more than five hours a week, while patient engagement has climbed over 20% thanks to personalized, accessible communication.',
    link: '/case-studies/multi-channel-healthcare-agent',
  },
  {
    image: realEstateImg,
    category: 'Real Estate',
    title: 'Advanced RAG Engineering for real estate due diligence AI Agent',
    description: 'US-based startup on a mission to transform how real estate developers conduct due diligence. By utilizing the power of artificial intelligence. AI Agent takes what used to be weeks of due diligence and gets it done in minutes, saving developers thousands of dollars per project while keeping the accuracy spot-on.',
    link: '/case-studies/advanced-rag-real-estate',
  },
  {
    image: telecomImg,
    category: 'Telecommunications',
    title: 'Intelligent automation with actionable AI Agents for the US telecommunication company',
    description: 'The US-based telecommunications provider with over 45 years of industry experience delivers fiber-powered internet and video services to 150,000+ households in 500+ master-planned communities. The client found in Paramount Intelligence the right partner for their long-term transformation journey.',
    link: '/case-studies/intelligent-automation-us-telecom',
  },
  {
    image: hardwareImg,
    category: 'Hardware Migration',
    title: 'Swapping Iron; making AI code designed from Nvidia run on Intel Gaudi',
    description: 'Migrating Machine Learning and LLM solutions designed to run on Nvidia hardware to a different architecture: Intel Gaudi AI accelerators.',
    link: '/case-studies/nvidia-to-intel-migration',
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Some of our project experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="bg-background rounded-xl overflow-hidden shadow-elegant card-hover">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Area */}
                  <div className="lg:w-80 flex-shrink-0 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-10">
                    <span className="inline-block text-sm font-medium text-primary mb-3">
                      {study.category}
                    </span>
                    <h3 className="font-heading text-xl lg:text-2xl font-bold text-foreground mb-4">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    <Link
                      to={study.link}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-navy-light hover:shadow-md"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;