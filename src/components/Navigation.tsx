import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export type Page = 'home' | 'about' | 'solutions' | 'industries' | 'technology' | 'resources' | 'careers' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Industries', page: 'industries' },
    { label: 'Technology', page: 'technology' },
    { label: 'Resources', page: 'resources' },
    { label: 'Careers', page: 'careers' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigate('home')}
          >
            <div className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
              INTELLIGENT SYSTEMS
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-sm transition-all animated-underline ${
                  currentPage === item.page
                    ? 'text-[#0A2463] font-semibold'
                    : 'text-gray-600 hover:text-[#0A2463]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => handleNavigate('contact')} className="pulse-glow hover:scale-105 transition-transform">
              Schedule Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left py-2 ${
                  currentPage === item.page
                    ? 'text-[#0A2463] font-semibold'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavigate('contact')}
              className="w-full"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
