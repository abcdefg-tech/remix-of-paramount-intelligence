import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const servicesData: Record<string, {
  title: string;
  tagline: string;
  description: string[];
}> = {
  'custom-llm': {
    title: 'Custom Large Language Model',
    tagline: 'Build tailored LLM solutions designed specifically for your business needs',
    description: [
      'Our custom LLM development service creates powerful language models fine-tuned for your specific use cases. We work closely with your team to understand your data, requirements, and goals.',
      'Whether you need a model for customer service automation, content generation, data analysis, or specialized domain applications, we deliver solutions that outperform generic models.',
      'Our approach includes data curation and preparation, model architecture selection, training pipeline development, fine-tuning and optimization, and comprehensive testing to ensure your LLM meets the highest standards of accuracy and performance.',
    ],
  },
  'rag-engineering': {
    title: 'RAG Advanced Engineering',
    tagline: 'Implement sophisticated retrieval-augmented generation for accurate, contextual AI responses',
    description: [
      'RAG Engineering is at the core of building AI systems that provide accurate, up-to-date, and contextually relevant responses. Our advanced RAG implementations go beyond basic retrieval to deliver enterprise-grade solutions.',
      'We design and implement hybrid search strategies combining vector and keyword search, intelligent chunking algorithms, reranking mechanisms, and citation tracking systems that ensure every AI response is grounded in your actual data.',
      'Our RAG solutions integrate seamlessly with your existing data sources—databases, document repositories, knowledge bases, and APIs—to create AI assistants that truly understand and leverage your organizational knowledge.',
    ],
  },
  'langchain-development': {
    title: 'LangChain Development',
    tagline: 'Accelerate your AI development with the LangChain framework',
    description: [
      'LangChain provides a powerful framework for building applications with large language models. Our expertise helps you leverage this technology to build production-ready AI applications faster.',
      'We specialize in designing complex chains and agents, implementing memory systems for contextual conversations, integrating with external tools and APIs, building custom retrievers and document loaders, and optimizing performance for production workloads.',
      'Whether you\'re building chatbots, document Q&A systems, or autonomous agents, our LangChain development services help you move from concept to deployment efficiently.',
    ],
  },
  'ai-consulting': {
    title: 'AI Consulting & Advisory',
    tagline: 'Strategic guidance to maximize your AI investment returns',
    description: [
      'Our AI consulting services help organizations navigate the complex landscape of artificial intelligence implementation. We combine deep technical expertise with business acumen to ensure your AI initiatives deliver measurable value.',
      'We provide AI readiness assessments, use case identification and prioritization, technology stack recommendations, implementation roadmaps, vendor evaluation and selection, and ongoing strategic advisory.',
      'Our consultants work as an extension of your team, helping you avoid common pitfalls and accelerate your AI transformation journey with confidence.',
    ],
  },
  'llm-development': {
    title: 'LLM Development',
    tagline: 'End-to-end development of large language model applications',
    description: [
      'Our LLM development services cover the full spectrum of building AI-powered applications. From initial concept to production deployment, we handle every aspect of creating robust, scalable LLM solutions.',
      'Our development process includes requirements analysis and solution design, model selection and customization, prompt engineering and optimization, API development and integration, testing and quality assurance, and deployment and monitoring setup.',
      'We follow best practices for LLM application development, ensuring your solutions are secure, performant, and maintainable over time.',
    ],
  },
  'llm-ops': {
    title: 'LLM Ops Service',
    tagline: 'Efficiently manage, scale, and optimize your LLM infrastructure',
    description: [
      'LLM Ops (LLMOps) is essential for organizations running language models in production. Our service ensures your AI systems remain performant, cost-effective, and reliable at scale.',
      'Our LLMOps services include model versioning and deployment automation, performance monitoring and alerting, cost optimization strategies, prompt management systems, A/B testing and evaluation frameworks, and security and compliance implementation.',
      'We help you build the operational foundation needed to run LLMs successfully in production, whether you\'re using cloud APIs or self-hosted models.',
    ],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground mb-4">
              Service not found
            </h1>
            <Link to="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

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
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto"
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {service.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 bg-secondary rounded-xl p-8 md:p-12"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground mb-8">
                Contact us to discuss how we can help with your {service.title.toLowerCase()} needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-navy-light hover:shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
