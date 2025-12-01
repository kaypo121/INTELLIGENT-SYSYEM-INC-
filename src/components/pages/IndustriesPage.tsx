import { useState } from 'react';
import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { Button } from '../ui/button';
import { type Page } from '../Navigation';
import { Heart, DollarSign, Factory, ShoppingBag, CheckCircle } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: Page) => void;
}

export function IndustriesPage({ onNavigate }: IndustriesPageProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('healthcare');

  const industries = [
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingBag },
  ];

  const industryDetails: Record<string, any> = {
    healthcare: {
      tagline: 'Transforming Patient Care with AI',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80',
      challenges: [
        'Rising operational costs',
        'Patient data management',
        'Diagnostic accuracy',
        'Resource allocation'
      ],
      solutions: [
        'AI-powered diagnostic assistance',
        'Predictive patient monitoring',
        'Automated administrative workflows',
        'Drug discovery acceleration'
      ],
      outcomes: [
        { metric: '45%', label: 'Faster Diagnosis' },
        { metric: '60%', label: 'Cost Reduction' },
        { metric: '99%', label: 'Data Accuracy' },
        { metric: '24/7', label: 'Monitoring' }
      ]
    },
    finance: {
      tagline: 'Intelligent Financial Services',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
      challenges: [
        'Fraud detection',
        'Risk assessment',
        'Regulatory compliance',
        'Customer experience'
      ],
      solutions: [
        'Real-time fraud detection',
        'Automated risk modeling',
        'Compliance monitoring',
        'Personalized banking AI'
      ],
      outcomes: [
        { metric: '95%', label: 'Fraud Detection' },
        { metric: '70%', label: 'Faster Processing' },
        { metric: '100%', label: 'Compliance' },
        { metric: '3x', label: 'Customer Satisfaction' }
      ]
    },
    manufacturing: {
      tagline: 'Smart Manufacturing Solutions',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80',
      challenges: [
        'Equipment downtime',
        'Quality control',
        'Supply chain optimization',
        'Production efficiency'
      ],
      solutions: [
        'Predictive maintenance',
        'Computer vision quality inspection',
        'Supply chain AI',
        'Production optimization'
      ],
      outcomes: [
        { metric: '50%', label: 'Less Downtime' },
        { metric: '99.9%', label: 'Quality Rate' },
        { metric: '40%', label: 'Cost Savings' },
        { metric: '35%', label: 'Efficiency Gain' }
      ]
    },
    retail: {
      tagline: 'Next-Gen Retail Intelligence',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80',
      challenges: [
        'Inventory management',
        'Customer personalization',
        'Demand forecasting',
        'Price optimization'
      ],
      solutions: [
        'AI demand forecasting',
        'Personalization engines',
        'Dynamic pricing',
        'Customer behavior analytics'
      ],
      outcomes: [
        { metric: '80%', label: 'Forecast Accuracy' },
        { metric: '45%', label: 'Sales Increase' },
        { metric: '30%', label: 'Inventory Reduction' },
        { metric: '2x', label: 'Customer Retention' }
      ]
    }
  };

  const currentIndustry = industryDetails[selectedIndustry];

  return (
    <div>
      <Hero
        title="Industry-Specific AI Solutions"
        subtitle="Tailored AI platforms designed for the unique challenges of your industry"
        imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
        primaryCta={{ text: 'Schedule Consultation', onClick: () => onNavigate('contact') }}
      />

      {/* Industry Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Select Your Industry</h2>
            <p className="text-gray-600 text-lg">Discover how AI transforms your sector</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  selectedIndustry === industry.id
                    ? 'bg-[#0A2463] border-[#0A2463] text-white shadow-xl'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-[#00D9FF]'
                }`}
              >
                <industry.icon 
                  size={40} 
                  className={`mx-auto mb-4 ${
                    selectedIndustry === industry.id ? 'text-[#00D9FF]' : 'text-[#0A2463]'
                  }`}
                />
                <h3 className={`text-lg font-semibold ${
                  selectedIndustry === industry.id ? 'text-white' : 'text-[#0A2463]'
                }`}>
                  {industry.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={`hero-${selectedIndustry}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <img 
                src={currentIndustry.image} 
                alt={selectedIndustry}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/90 to-[#0A2463]/70 flex items-center justify-center">
                <h2 className="text-white text-center">{currentIndustry.tagline}</h2>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              key={`challenges-${selectedIndustry}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-[#0A2463] mb-6">Industry Challenges</h3>
              <ul className="space-y-4">
                {currentIndustry.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              key={`solutions-${selectedIndustry}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[#0A2463] mb-6">Our Solutions</h3>
              <ul className="space-y-4">
                {currentIndustry.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#00FF88] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            key={`outcomes-${selectedIndustry}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[#0A2463] mb-8 text-center">Measurable Outcomes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {currentIndustry.outcomes.map((outcome: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#00D9FF] mb-2">{outcome.metric}</div>
                  <div className="text-gray-600">{outcome.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A2463] to-[#00D9FF] rounded-2xl p-12 text-center text-white">
            <h2 className="text-white mb-4">Transform Your Industry</h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can address your specific challenges
            </p>
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#0A2463] hover:bg-gray-100"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
