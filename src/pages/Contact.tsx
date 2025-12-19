import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Mail, FileText } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import logo from '@/assets/logo.png';

const services = [
  'Custom Large Language Model',
  'RAG Advanced Engineering',
  'LangChain Development',
  'AI Consulting & Advisory',
  'LLM Development',
  'LLM Ops Service',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary via-navy-dark to-black pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl animate-pulse-glow" />
        </div>
        <div className="relative z-10 container-wide text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Let's connect and discuss your AI & LLM needs
          </motion.h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Let's Start a Conversation
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-8">
                Ready to transform your operations with intelligent automation? Get in touch with our team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-navy-light hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-12"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <img src={logo} alt="Paramount Intelligence" className="h-12 w-auto" />
                  <span className="font-heading font-bold text-xl text-primary">
                    Paramount Intelligence
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:Paramountintelligence@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      Paramountintelligence@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="mt-12 bg-secondary rounded-xl p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Why work with us?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    90+ successful AI projects delivered
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    25+ expert AI engineers and consultants
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Proven ROI with measurable results
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    End-to-end AI implementation support
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
