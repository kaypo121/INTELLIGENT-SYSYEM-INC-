import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { Button } from '../ui/button';
import { type Page } from '../Navigation';
import { Target, Eye, Heart, Users, Award, Globe, Lightbulb } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    { icon: Lightbulb, title: 'Innovation First', description: 'We push boundaries and embrace cutting-edge technology' },
    { icon: Heart, title: 'Client Success', description: 'Your success is our mission and measure of achievement' },
    { icon: Users, title: 'Collaboration', description: 'We work as partners, not vendors, with our clients' },
    { icon: Globe, title: 'Global Impact', description: 'Creating solutions that make a difference worldwide' },
  ];

  const milestones = [
    { year: '2025', title: 'Founded', description: 'INTELLIGENT SYSTEMS INC was born with a vision to democratize AI and transform enterprise technology' },
  ];

  return (
    <div>
      <Hero
        title="Building the Future of Enterprise AI"
        subtitle="We're a team of innovators, engineers, and visionaries committed to transforming businesses through intelligent technology"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        primaryCta={{ text: 'Join Our Team', onClick: () => onNavigate('careers') }}
      />

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-[#0A2463] mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower every enterprise with accessible, ethical, and transformative AI technology 
              that drives innovation, enhances human capabilities, and creates sustainable competitive advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h2 className="text-[#0A2463] mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A world where AI seamlessly integrates with human intelligence, enabling organizations 
              to solve complex challenges, unlock new opportunities, and create value that benefits society as a whole.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-[#0A2463] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">From startup to industry leader</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#00D9FF] rounded-full flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#00D9FF] text-sm font-semibold mb-1">{milestone.year}</div>
                  <h3 className="text-[#0A2463] mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border-l-4 border-[#00D9FF] p-8 rounded-r-lg"
          >
            <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
              "We founded INTELLIGENT SYSTEMS with a simple belief: AI should empower, not replace, 
              human intelligence. Every solution we build is designed to augment human capabilities, 
              enabling people to focus on what they do best—creative thinking, strategic decision-making, 
              and meaningful innovation."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-full flex items-center justify-center">
                <Users className="text-white" size={28} />
              </div>
              <div>
                <div className="font-semibold text-[#0A2463]">Jerry Justice Nii Borteye Borketey</div>
                <div className="text-gray-600">Founder & CEO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Identity Statement */}
      <section className="py-20 bg-gradient-to-r from-[#0A2463] to-[#00D9FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">We Are INTELLIGENT SYSTEMS</h2>
            <p className="text-gray-100 text-lg mb-8 leading-relaxed">
              A diverse team of AI researchers, engineers, designers, and business strategists 
              united by a passion for innovation and a commitment to ethical AI development. 
              Together, we're building technology that makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Team & Core Members - Inserted section maintaining DOM integrity */}
      <section className="py-20 bg-gray-50" data-section="team-members">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Founding Team & Core Members</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our company is built on the expertise and passion of a multidisciplinary team 
              committed to innovation, security, and technological excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Jerry Justice Nii Borteye Borketey', title: 'Founder & CEO', roles: ['Research', 'Marketing'] },
              { name: 'Darko Anita Firdaus', title: 'Lead Engineer', roles: ['Engineering', 'Development'] },
              { name: 'Danso Daniel Effum', title: 'Senior Engineer', roles: ['Engineering', 'Development'] },
              { name: 'Prince', title: 'Design Lead', roles: ['Design', 'Marketing'] },
              { name: 'Owusu', title: 'Research Specialist', roles: ['Research', 'Marketing'] },
              { name: 'Clement', title: 'Marketing Manager', roles: ['Marketing'] },
              { name: 'Patrick', title: 'Security Lead', roles: ['Security'] }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                data-member-index={index}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-full mx-auto mb-4">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-[#0A2463] text-center mb-2">{member.name}</h3>
                <p className="text-gray-600 text-center text-sm mb-4">{member.title}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.roles.map((role, roleIndex) => (
                    <span
                      key={roleIndex}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h2 className="text-[#0A2463] mb-4">Join Our Mission</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our vision
            </p>
            <Button onClick={() => onNavigate('careers')}>
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
