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
  aiConsultingData,
  llmDevelopmentData,
  llmOpsData,
  commonStats, 
  commonOutcomes 
} from '@/data/serviceData';

// Legacy data is no longer needed as all service pages are now using structured data

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

  // Handle AI Consulting page
  if (slug === 'ai-consulting') {
    return (
      <Layout>
        <ServiceHero 
          title={aiConsultingData.hero.title} 
          subtitle={aiConsultingData.hero.subtitle} 
        />
        <ServicesListSection 
          title={aiConsultingData.services.title}
          subtitle={aiConsultingData.services.subtitle}
          services={aiConsultingData.services.list}
        />
        <OutcomesSection 
          title="Our clients achieve"
          outcomes={commonOutcomes}
        />
        <WhyChooseUsSection 
          title={aiConsultingData.whyChooseUs.title}
          reasons={aiConsultingData.whyChooseUs.reasons}
          columns={2}
        />
        <ServiceCTA title={aiConsultingData.hero.title} />
      </Layout>
    );
  }

  // Handle LLM Development page
  if (slug === 'llm-development') {
    return (
      <Layout>
        <ServiceHero 
          title={llmDevelopmentData.hero.title} 
          subtitle={llmDevelopmentData.hero.subtitle} 
        />
        <ServicesListSection 
          title={llmDevelopmentData.services.title}
          subtitle={llmDevelopmentData.services.subtitle}
          services={llmDevelopmentData.services.list}
        />
        <OutcomesSection 
          title="Customers using our Large Language Model development services have achieved:"
          outcomes={commonOutcomes}
        />
        <WhyChooseUsSection 
          title={llmDevelopmentData.whyChooseUs.title}
          reasons={llmDevelopmentData.whyChooseUs.reasons}
        />
        <ServiceCTA title={llmDevelopmentData.hero.title} />
      </Layout>
    );
  }

  // Handle LLM Ops page
  if (slug === 'llm-ops') {
    return (
      <Layout>
        <ServiceHero 
          title={llmOpsData.hero.title} 
          subtitle={llmOpsData.hero.subtitle} 
        />
        <StatisticsSection 
          title={llmOpsData.statistics.title}
          description={llmOpsData.statistics.description}
          stats={commonStats}
        />
        <ServicesListSection 
          title={llmOpsData.services.title}
          subtitle={llmOpsData.services.subtitle}
          services={llmOpsData.services.list}
        />
        <OutcomesSection 
          title="Our clients achieve"
          outcomes={commonOutcomes}
        />
        <WhyChooseUsSection 
          title={llmOpsData.whyChooseUs.title}
          reasons={llmOpsData.whyChooseUs.reasons}
        />
        <ServiceCTA title={llmOpsData.hero.title} />
      </Layout>
    );
  }

  // Service not found
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
};

export default ServicePage;
