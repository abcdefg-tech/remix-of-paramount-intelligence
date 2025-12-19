import Layout from '@/components/Layout';
import { useParams, Link } from 'react-router-dom';
import ServiceHero from '@/components/services/ServiceHero';
import StatisticsSection from '@/components/services/StatisticsSection';
import ServicesListSection from '@/components/services/ServicesListSection';
import OutcomesSection from '@/components/services/OutcomesSection';
import WhyChooseUsSection from '@/components/services/WhyChooseUsSection';
import WhatIsSection from '@/components/services/WhatIsSection';
import FeaturesSection from '@/components/services/FeaturesSection';
import ServiceCTA from '@/components/services/ServiceCTA';
import { 
  customLLMData, 
  ragDevelopmentData, 
  langchainData, 
  commonStats, 
  commonOutcomes 
} from '@/data/serviceData';

// Legacy data for other service pages
const legacyServicesData: Record<string, {
  title: string;
  tagline: string;
  description: string[];
}> = {
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

  // Handle Custom LLM page
  if (slug === 'custom-llm') {
    return (
      <Layout>
        <ServiceHero 
          title={customLLMData.hero.title} 
          subtitle={customLLMData.hero.subtitle} 
        />
        <StatisticsSection 
          title={customLLMData.statistics.title}
          description={customLLMData.statistics.description}
          stats={commonStats}
        />
        <ServicesListSection 
          title={customLLMData.services.title}
          subtitle={customLLMData.services.subtitle}
          services={customLLMData.services.list}
        />
        <OutcomesSection 
          title="Our clients achieve"
          outcomes={commonOutcomes}
        />
        <WhyChooseUsSection 
          title={customLLMData.whyChooseUs.title}
          reasons={customLLMData.whyChooseUs.reasons}
        />
        <ServiceCTA title={customLLMData.hero.title} />
      </Layout>
    );
  }

  // Handle RAG Engineering page
  if (slug === 'rag-engineering') {
    return (
      <Layout>
        <ServiceHero 
          title={ragDevelopmentData.hero.title} 
          subtitle={ragDevelopmentData.hero.subtitle} 
        />
        <StatisticsSection 
          title={ragDevelopmentData.statistics.title}
          description={ragDevelopmentData.statistics.description}
          stats={commonStats}
        />
        <ServicesListSection 
          title={ragDevelopmentData.services.title}
          subtitle={ragDevelopmentData.services.subtitle}
          services={ragDevelopmentData.services.list}
        />
        <OutcomesSection 
          title="Our clients achieve"
          outcomes={commonOutcomes}
        />
        <WhyChooseUsSection 
          title={ragDevelopmentData.whyChooseUs.title}
          reasons={ragDevelopmentData.whyChooseUs.reasons}
        />
        <ServiceCTA title={ragDevelopmentData.hero.title} />
      </Layout>
    );
  }

  // Handle LangChain Development page
  if (slug === 'langchain-development') {
    return (
      <Layout>
        <ServiceHero 
          title={langchainData.hero.title} 
          subtitle={langchainData.hero.subtitle} 
        />
        <WhatIsSection 
          title={langchainData.whatIs.title}
          description={langchainData.whatIs.description}
        />
        <ServicesListSection 
          title={langchainData.services.title}
          subtitle={langchainData.services.subtitle}
          services={langchainData.services.list}
        />
        <FeaturesSection 
          title={langchainData.features.title}
          features={langchainData.features.list}
        />
        <WhyChooseUsSection 
          title={langchainData.whyChooseUs.title}
          reasons={langchainData.whyChooseUs.reasons}
        />
        <ServiceCTA title={langchainData.hero.title} />
      </Layout>
    );
  }

  // Handle legacy service pages
  const legacyService = slug ? legacyServicesData[slug] : null;

  if (!legacyService) {
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
      <ServiceHero 
        title={legacyService.title} 
        subtitle={legacyService.tagline} 
      />
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-6">
            {legacyService.description.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <ServiceCTA title={legacyService.title} />
    </Layout>
  );
};

export default ServicePage;
