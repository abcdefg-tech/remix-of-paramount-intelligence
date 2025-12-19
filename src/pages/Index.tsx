import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import WhoWeHelpSection from '@/components/WhoWeHelpSection';
import AgenticAISection from '@/components/AgenticAISection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <WhoWeHelpSection />
      <AgenticAISection />
      <ServicesSection />
      <CaseStudiesSection />
    </Layout>
  );
};

export default Index;
