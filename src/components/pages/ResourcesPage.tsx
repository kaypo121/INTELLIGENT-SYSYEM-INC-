import { useState } from 'react';
import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { type Page } from '../Navigation';
import { BookOpen, FileText, Award, Download, ArrowRight } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: Page) => void;
}

export function ResourcesPage({ onNavigate: _onNavigate }: ResourcesPageProps) {
  const [activeTab, setActiveTab] = useState<'blog' | 'research' | 'case-studies' | 'whitepapers'>('blog');
  const [email, setEmail] = useState('');

  const handleDownloadPDF = (title: string) => {
    // Show download message
    alert(`Thank you for your interest in "${title}"!\n\nThis is a demo. In production, this would download the PDF file.\n\nTo implement:\n1. Upload PDF files to your server or cloud storage\n2. Replace this alert with actual download link`);
    
    // In production, you would do something like:
    // window.open('/pdfs/whitepaper-name.pdf', '_blank');
    // or trigger a download with a proper file URL
  };

  return (
    <div>
      <Hero
        title="Resources & Insights"
        subtitle="Stay informed with the latest in AI technology, research, and industry trends"
        imageSrc="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1920&q=80"
      />

      {/* Tab Navigation */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'blog', label: 'Blog', icon: BookOpen },
              { id: 'research', label: 'Research', icon: FileText },
              { id: 'case-studies', label: 'Case Studies', icon: Award },
              { id: 'whitepapers', label: 'Whitepapers', icon: Download }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-4 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#0A2463] text-[#0A2463]'
                    : 'border-transparent text-gray-600 hover:text-[#0A2463]'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      {activeTab === 'blog' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-[#0A2463] to-[#00D9FF] text-white rounded-2xl p-8 md:p-12 mb-12"
            >
              <div className="inline-block bg-[#00FF88] text-[#0A2463] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Featured
              </div>
              <h2 className="text-white mb-4">The Future of Enterprise AI: 2025 Trends</h2>
              <p className="text-gray-100 mb-6">
                Explore the key AI trends shaping enterprise technology in 2025, from autonomous systems 
                to ethical AI frameworks.
              </p>
              <Button className="bg-white text-[#0A2463] hover:bg-gray-100">
                Read Article <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'AI in Healthcare: Success Stories', date: 'Nov 25, 2025', category: 'Healthcare' },
                { title: 'Building Ethical AI Systems', date: 'Nov 20, 2025', category: 'Ethics' },
                { title: 'Predictive Analytics Best Practices', date: 'Nov 15, 2025', category: 'Analytics' },
                { title: 'Scaling AI Infrastructure', date: 'Nov 10, 2025', category: 'Technology' },
                { title: 'AI Security Fundamentals', date: 'Nov 5, 2025', category: 'Security' },
                { title: 'ROI of AI Implementation', date: 'Nov 1, 2025', category: 'Business' }
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="text-[#00D9FF] text-sm font-semibold mb-2">{post.category}</div>
                  <h3 className="text-[#0A2463] mb-3">{post.title}</h3>
                  <div className="text-gray-500 text-sm mb-4">{post.date}</div>
                  <div className="flex items-center text-[#0A2463] font-medium">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Content */}
      {activeTab === 'research' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#0A2463] mb-4">Research Publications</h2>
              <p className="text-gray-600 text-lg">Peer-reviewed research from our AI labs</p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Advances in Neural Architecture Search', journal: 'Nature Machine Intelligence', year: '2025' },
                { title: 'Ethical Frameworks for AI Decision Making', journal: 'AI Ethics Journal', year: '2025' },
                { title: 'Scalable Distributed Training Methods', journal: 'ICML 2025', year: '2025' },
                { title: 'Explainable AI in Healthcare Applications', journal: 'Medical AI Review', year: '2024' }
              ].map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-[#0A2463] mb-2">{paper.title}</h3>
                  <div className="text-gray-600 mb-4">{paper.journal} • {paper.year}</div>
                  <Button variant="outline">View Paper</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Content */}
      {activeTab === 'case-studies' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#0A2463] mb-4">Client Success Stories</h2>
              <p className="text-gray-600 text-lg">Real results from real enterprises</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { company: 'Global Healthcare Corp', industry: 'Healthcare', result: '300% efficiency increase' },
                { company: 'FinanceHub International', industry: 'Finance', result: '95% fraud detection rate' },
                { company: 'Manufacturing Solutions Inc', industry: 'Manufacturing', result: '50% downtime reduction' },
                { company: 'RetailTech Global', industry: 'Retail', result: '45% sales increase' }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-[#00D9FF] text-sm font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-[#0A2463] mb-4">{study.company}</h3>
                  <div className="text-3xl font-bold text-[#00FF88] mb-4">{study.result}</div>
                  <Button variant="outline">Read Case Study</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Whitepapers Content */}
      {activeTab === 'whitepapers' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-[#0A2463] mb-4">Technical Whitepapers</h2>
              <p className="text-gray-600 text-lg">In-depth guides and technical documentation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Enterprise AI Implementation Guide', pages: '45 pages', downloads: '2.5K' },
                { title: 'AI Security Best Practices', pages: '32 pages', downloads: '1.8K' },
                { title: 'ROI Calculator for AI Projects', pages: '28 pages', downloads: '3.2K' },
                { title: 'Ethical AI Framework', pages: '38 pages', downloads: '1.5K' }
              ].map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <Download className="text-[#00D9FF] mb-4" size={32} />
                  <h3 className="text-[#0A2463] mb-3">{paper.title}</h3>
                  <div className="text-gray-600 text-sm mb-4">{paper.pages} • {paper.downloads} downloads</div>
                  <Button onClick={() => handleDownloadPDF(paper.title)}>Download PDF</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0A2463] mb-4">Stay Updated</h2>
            <p className="text-gray-600 text-lg mb-8">
              Subscribe to our newsletter for the latest AI insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
