import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { Button } from '../ui/button';
import { type Page } from '../Navigation';
import { Database, Cpu, Code, Shield, Cloud, Lock } from 'lucide-react';

interface TechnologyPageProps {
  onNavigate: (page: Page) => void;
}

export function TechnologyPage({ onNavigate }: TechnologyPageProps) {
  const architectureLayers = [
    {
      icon: Database,
      title: 'Data Layer',
      items: ['Multi-source data ingestion', 'Real-time streaming', 'Data lakes & warehouses', 'ETL pipelines']
    },
    {
      icon: Cpu,
      title: 'AI/ML Layer',
      items: ['Deep learning models', 'NLP engines', 'Computer vision', 'Reinforcement learning']
    },
    {
      icon: Code,
      title: 'Application Layer',
      items: ['RESTful APIs', 'GraphQL endpoints', 'SDKs & libraries', 'Microservices']
    },
    {
      icon: Shield,
      title: 'Security Layer',
      items: ['End-to-end encryption', 'Access control', 'Audit logging', 'Compliance frameworks']
    }
  ];

  const specifications = [
    { metric: 'Model Accuracy', spec: '99.9% on production workloads' },
    { metric: 'Inference Latency', spec: '<100ms average response time' },
    { metric: 'Scalability', spec: 'Auto-scaling to millions of requests/sec' },
    { metric: 'Availability', spec: '99.99% uptime SLA' },
    { metric: 'Data Processing', spec: '10+ billion events per day' },
    { metric: 'Model Training', spec: 'Distributed training on 1000+ GPUs' }
  ];

  return (
    <div>
      <Hero
        title="Enterprise-Grade AI Technology"
        subtitle="Built on cutting-edge infrastructure designed for scale, security, and performance"
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
        primaryCta={{ text: 'View Documentation', onClick: () => onNavigate('resources') }}
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0A2463] mb-6">Technology Stack</h2>
            <p className="text-gray-600 text-lg">
              Our platform leverages the latest advances in AI, cloud computing, and distributed systems 
              to deliver solutions that are powerful, reliable, and secure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">AI Architecture</h2>
            <p className="text-gray-600 text-lg">Four-layer architecture for maximum flexibility</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center mb-4">
                  <layer.icon className="text-white" size={24} />
                </div>
                <h3 className="text-[#0A2463] mb-4">{layer.title}</h3>
                <ul className="space-y-2">
                  {layer.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm">• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Models & Frameworks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Models & Frameworks</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-[#0A2463] mb-4">Deep Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TensorFlow & PyTorch</li>
                <li>• Transformer models</li>
                <li>• CNNs & RNNs</li>
                <li>• Custom architectures</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-[#0A2463] mb-4">NLP & Vision</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• BERT, GPT models</li>
                <li>• Computer vision APIs</li>
                <li>• Speech recognition</li>
                <li>• Multimodal AI</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-[#0A2463] mb-4">ML Operations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kubernetes orchestration</li>
                <li>• Model versioning</li>
                <li>• A/B testing</li>
                <li>• Performance monitoring</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Cloud Infrastructure</h2>
            <p className="text-gray-600 text-lg">Deploy anywhere with multi-cloud support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Public Cloud', items: ['AWS, Azure, GCP', 'Managed services', 'Global CDN', 'Auto-scaling'] },
              { title: 'Private Cloud', items: ['On-premises deployment', 'Air-gapped systems', 'Custom hardware', 'Full control'] },
              { title: 'Hybrid Cloud', items: ['Best of both worlds', 'Data sovereignty', 'Flexible workloads', 'Seamless integration'] }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <Cloud className="text-[#00D9FF] mb-4" size={32} />
                <h3 className="text-[#0A2463] mb-4">{option.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {option.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Ethics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center">
                  <Lock className="text-white" size={24} />
                </div>
                <h2 className="text-[#0A2463]">Security First</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• SOC 2 Type II certified</li>
                <li>• GDPR & HIPAA compliant</li>
                <li>• End-to-end encryption</li>
                <li>• Regular security audits</li>
                <li>• Zero-trust architecture</li>
                <li>• 24/7 security monitoring</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <h2 className="text-[#0A2463]">Ethical AI</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Bias detection & mitigation</li>
                <li>• Explainable AI models</li>
                <li>• Privacy by design</li>
                <li>• Transparent algorithms</li>
                <li>• Human oversight</li>
                <li>• Responsible AI principles</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Technical Specifications</h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >
            <table className="w-full">
              <thead className="bg-[#0A2463] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Metric</th>
                  <th className="px-6 py-4 text-left">Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {specifications.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.metric}</td>
                    <td className="px-6 py-4 text-gray-600">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A2463] to-[#00D9FF] rounded-2xl p-12 text-center text-white">
            <h2 className="text-white mb-4">Ready to Build with Us?</h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Explore our developer documentation and start integrating AI today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('resources')}
                className="bg-white text-[#0A2463] hover:bg-gray-100"
              >
                View Documentation
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2463]"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
