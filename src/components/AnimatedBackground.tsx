import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Tech Grid - More visible */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(28, 182, 217, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(28, 182, 217, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Diagonal Grid Lines */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(5, 48, 142, 0.5) 40px,
                rgba(5, 48, 142, 0.5) 41px
              )
            `,
          }}
        />
      </div>

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent, #1CB6D9, transparent)',
          boxShadow: '0 0 20px #1CB6D9',
        }}
        animate={{
          top: ['-2px', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-[10%] w-64 h-64 opacity-10"
        style={{
          background: 'linear-gradient(135deg, #1CB6D9 0%, #53D29D 100%)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-[15%] w-48 h-48 opacity-10"
        style={{
          background: 'linear-gradient(135deg, #2BAEC8 0%, #6FE785 100%)',
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        }}
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Particle Dots */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: '#1CB6D9',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px #1CB6D9',
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating Orbs with parallax - More tech feel */}
      <motion.div
        className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #1CB6D9 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { duration: 0.5 },
          y: { duration: 0.5 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute top-[40%] right-[15%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #53D29D 0%, transparent 70%)',
        }}
        animate={{
          x: -mousePosition.x * 30,
          y: -mousePosition.y * 30,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { duration: 0.5 },
          y: { duration: 0.5 },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white" />
    </div>
  );
}
