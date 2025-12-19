import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

import healthcareImg from '@/assets/case-studies/healthcare.jpg';
import realEstateImg from '@/assets/case-studies/real-estate.jpg';
import telecomImg from '@/assets/case-studies/telecommunications.jpg';
import dataAnalyticsImg from '@/assets/case-studies/data-analytics.jpg';
import collaborationImg from '@/assets/case-studies/collaboration.jpg';
import callCenterImg from '@/assets/case-studies/call-center.jpg';
import ecommerceImg from '@/assets/case-studies/ecommerce.jpg';
import hardwareImg from '@/assets/case-studies/hardware.jpg';
import automationImg from '@/assets/case-studies/automation.jpg';

const caseStudyImages: Record<string, string> = {
  'intelligent-automation-us-telecom': telecomImg,
  'advanced-rag-real-estate': realEstateImg,
  'multi-channel-healthcare-agent': healthcareImg,
  'automated-data-scraping': dataAnalyticsImg,
  'collaborative-ai-assistant': collaborationImg,
  'llm-voice-assistant-call-center': callCenterImg,
  'rag-email-automation': automationImg,
  'ai-order-recommendation': ecommerceImg,
  'nvidia-to-intel-migration': hardwareImg,
};

const caseStudyData: Record<string, {
  title: string;
  category: string;
  whatDoesCompanyDo: string[];
  challenge: string[];
  approach: string[];
  results: string[];
}> = {
  'intelligent-automation-us-telecom': {
    title: 'Intelligent automation with actionable AI Agents for the US telecommunication company',
    category: 'Telecommunications',
    whatDoesCompanyDo: [
      'The US-based telecommunications provider with over 45 years of industry experience delivers fiber-powered internet and video services to 150,000+ households in 500+ master-planned communities across multiple states.',
    ],
    challenge: [
      'As the company expanded its service footprint, manual processes for network diagnostics, customer support, and service provisioning became bottlenecks. The organization needed intelligent automation to scale operations while maintaining high service quality and reducing operational costs.',
    ],
    approach: [
      'Phased Implementation Strategy: Started with high-impact, low-risk processes to build confidence and demonstrate ROI early',
      'Custom AI Agent Architecture: Designed modular agents that could handle network diagnostics, ticket routing, and predictive maintenance',
      'Integration with Legacy Systems: Ensured seamless connectivity with existing OSS/BSS systems without major infrastructure overhaul',
      'Human-in-the-Loop Design: Maintained technician oversight during rollout to catch edge cases and build trust',
      'Real-time Data Processing: Implemented streaming analytics to enable proactive issue detection and resolution',
      'Continuous Learning Loop: Built feedback mechanisms to improve agent performance over time based on technician input and outcomes',
    ],
    results: [
      'The client found in Paramount Intelligence the right partner for their long-term transformation journey – one who helps them think big, but start small, while focusing on targeted, high-impact implementations. This approach ensures sustainable, coherent transformation without compromising on quality and overinvesting.',
      'The AI agents now handle routine diagnostics and ticket classification automatically, reducing response times by 40% and freeing technical staff to focus on complex issues that truly require human expertise.',
    ],
  },
  'advanced-rag-real-estate': {
    title: 'Advanced RAG Engineering for real estate due diligence AI Agent',
    category: 'Real Estate',
    whatDoesCompanyDo: [
      'US-based startup on a mission to transform how real estate developers conduct due diligence. The company provides AI-powered analysis of property documents, zoning regulations, environmental reports, and market data to accelerate investment decisions.',
    ],
    challenge: [
      'Real estate due diligence traditionally requires weeks of manual document review by lawyers and analysts. The company needed a solution that could accurately extract, interpret, and synthesize information from hundreds of varied documents while maintaining high accuracy for legal and financial decisions.',
    ],
    approach: [
      'Advanced RAG Architecture: Implemented sophisticated retrieval mechanisms using hybrid search (vector + keyword) for precise document retrieval',
      'Document Processing Pipeline: Built custom parsers for PDFs, scanned documents, and structured data from multiple sources',
      'Context Window Optimization: Engineered intelligent chunking strategies to maximize relevant information within LLM context limits',
      'Multi-source Integration: Connected property records, zoning databases, environmental databases, and market analytics',
      'Accuracy Verification System: Implemented citation tracking and confidence scoring for every generated insight',
      'Domain-specific Fine-tuning: Adapted models to understand real estate terminology and legal language',
    ],
    results: [
      'AI Agent takes what used to be weeks of due diligence and gets it done in minutes, saving developers thousands of dollars per project while keeping the accuracy spot-on.',
      'The solution increased deal velocity by 10x and enabled the client to scale their business without proportionally increasing their analyst headcount.',
    ],
  },
  'multi-channel-healthcare-agent': {
    title: 'Multi-channel AI Agent for personalized appointments in Healthcare',
    category: 'Healthcare',
    whatDoesCompanyDo: [
      'The US-based healthcare company has a mission to provide high-quality, affordable, and easy-to-understand healthcare plans for seniors. It specializes in Medicare Advantage offerings and leverages advanced technology to enhance healthcare delivery. Operating across multiple states in the United States, this organization serves over 100,000 members.',
    ],
    challenge: [
      'As the organization expanded, the need for scalable, personalized solutions became increasingly urgent to improve efficiency across multiple clinics and enhance communication with senior patients. They sought a consulting and engineering partner capable of delivering AI Agents and integrating them into existing workflows and healthcare systems.',
      'The overarching goal was to create an AI Agent that would analyze a patient\'s entire record while also gathering additional information from patients using multi-channel methods tailored to older adults.',
    ],
    approach: [
      'Incremental rollout: Began with a Proof of Concept tested by select doctors to avoid technical debt and validate approach',
      'Semi-manual approach: Created initial version with doctors maintaining full oversight, allowing for exception identification and gradual automation',
      'Tailored AI integration: Built custom AI solution rather than using generic platforms, integrating seamlessly with internal systems',
      'Seamless system integration: Maintained compatibility with clinic and physician management platforms',
      'Self-learning system: Patient records automatically updated and integrated after each appointment',
      'RAG mechanism: Leveraged retrieval-augmented generation to ask patient-specific questions based on complete medical history without hallucinations',
      'Multi-channel communication: Implemented SMS and voice call features designed for seniors less familiar with technology',
    ],
    results: [
      '"I love the summaries. I think it is amazing, and I am very impressed with this tool." — End user (doctor) of an AI Agent',
      'We developed an AI Agent dedicated to the pre-appointment phase, enabling patients to share critical updates before seeing a doctor. By using voice communication, the process feels more natural for older adults.',
      'The solution saved each doctor over five hours per week by automating information collection and building a robust data foundation. Patient engagement rose by more than 20% thanks to the personalized, accessible communication options.',
    ],
  },
  'automated-data-scraping': {
    title: 'Automated data scraping platform powered by AI and LLMs',
    category: 'Data & Analytics',
    whatDoesCompanyDo: [
      'Germany-based PR agency specializing in digital public relations, social media marketing, and content creation for brands and businesses. The agency monitors media coverage and competitor activities across hundreds of digital sources.',
    ],
    challenge: [
      'Manual monitoring of news sites, social media, and competitor content was time-consuming and inconsistent. The agency needed an intelligent system that could not only scrape data but understand context, sentiment, and relevance to specific clients and campaigns.',
    ],
    approach: [
      'Intelligent Web Scraping: Built adaptive scrapers that handle dynamic content, JavaScript-heavy sites, and anti-bot measures',
      'Multi-category Expertise: Leveraged LLMs to classify and tag content across industries, topics, and sentiment automatically',
      'Natural Language Queries: Enabled journalists to request specific data types using plain language rather than technical configurations',
      'Automated Content Summarization: Implemented LLM-powered summaries of long articles and social media threads',
      'Scheduling and Alerts: Created automated monitoring with real-time notifications for high-priority mentions',
      'Data Quality Controls: Built validation systems to ensure scraped data accuracy and completeness',
    ],
    results: [
      'An all-in-one AI-powered platform enabling digital journalists to request and scrape domain-specific web content, leveraging LLMs for multi-category expertise.',
      'The agency reduced research time by 60% and can now monitor 5x more sources than before, giving clients more comprehensive competitive intelligence.',
    ],
  },
  'collaborative-ai-assistant': {
    title: 'Collaborative Conversational AI assistant with automation',
    category: 'Collaboration',
    whatDoesCompanyDo: [
      'California-based startup dedicated to reshaping online discussions with open-source technology. The company builds platforms for team collaboration, knowledge sharing, and decision-making in distributed organizations.',
    ],
    challenge: [
      'Teams needed a way to collaborate with AI that felt natural and allowed multiple users to work together in real-time. Existing AI solutions were single-user focused and didn\'t integrate well with team workflows or provide adequate data security for sensitive discussions.',
    ],
    approach: [
      'Multi-user Architecture: Designed system to support concurrent users collaborating with same AI agent in real-time',
      'Self-hosted LLM Infrastructure: Implemented on-premise deployment for complete data control and privacy',
      'Context Management: Built sophisticated memory systems to maintain conversation history across team members',
      'Integration Ecosystem: Connected with team tools like project management, documentation, and communication platforms',
      'Role-based Access Controls: Implemented granular permissions for different team members and conversation threads',
      'Automation Workflows: Created triggers and automated actions based on AI conversations and decisions',
    ],
    results: [
      'Conversational AI platform that allows multiple users to collaboratively work in real time for an array of state-of-the-art self-hosted LLMs in a secure and safe way.',
      'Teams report 50% faster decision-making and significantly improved knowledge capture from discussions.',
    ],
  },
  'llm-voice-assistant-call-center': {
    title: 'LLM-powered voice assistant for call-center',
    category: 'Customer Service',
    whatDoesCompanyDo: [
      'Large customer service operation handling thousands of daily calls across multiple industries including telecommunications, healthcare, and financial services. The call center operates 24/7 with hundreds of agents.',
    ],
    challenge: [
      'High call volumes, agent burnout, and inconsistent customer experiences across different agents and shifts. The organization needed to augment human agents with AI that could handle routine inquiries, assist agents with information retrieval, and maintain consistent service quality.',
    ],
    approach: [
      'Voice-to-Text Pipeline: Implemented real-time speech recognition optimized for phone call quality',
      'Intent Recognition: Built custom models to understand caller intent and route appropriately',
      'Agent Assist Mode: Created co-pilot functionality that suggests responses and retrieves information for human agents',
      'Automated Call Handling: Deployed voice AI for routine inquiries like account status, basic troubleshooting',
      'CRM Integration: Connected with existing customer databases for personalized responses',
      'Quality Monitoring: Implemented sentiment analysis and call quality scoring for continuous improvement',
    ],
    results: [
      'The voice assistant now handles 40% of routine inquiries autonomously, while providing real-time support to human agents on complex calls.',
      'Average handle time decreased by 25%, customer satisfaction scores improved by 15%, and agent stress levels significantly reduced. The system operates in multiple languages and continues to learn from every interaction.',
    ],
  },
  'rag-email-automation': {
    title: 'RAG: Automation e-mail response with AI and LLMs',
    category: 'Automation',
    whatDoesCompanyDo: [
      'Global provider of IT solutions for businesses and public organizations. The company offers hardware, software, cloud services, and support to thousands of clients across Europe, handling hundreds of technical and sales inquiries daily via email.',
    ],
    challenge: [
      'Sales and support teams spent hours each day responding to repetitive product inquiries, technical questions, and quote requests. Response times were slow, and answers varied in quality depending on which team member responded. The company needed consistent, fast, accurate email responses.',
    ],
    approach: [
      'RAG-based Architecture: Implemented retrieval system connected to product catalogs, technical documentation, pricing databases, and past successful responses',
      'Email Classification: Built multi-class classifier to route emails and identify query type automatically',
      'Context-aware Generation: LLM generates responses using retrieved product information, pricing, and technical specs',
      'Manual Customization Options: Enabled sales team to review and adjust AI-drafted responses before sending',
      'Learning from Feedback: System improves by analyzing which AI-drafted responses get edited vs sent as-is',
      'Multi-language Support: Implemented automatic language detection and response generation in customer\'s language',
    ],
    results: [
      'An AI-driven internal sales platform that interprets inbound sales emails, utilizing LLM and RAG connection to different sources from product information while allowing manual customization of responses.',
      'Response time decreased from 4 hours to 15 minutes average, and the sales team can now handle 3x more inquiries without increasing headcount. Customer satisfaction with response quality improved significantly.',
    ],
  },
  'ai-order-recommendation': {
    title: 'AI agent for order recommendation and completion',
    category: 'E-commerce',
    whatDoesCompanyDo: [
      'E-commerce platform specializing in customized printing services for businesses and consumers. The company offers thousands of product configurations and serves customers who often don\'t know exactly what they need or how to specify their requirements.',
    ],
    challenge: [
      'Customers frequently abandoned orders due to confusion about product options, specifications, and pricing. The complex product catalog made it difficult for customers to find the right solution, and customer service couldn\'t scale to help everyone individually.',
    ],
    approach: [
      'Conversational Product Discovery: Built AI agent that asks clarifying questions to understand customer needs',
      'Intelligent Recommendations: Implemented recommendation engine based on use case, budget, quantity, and specifications',
      'Guided Configuration: Created step-by-step assistance for complex product configurations',
      'Visual Previews: Integrated with design tools to show customers what their order will look like',
      'Price Optimization: AI suggests options that meet needs at different price points',
      'Order Completion Assistance: Agent helps customers through checkout, addressing concerns in real-time',
    ],
    results: [
      'Order completion rates increased by 35%, average order value grew by 20%, and customer support inquiries decreased by 40%.',
      'The AI agent successfully guides customers from initial inquiry to completed order, improving both customer experience and business metrics.',
    ],
  },
  'nvidia-to-intel-migration': {
    title: 'Swapping Iron; making AI code designed from Nvidia run on Intel Gaudi',
    category: 'Hardware Migration',
    whatDoesCompanyDo: [
      'Technology provider working with multiple hardware accelerator platforms for AI/ML workloads. The organization needed to diversify their hardware dependencies and optimize costs while maintaining performance.',
    ],
    challenge: [
      'Existing ML and LLM solutions were tightly coupled to NVIDIA architecture (CUDA). The organization wanted to run these same workloads on Intel Gaudi AI accelerators but faced significant technical challenges in porting code, maintaining performance, and ensuring model accuracy.',
    ],
    approach: [
      'Codebase Analysis: Conducted comprehensive audit of NVIDIA-specific dependencies and bottlenecks',
      'Architecture Mapping: Identified equivalent operations and optimizations in Intel Gaudi architecture',
      'Gradual Migration Strategy: Ported components incrementally, validating performance at each step',
      'Performance Optimization: Leveraged Intel-specific optimizations and libraries for ML workloads',
      'Benchmark Suite: Created comprehensive testing to ensure accuracy and performance parity',
      'Documentation and Training: Provided team training on Intel Gaudi development best practices',
    ],
    results: [
      'Successfully migrated Machine Learning and LLM solutions from NVIDIA hardware to Intel Gaudi AI accelerators while maintaining model accuracy and achieving comparable or better price-performance ratios.',
      'The organization now has hardware flexibility and reduced vendor lock-in, enabling better cost optimization for AI workloads.',
    ],
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudyData[slug] : null;
  const heroImage = slug ? caseStudyImages[slug] : null;

  if (!study) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground mb-4">
              Case study not found
            </h1>
            <Link to="/case-studies" className="text-primary hover:underline">
              Back to Case Studies
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Navigation */}
      <div className="bg-background pt-24 pb-4">
        <div className="container-wide">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-background pb-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              {study.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              {study.title}
            </h1>
            <div className="aspect-[21/9] rounded-xl overflow-hidden">
              {heroImage ? (
                <img 
                  src={heroImage} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* What does the company do */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                What does the company do?
              </h2>
              <div className="space-y-4">
                {study.whatDoesCompanyDo.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                How does Paramount Intelligence cooperate with the client?
              </h2>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Challenge
              </h3>
              <div className="space-y-4">
                {study.challenge.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                How did we approach?
              </h3>
              <ul className="space-y-4">
                {study.approach.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Results
              </h2>
              <div className="space-y-4">
                {study.results.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-primary rounded-xl p-8 md:p-12 text-center"
            >
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
                Ready to transform your business with AI?
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Let's discuss how we can help you achieve similar results.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-foreground/90 hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;