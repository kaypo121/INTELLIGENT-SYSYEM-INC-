import { useState } from 'react';
import { motion } from 'motion/react';
import { Hero } from '../Hero';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { type Page } from '../Navigation';
import { Calendar, MessageSquare, Headphones, Mail, Phone, Clock, Linkedin, Twitter, Users } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export function ContactPage({ onNavigate: _onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    inquiryType: '',
    industry: '',
    message: '',
    subscribe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const contactOptions = [
    {
      icon: Calendar,
      title: 'Schedule a Demo',
      description: 'See our AI solutions in action with a personalized demo',
      action: 'Book Demo'
    },
    {
      icon: MessageSquare,
      title: 'Sales Inquiry',
      description: 'Discuss pricing, features, and enterprise solutions',
      action: 'Contact Sales'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Get help with implementation and troubleshooting',
      action: 'Get Support'
    }
  ];

  const departments = [
    { icon: MessageSquare, title: 'Sales', email: 'intelligentsystems26@gmail.com', phone: '+1 (555) 123-4567' },
    { icon: Headphones, title: 'Support', email: 'intelligentsystems26@gmail.com', phone: '+1 (555) 123-4568' },
    { icon: Users, title: 'Partnerships', email: 'intelligentsystems26@gmail.com', phone: '+1 (555) 123-4569' },
    { icon: Mail, title: 'General', email: 'intelligentsystems26@gmail.com', phone: '+1 (555) 123-4570' }
  ];

  return (
    <div>
      <Hero
        title="🎁 Get in Touch - Holiday Special! 🎄"
        subtitle="Let's discuss how AI can transform your business. Schedule a demo this December and receive a special holiday consultation package!"
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="text-white" size={28} />
                </div>
                <h3 className="text-[#0A2463] mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <Button variant="outline">{option.action}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Send Us a Message</h2>
            <p className="text-gray-600 text-lg">Fill out the form and we'll get back to you within 24 hours</p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="inquiryType">Inquiry Type *</Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Schedule a Demo</SelectItem>
                    <SelectItem value="enterprise">Enterprise Sales</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) => setFormData({ ...formData, industry: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Financial Services</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail & E-commerce</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project or inquiry..."
                required
              />
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Checkbox
                id="subscribe"
                checked={formData.subscribe}
                onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
              />
              <Label htmlFor="subscribe" className="cursor-pointer">
                Subscribe to our newsletter for AI insights and updates
              </Label>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#0A2463] mb-4">Direct Contact</h2>
            <p className="text-gray-600 text-lg">Reach out to the right department</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <dept.icon className="text-[#00D9FF] mb-4" size={28} />
                <h3 className="text-[#0A2463] mb-4">{dept.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <Mail size={16} className="flex-shrink-0 mt-1" />
                    <a href={`mailto:${dept.email}`} className="hover:text-[#0A2463]">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={16} className="flex-shrink-0 mt-1" />
                    <a href={`tel:${dept.phone}`} className="hover:text-[#0A2463]">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time & Social */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#0A2463] mb-6">Response Time</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="text-[#00D9FF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Sales Inquiries</div>
                    <div className="text-gray-600">Within 4 business hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#00D9FF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Technical Support</div>
                    <div className="text-gray-600">Within 2 business hours</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#00D9FF] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">General Inquiries</div>
                    <div className="text-gray-600">Within 24 business hours</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#0A2463] mb-6">Connect With Us</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media for the latest updates, insights, and company news
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/intelligent-systems-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0A2463] rounded-lg flex items-center justify-center hover:bg-[#0A2463]/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="https://twitter.com/intellisys_inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0A2463] rounded-lg flex items-center justify-center hover:bg-[#0A2463]/90 transition-colors"
                  aria-label="Twitter/X"
                >
                  <Twitter className="text-white" size={24} />
                </a>
                <a
                  href="https://www.instagram.com/intellisys_inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0A2463] rounded-lg flex items-center justify-center hover:bg-[#0A2463]/90 transition-colors"
                  aria-label="Instagram"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@parkerins_1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0A2463] rounded-lg flex items-center justify-center hover:bg-[#0A2463]/90 transition-colors"
                  aria-label="TikTok"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="mailto:intelligentsystems26@gmail.com"
                  className="w-12 h-12 bg-[#0A2463] rounded-lg flex items-center justify-center hover:bg-[#0A2463]/90 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="text-white" size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A2463] to-[#00D9FF] rounded-2xl p-12 text-center text-white">
            <h2 className="text-white mb-4">Prefer to Talk?</h2>
            <p className="text-gray-100 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a call with our team to discuss your AI needs
            </p>
            <Button className="bg-white text-[#0A2463] hover:bg-gray-100">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
