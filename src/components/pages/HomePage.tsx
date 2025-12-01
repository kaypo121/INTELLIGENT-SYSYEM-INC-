import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { SolutionCard } from '../SolutionCard';
import { MetricCard } from '../MetricCard';
import { Button } from '../ui/button';
import { type Page } from '../Navigation';
import { Brain, Zap, Shield, TrendingUp, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const solutions = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with AI-powered decision making and process optimization.',
    },
    {
      icon: Zap,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes with advanced machine learning models.',
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Protect your systems with intelligent threat detection and response.',
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with AI-driven analytics.',
    },
  ];

  const steps = [
    { number: '01', title: 'Discover', description: 'We analyze your business needs and identify AI opportunities' },
    { number: '02', title: 'Design', description: 'Custom AI solutions tailored to your specific requirements' },
    { number: '03', title: 'Deploy', description: 'Seamless integration with your existing infrastructure' },
    { number: '04', title: 'Optimize', description: 'Continuous improvement and performance monitoring' },
  ];

  const testimonials = [
    {
      quote: 'INTELLIGENT SYSTEMS transformed our operations. Their AI solutions increased our efficiency by 300%.',
      author: 'Sarah Chen',
      role: 'CTO, TechCorp',
    },
    {
      quote: 'The predictive analytics platform has given us unprecedented insights into our business.',
      author: 'Michael Rodriguez',
      role: 'VP Operations, Global Industries',
    },
    {
      quote: 'Outstanding support and cutting-edge technology. A true partner in our digital transformation.',
      author: 'Emily Watson',
      role: 'Director of Innovation, FinanceHub',
    },
  ];

  return (
    <div>
      <Hero
        title="🎄 Intelligent Solutions for Tomorrow's Challenges 🎅"
        subtitle="Empowering enterprises with AI-first technology that drives innovation, efficiency, and growth. Wishing you a Merry Christmas and a prosperous New Year! ✨"
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        primaryCta={{ text: 'Schedule Demo', onClick: () => onNavigate('contact') }}
        secondaryCta={{ text: 'Explore Solutions', onClick: () => onNavigate('solutions') }}
        showScrollIndicator
      />

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white particle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCard value="500+" label="Enterprise Clients" index={0} />
            <MetricCard value="99.9%" label="Uptime SLA" index={1} />
            <MetricCard value="50M+" label="Predictions Daily" index={2} />
            <MetricCard value="24/7" label="Support" index={3} />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0A2463] mb-6">Leading the AI Revolution</h2>
            <p className="text-gray-600 text-lg mb-8">
              At INTELLIGENT SYSTEMS INC, we're pioneering the future of enterprise technology. 
              Our AI-first approach combines cutting-edge machine learning, deep learning, and 
              natural language processing to deliver solutions that transform businesses.
            </p>
            <Button onClick={() => onNavigate('about')} variant="outline">
              Learn About Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Flagship Solutions */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Our Solutions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed to solve your most complex challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                {...solution}
                onClick={() => onNavigate('solutions')}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg">Our proven process for delivering AI excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#00D9FF] mb-4">{step.number}</div>
                <h3 className="text-[#0A2463] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 gradient-animate particle-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-100 text-lg">See what our clients say about us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover-lift"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#00FF88] fill-[#00FF88]" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-gray-200">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A2463] to-[#00D9FF] rounded-2xl p-12 text-center text-white">
            <h2 className="text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprises already leveraging AI to drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#0A2463] hover:bg-gray-100"
              >
                Get Started Today
              </Button>
              <Button 
                onClick={() => onNavigate('solutions')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2463]"
              >
                View All Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
