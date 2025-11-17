import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { TechCard } from "./TechCard";
import astronautImage from "figma:asset/1e30b3bdc1e6f14fa76b652bdfded3c9c4803a69.png";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  
  return (
    <section ref={ref} id="inicio" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white flex items-center">
      {/* Tech geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagon pattern */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="#1CB6D9" strokeWidth="0.5"/>
            <polygon points="50 10 85 30 85 70 50 90 15 70 15 30" fill="none" stroke="#53D29D" strokeWidth="0.5"/>
            <polygon points="50 20 75 35 75 65 50 80 25 65 25 35" fill="none" stroke="#2BAEC8" strokeWidth="0.5"/>
          </svg>
        </motion.div>

        {/* Circuit lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <motion.path
            d="M 0,100 L 300,100 L 300,200 L 600,200"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1CB6D9" stopOpacity="0" />
              <stop offset="50%" stopColor="#1CB6D9" stopOpacity="1" />
              <stop offset="100%" stopColor="#1CB6D9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{ y, opacity }}
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1CB6D9]/30 bg-gradient-to-r from-[#1CB6D9]/10 to-[#53D29D]/10 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, borderColor: "#1CB6D9" }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-[#1CB6D9]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium flynna-text-navy">Hub de inovação do Grupo All Online</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Transformando{" "}
                <motion.span 
                  className="flynna-gradient-text inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  ideias
                </motion.span>{" "}
                em soluções
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Conectamos tecnologia, comunicação, criatividade e estratégia para fazer sua empresa crescer.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* <Button 
                  size="lg"
                  className="text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl flynna-gradient-bg relative overflow-hidden group"
                >
                  <span className="relative z-10">Conheça nossas soluções</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button> */}
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {/* <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 px-8 py-4 rounded-lg flynna-border-sky flynna-text-navy flynna-button-hover"
                >
                  Saiba mais sobre nós
                </Button> */}
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image with Tech Frame */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Tech corner frames */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#1CB6D9] z-20 rounded-tl-lg" />
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-[#53D29D] z-20 rounded-tr-lg" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-[#2BAEC8] z-20 rounded-bl-lg" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-[#6FE785] z-20 rounded-br-lg" />
            
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 40px rgba(28, 182, 217, 0.3), 0 0 80px rgba(83, 210, 157, 0.2)',
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 60px rgba(28, 182, 217, 0.5), 0 0 100px rgba(83, 210, 157, 0.3)',
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Scanning line effect */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1CB6D9] to-transparent z-20"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ boxShadow: '0 0 10px #1CB6D9' }}
              />
              
              <ImageWithFallback
                src={astronautImage}
                alt="Tecnologia moderna e inovação empresarial"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Tech overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05308E]/20 via-transparent to-[#1CB6D9]/20 mix-blend-overlay" />
            </motion.div>
            
            {/* Floating tech elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 z-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="#1CB6D9" strokeWidth="2"/>
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 w-20 h-20 z-20"
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#53D29D" strokeWidth="2"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#2BAEC8" strokeWidth="2"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}