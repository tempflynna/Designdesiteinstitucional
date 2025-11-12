import { motion } from "motion/react";
import { ReactNode } from "react";

interface TechCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

export function TechCard({ children, className = "", glowColor = "#1CB6D9", delay = 0 }: TechCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-50 transition-opacity group-hover:opacity-100" 
           style={{ borderColor: glowColor }} />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-50 transition-opacity group-hover:opacity-100" 
           style={{ borderColor: glowColor }} />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-50 transition-opacity group-hover:opacity-100" 
           style={{ borderColor: glowColor }} />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-50 transition-opacity group-hover:opacity-100" 
           style={{ borderColor: glowColor }} />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          boxShadow: `0 0 30px ${glowColor}40, inset 0 0 20px ${glowColor}20`,
          background: `linear-gradient(135deg, ${glowColor}05, transparent)`,
        }}
      />
      
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{
             background: `linear-gradient(135deg, ${glowColor}40, transparent)`,
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude',
             padding: '1px',
           }}
      />
      
      {/* Content */}
      <div className="relative bg-white rounded-2xl p-8 border border-gray-100 group-hover:border-transparent transition-colors duration-300">
        {children}
      </div>
    </motion.div>
  );
}
