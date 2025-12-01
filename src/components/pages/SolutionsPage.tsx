import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { Button } from '../ui/button';
import { type Page } from '../Navigation';
import { Brain, Zap, Shield, TrendingUp, Code, CheckCircle } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: Page) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  return (
    <div>
      <Hero
        title="AI Solutions That Transform Business"
        subtitle="Comprehensive, enterprise-grade AI platforms designed to solve your most complex challenges"
        imageSrc="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80"
        primaryCta={{ text: 'Schedule Demo', onClick: () => onNavigate('contact') }}
      />

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0A2463] mb-6">Built for Enterprise Scale</h2>
            <p className="text-gray-600 text-lg">
              Our solutions combine cutting-edge AI technology with enterprise-grade reliability, 
              security, and scalability. Each platform is designed to integrate seamlessly with 
              your existing infrastructure while delivering measurable business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution 1: Intelligent Automation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-white" size={32} />
              </div>
              <h2 className="text-[#0A2463] mb-4">Intelligent Automation Platform</h2>
              <p className="text-[#00D9FF] text-lg font-semibold mb-4">
                Transform Operations with AI-Powered Automation
              </p>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">The Problem</h4>
                <p className="text-gray-600">
                  Manual processes consume valuable time, introduce errors, and limit scalability. 
                  Traditional automation lacks the intelligence to handle complex decision-making.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">The Solution</h4>
                <p className="text-gray-600">
                  Our platform combines RPA with advanced AI to automate end-to-end workflows, 
                  make intelligent decisions, and continuously learn from outcomes.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-[#0A2463] mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {[
                    'Natural language process understanding',
                    'Computer vision for document processing',
                    'Intelligent decision engines',
                    'Self-learning workflows',
                    'Real-time monitoring & analytics',
                    'Enterprise integration APIs'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-[#00FF88] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-[#0A2463] mb-4">Business Impact</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">85%</div>
                      <div className="text-sm text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">99.9%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution 2: Predictive Analytics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-[#0A2463] mb-4">Capabilities</h4>
                <ul className="space-y-3">
                  {[
                    'Time series forecasting',
                    'Demand prediction',
                    'Risk assessment models',
                    'Customer behavior analytics',
                    'Market trend analysis',
                    'Anomaly detection'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-[#00FF88] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-[#0A2463] mb-4">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">40%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">95%</div>
                      <div className="text-sm text-gray-600">Forecast Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h2 className="text-[#0A2463] mb-4">Predictive Analytics Engine</h2>
              <p className="text-[#00D9FF] text-lg font-semibold mb-4">
                Forecast the Future with AI-Powered Insights
              </p>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">The Challenge</h4>
                <p className="text-gray-600">
                  Business decisions based on historical data alone miss emerging trends and opportunities. 
                  Traditional analytics can't handle the complexity of modern data.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">Our Approach</h4>
                <p className="text-gray-600">
                  Advanced machine learning models analyze patterns across multiple data sources 
                  to deliver accurate predictions and actionable recommendations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution 3: AI Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h2 className="text-[#0A2463] mb-4">AI Security Platform</h2>
              <p className="text-[#00D9FF] text-lg font-semibold mb-4">
                Protect Your Enterprise with Intelligent Threat Detection
              </p>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">The Threat Landscape</h4>
                <p className="text-gray-600">
                  Cyber threats evolve faster than traditional security can respond. 
                  Manual monitoring can't scale to protect modern distributed systems.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">Intelligent Defense</h4>
                <p className="text-gray-600">
                  Our AI continuously learns attack patterns, identifies anomalies in real-time, 
                  and automatically responds to threats before they cause damage.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-[#0A2463] mb-4">Protection Features</h4>
                <ul className="space-y-3">
                  {[
                    'Real-time threat detection',
                    'Behavioral analysis',
                    'Automated incident response',
                    'Vulnerability assessment',
                    'Compliance monitoring',
                    'Zero-day threat protection'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-[#00FF88] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-[#0A2463] mb-4">Security Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">99.99%</div>
                      <div className="text-sm text-gray-600">Threat Detection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">&lt;1s</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution 4: Business Intelligence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-[#0A2463] mb-4">Intelligence Features</h4>
                <ul className="space-y-3">
                  {[
                    'Natural language queries',
                    'Automated insights generation',
                    'Interactive dashboards',
                    'Custom report builder',
                    'Data visualization',
                    'Collaborative analytics'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-[#00FF88] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-[#0A2463] mb-4">Business Value</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">10x</div>
                      <div className="text-sm text-gray-600">Faster Insights</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">60%</div>
                      <div className="text-sm text-gray-600">Better Decisions</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h2 className="text-[#0A2463] mb-4">Business Intelligence Suite</h2>
              <p className="text-[#00D9FF] text-lg font-semibold mb-4">
                Transform Data into Strategic Advantage
              </p>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">The Data Challenge</h4>
                <p className="text-gray-600">
                  Organizations drown in data but starve for insights. Traditional BI tools 
                  require technical expertise and can't surface hidden patterns.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">AI-Driven Intelligence</h4>
                <p className="text-gray-600">
                  Our platform automatically discovers insights, answers questions in plain English, 
                  and delivers personalized recommendations to every stakeholder.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution 5: Developer Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center mb-6">
                <Code className="text-white" size={32} />
              </div>
              <h2 className="text-[#0A2463] mb-4">AI Developer Platform</h2>
              <p className="text-[#00D9FF] text-lg font-semibold mb-4">
                Build AI Applications Faster
              </p>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">Developer Challenges</h4>
                <p className="text-gray-600">
                  Building AI from scratch requires specialized expertise, infrastructure, 
                  and months of development time.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-[#0A2463] mb-3">Accelerated Development</h4>
                <p className="text-gray-600">
                  Pre-built models, APIs, and SDKs let developers integrate AI capabilities 
                  in hours instead of months.
                </p>
              </div>
              
              <div className="bg-black/90 rounded-lg p-6 font-mono text-sm">
                <div className="text-gray-400">// Simple AI integration</div>
                <div className="text-[#00FF88]">import</div>
                <span className="text-white"> {'{ AI }'} </span>
                <span className="text-[#00FF88]">from</span>
                <span className="text-yellow-400"> '@intelligent-systems/ai'</span>
                <div className="mt-2 text-gray-400">// Make predictions</div>
                <div className="text-purple-400">const</div>
                <span className="text-white"> result = </span>
                <span className="text-purple-400">await</span>
                <span className="text-white"> AI.</span>
                <span className="text-blue-400">predict</span>
                <span className="text-white">(data)</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-[#0A2463] mb-4">Developer Tools</h4>
                <ul className="space-y-3">
                  {[
                    'RESTful & GraphQL APIs',
                    'Python, JavaScript, Java SDKs',
                    'Pre-trained model library',
                    'Custom model training',
                    'Real-time inference',
                    'Comprehensive documentation'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-[#00FF88] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-[#0A2463] mb-4">Development Speed</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">90%</div>
                      <div className="text-sm text-gray-600">Faster to Market</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00D9FF]">50+</div>
                      <div className="text-sm text-gray-600">Pre-built Models</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A2463] to-[#00D9FF] rounded-2xl p-12 text-center text-white">
            <h2 className="text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a demo to see how our solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#0A2463] hover:bg-gray-100"
              >
                Schedule Demo
              </Button>
              <Button 
                onClick={() => onNavigate('industries')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2463]"
              >
                View Industries
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
