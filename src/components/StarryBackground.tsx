import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const { scrollYProgress } = useScroll();
  
  // Transforma o progresso do scroll em opacidade (começa em 0 e vai até 1)
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.5, 1]);
  const starsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 200;

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          delay: Math.random() * 3,
          duration: Math.random() * 4 + 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Fundo gradiente azul escuro - aparece gradualmente */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          opacity: backgroundOpacity,
          background: 'linear-gradient(to bottom, #001845 0%, #05308E 50%, #0a1929 100%)'
        }}
      />

      {/* Estrelas */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: starsOpacity }}
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Efeito de nebulosa com cores da Flynna */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          opacity: backgroundOpacity,
          background: `
            radial-gradient(ellipse at 15% 20%, rgba(28, 182, 217, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 60%, rgba(83, 210, 157, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(111, 231, 133, 0.06) 0%, transparent 50%)
          `
        }}
      >
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}
