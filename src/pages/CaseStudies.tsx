import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import healthcareImg from '@/assets/case-studies/healthcare.jpg';
import realEstateImg from '@/assets/case-studies/real-estate.jpg';
import telecomImg from '@/assets/case-studies/telecommunications.jpg';
import dataAnalyticsImg from '@/assets/case-studies/data-analytics.jpg';
import collaborationImg from '@/assets/case-studies/collaboration.jpg';
import callCenterImg from '@/assets/case-studies/call-center.jpg';
import ecommerceImg from '@/assets/case-studies/ecommerce.jpg';
import hardwareImg from '@/assets/case-studies/hardware.jpg';
import automationImg from '@/assets/case-studies/automation.jpg';

const caseStudies = [
  {
    title: 'Intelligent automation with actionable AI Agents for the US telecommunication company',
    category: 'Telecommunications',
    slug: 'intelligent-automation-us-telecom',
    image: telecomImg,
  },
  {
    title: 'Advanced RAG Engineering for real estate due diligence AI Agent',
    category: 'Real Estate',
    slug: 'advanced-rag-real-estate',
    image: realEstateImg,
  },
  {
    title: 'Automated data scraping platform powered by AI and LLMs',
    category: 'Data & Analytics',
    slug: 'automated-data-scraping',
    image: dataAnalyticsImg,
  },
  {
    title: 'Collaborative Conversational AI assistant with automation',
    category: 'Collaboration',
    slug: 'collaborative-ai-assistant',
    image: collaborationImg,
  },
  {
    title: 'LLM-powered voice assistant for call-center',
    category: 'Customer Service',
    slug: 'llm-voice-assistant-call-center',
    image: callCenterImg,
  },
  {
    title: 'RAG: Automation e-mail response with AI and LLMs',
    category: 'Automation',
    slug: 'rag-email-automation',
    image: automationImg,
  },
  {
    title: 'AI agent for order recommendation and completion',
    category: 'E-commerce',
    slug: 'ai-order-recommendation',
    image: ecommerceImg,
  },
  {
    title: 'Swapping Iron; making AI code designed from Nvidia run on Intel Gaudi',
    category: 'Hardware Migration',
    slug: 'nvidia-to-intel-migration',
    image: hardwareImg,
  },
  {
    title: 'Multi-channel AI Agent for personalized appointments in Healthcare',
    category: 'Healthcare',
    slug: 'multi-channel-healthcare-agent',
    image: healthcareImg,
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
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
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
          >
            Case Studies
          </motion.h1>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/case-studies/${study.slug}`}
                  className="group block bg-secondary rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Image Area */}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                      {study.category}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {study.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;