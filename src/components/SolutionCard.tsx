import { motion } from 'motion/react';
import { type LucideIcon, ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  index?: number;
}

export function SolutionCard({ icon: Icon, title, description, onClick, index = 0 }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group bg-white border border-gray-200 rounded-xl p-6 cursor-pointer transition-all hover:border-[#00D9FF] hover:shadow-2xl hover-lift shimmer card-3d"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#0A2463] to-[#00D9FF] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all float-animation">
        <Icon className="text-white" size={28} />
      </div>
      
      <h3 className="text-[#0A2463] mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center text-[#00D9FF] font-medium group-hover:translate-x-2 transition-transform">
        Learn More
        <ArrowRight size={18} className="ml-2" />
      </div>
    </motion.div>
  );
}
