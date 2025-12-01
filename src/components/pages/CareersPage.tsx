import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { Button } from '../ui/button';
import { type Page } from '../Navigation';
import { Heart, Users, Zap, Globe, Briefcase, MapPin, Clock } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: Page) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  
  const handleApply = (jobTitle: string) => {
    // Navigate to contact page
    onNavigate('contact');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Show alert with job title
    setTimeout(() => {
      alert(`Thank you for your interest in the ${jobTitle} position! Please fill out the contact form below and mention the position in your message.`);
    }, 500);
  };
  const reasons = [
    { icon: Zap, title: 'Cutting-Edge Work', description: 'Work on AI projects that push the boundaries of technology' },
    { icon: Users, title: 'Talented Team', description: 'Collaborate with world-class engineers and researchers' },
    { icon: Globe, title: 'Global Impact', description: 'Build solutions that transform industries worldwide' },
    { icon: Heart, title: 'Work-Life Balance', description: 'Flexible schedules and remote-friendly culture' }
  ];

  const values = [
    { title: 'Innovation', description: 'We encourage experimentation and creative problem-solving' },
    { title: 'Collaboration', description: 'Great ideas come from diverse perspectives working together' },
    { title: 'Growth', description: 'Continuous learning and professional development opportunities' },
    { title: 'Impact', description: 'Every role contributes to meaningful technological advancement' }
  ];

  const benefits = [
    { category: 'Health & Wellness', items: ['Comprehensive health insurance', 'Mental health support', 'Fitness stipend', 'Wellness programs'] },
    { category: 'Work Flexibility', items: ['Remote work options', 'Flexible hours', 'Unlimited PTO', 'Sabbatical program'] },
    { category: 'Financial', items: ['Competitive salary', 'Equity options', '401(k) matching', 'Performance bonuses'] },
    { category: 'Growth', items: ['Learning budget', 'Conference attendance', 'Mentorship program', 'Career development'] },
    { category: 'Perks', items: ['Latest tech equipment', 'Home office setup', 'Team events', 'Relocation assistance'] },
    { category: 'Family', items: ['Parental leave', 'Childcare support', 'Family health coverage', 'Flexible scheduling'] }
  ];

  const jobs = [
    {
      title: 'Senior AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      description: 'Build and deploy production ML systems at scale'
    },
    {
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Advance the state-of-the-art in deep learning and NLP'
    },
    {
      title: 'Product Manager - AI Platform',
      department: 'Product',
      location: 'Remote / Seattle',
      type: 'Full-time',
      description: 'Define product strategy for our AI platform'
    },
    {
      title: 'Solutions Architect',
      department: 'Sales',
      location: 'Remote / Boston',
      type: 'Full-time',
      description: 'Design AI solutions for enterprise clients'
    }
  ];

  const hiringSteps = [
    { number: '01', title: 'Apply', description: 'Submit your application and resume' },
    { number: '02', title: 'Screen', description: 'Initial conversation with our team' },
    { number: '03', title: 'Interview', description: 'Technical and cultural fit interviews' },
    { number: '04', title: 'Offer', description: 'Join the team and start building' }
  ];

  return (
    <div>
      <Hero
        title="Build the Future with Us"
        subtitle="Join a team of innovators creating AI technology that transforms industries"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        primaryCta={{ text: 'View Open Positions', onClick: () => window.scrollTo({ top: 1200, behavior: 'smooth' }) }}
      />

      {/* Why Work Here */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Why INTELLIGENT SYSTEMS?</h2>
            <p className="text-gray-600 text-lg">More than just a job—it's a mission</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="text-white" size={28} />
                </div>
                <h3 className="text-[#0A2463] mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Our Culture</h2>
            <p className="text-gray-600 text-lg">Values that guide how we work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-[#0A2463] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 text-lg">We invest in our people</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-[#0A2463] mb-4">{benefit.category}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm">• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Open Positions</h2>
            <p className="text-gray-600 text-lg">Find your next opportunity</p>
          </div>
          
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-[#0A2463] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <Button onClick={() => handleApply(job.title)}>Apply Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Our Hiring Process</h2>
            <p className="text-gray-600 text-lg">What to expect when you apply</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

      {/* Diversity Statement */}
      <section className="py-20 bg-gradient-to-r from-[#0A2463] to-[#00D9FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">Diversity & Inclusion</h2>
            <p className="text-gray-100 text-lg leading-relaxed">
              We believe diverse teams build better AI. We're committed to creating an inclusive 
              environment where everyone can thrive, regardless of background, identity, or experience. 
              We actively seek candidates from underrepresented groups in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h2 className="text-[#0A2463] mb-4">Don't See the Right Role?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button onClick={() => handleApply('General Application')}>Submit General Application</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
