import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  primaryCta?: { text: string; onClick: () => void };
  secondaryCta?: { text: string; onClick: () => void };
  showScrollIndicator?: boolean;
}

export function Hero({ title, subtitle, imageSrc, primaryCta, secondaryCta, showScrollIndicator }: HeroProps) {
  return (
    <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden particle-bg">
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-700 hover:scale-110"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/90 via-[#0A2463]/80 to-[#00D9FF]/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white mb-6 neon-glow"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-10 text-gray-100"
        >
          {subtitle}
        </motion.p>
        
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCta && (
              <Button
                onClick={primaryCta.onClick}
                className="bg-[#00D9FF] text-[#0A2463] hover:bg-[#00D9FF]/90 text-lg px-8 py-4 h-auto"
              >
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button
                onClick={secondaryCta.onClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0A2463] text-lg px-8 py-4 h-auto"
              >
                {secondaryCta.text}
              </Button>
            )}
          </motion.div>
        )}
      </div>
      
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-white" size={32} />
        </motion.div>
      )}
    </div>
  );
}
