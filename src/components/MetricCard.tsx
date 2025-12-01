import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface MetricCardProps {
  value: string;
  label: string;
  index?: number;
}

export function MetricCard({ value, label, index = 0 }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (animate && !hasAnimated) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      const suffix = value.replace(/[0-9]/g, '');
      let current = 0;
      const increment = numericValue / 30;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          setHasAnimated(true);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current) + suffix);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [value, animate, hasAnimated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => setAnimate(true)}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#00D9FF] mb-2">
        {displayValue}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}
