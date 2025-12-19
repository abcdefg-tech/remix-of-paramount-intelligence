import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Sunrise, Users, TrendingUp, Smile, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const coreValues = [
  {
    icon: Sunrise,
    title: 'Value-driven',
    description: 'We do only things that bring value to the whole community: clients, employees, and Paramount Intelligence.',
  },
  {
    icon: Users,
    title: 'Human-centric community',
    description: 'Humans are the center of all our operations. All our actions are based on human filter.',
  },
  {
    icon: TrendingUp,
    title: 'Accountability',
    description: 'We commit to ethical, transparent, and honest business practices, ensuring our customers can rely on us for fairness and integrity.',
  },
  {
    icon: Smile,
    title: 'Joy',
    description: 'We love what we do, making work an exciting journey filled with energy, creativity, and meaningful moments.',
  },
];

const whereWeStand = [
  {
    title: 'Diversity and inclusion',
    description: "It's all about bringing people together around a similar mindset, and topics they care about, but without losing sight of their individuality. To ensure that our community is fair and 100 percent talent-based, we focus on diversity and inclusion. The fourth industrial revolution has made us aware that happy employees add value to the business, making it more ethical and competitive.",
  },
  {
    title: 'Community social responsibility',
    description: 'It means making a positive contribution to our communities. The members of our community commit voluntarily, as long as it is in their hearts. We operate as an ethical, sustainable, and human-oriented brand in a digitalized world.',
  },
  {
    title: 'Environmentally-sound',
    description: "As our planet is shaking, we know it's time for us to act and go green. We are a paperless community, with no waste policies:",
    points: [
      'We minimize waste by evaluating operations and ensuring they are as efficient as possible.',
      'We promote rechargeable batteries wherever possible.',
      'Actively promote recycling both internally and with our clients.',
      'Utilize any opportunity to raise awareness of opportunities to minimize our environmental footprint.',
    ],
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-navy-dark to-black pt-20">
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
            Leading AI Agent company
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto"
          >
            We help startups, scaleups, and tech companies to drive ROI by hyper-personalization, 
            hyper-automation, and enhanced decision-making processes through AI and LLM-based software
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Building AI & LLMs applications for world changes
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>
                Paramount Intelligence specializes in custom AI and LLM-based software development 
                and consulting, established in 2017. We help companies worldwide integrate custom AI 
                into their operations and products ethically.
              </p>
              <p>
                With over 90 successful projects for clients in the US, UK, and Western Europe, our 
                team of 25+ expert 'A-players' focuses on driving ROI by reducing costs and increasing 
                revenue. At Paramount Intelligence we achieve this by hyper-automating tasks, improving 
                customer experiences through hyper-personalization, and enhancing decision-making processes.
              </p>
              <p>
                Our advanced AI technologies, including Natural Language Processing (NLP) and Large 
                Language Models (LLMs), enable us to create tailored solutions that meet specific business needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Paramount Intelligence core values
            </h2>
            <p className="text-muted-foreground text-lg">
              We build trustworthy environment which is driven by our values
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background rounded-xl p-8 text-center card-hover shadow-elegant"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground italic leading-relaxed">
              "Our mission is to help companies ethically implement AI, enabling people to focus on what truly matters"
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Conduct Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our approach to conduct
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Integrity and trust are the principles and standards that guide the way we do business 
              in the Paramount Intelligence – ethically and with mutual respect and in accordance with 
              the laws and regulations applicable to us. It is our responsibility to do always what we 
              promise – the correct thing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              We've helped our clients develop custom AI and LLMs applications
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Thanks to our hands-on experience, we have helped them achieve significant ROI growth 
              through hyper-personalization, advanced automation, and enhanced decision-making processes.
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-navy-light hover:shadow-lg"
            >
              See more case studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Where We Stand */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
          >
            Where do we stand
          </motion.h2>

          <div className="space-y-16">
            {whereWeStand.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary/40" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.points && (
                    <ul className="space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
