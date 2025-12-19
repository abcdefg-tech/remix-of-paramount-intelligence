import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Wrench, Rocket } from 'lucide-react';

const helpCategories = [
  {
    icon: Lightbulb,
    title: 'Companies planning AI transformation',
    description: "We're helping decision makers arrive at clarity of goals and expectations for their initial AI deployments. Our team can assist you in:",
    points: [
      'PoC development of custom LLM-based software',
      'MVP development of custom LLM-based software',
      'Guide the transformation of ideas into a functional artificial intelligence MVP',
      'Assist in planning and building your artificial intelligence MVP',
      'Ensure the MVP is well-structured and continuously updated',
    ],
  },
  {
    icon: Wrench,
    title: 'Companies that have tried but struggle to adopt AI',
    description: 'We fix problems in ongoing AI deployments thanks to our deep expertise in Machine Learning and LLM. We do this thanks to:',
    points: [
      'Mixing engineering excellence with practical experience',
      'Having very mature technical talent on board',
      'Blending consulting with engineering',
      'Being flexible enough to adapt to pre-existing elements of the AI projects',
    ],
  },
  {
    icon: Rocket,
    title: 'Companies that seek to accelerate existing AI projects',
    description: "Many SME's are still in the process of building their AI teams. We help them accelerate their ongoing AI projects by:",
    points: [
      'Offer senior advice and expertise on visioning and execution of AI Projects',
      'Provide engineering support as an extension of the existing software team',
      'Take ownership of sub-projects distinguished by the most ambitious goals',
    ],
  },
];

const WhoWeHelpSection = () => {
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
            Who we help
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're ready to join hands with various teams on artificial intelligence projects, 
            no matter how complex. By teaming up, we'll build new systems, solutions, and perform 
            integrations to help you stand out from your competitors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-background rounded-xl p-8 shadow-elegant card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <category.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {category.description}
              </p>
              <ul className="space-y-3">
                {category.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
