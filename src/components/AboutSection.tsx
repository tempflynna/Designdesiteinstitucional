import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import techImage from "figma:asset/ccaccbd39573f17bf199c16e34cd8508b5975b7b.png";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image with Tech Frame */}
          <motion.div 
            className="relative order-2 lg:order-1"
            variants={itemVariants}
          >
            {/* Tech border corners */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-[#1CB6D9] z-20" />
            <div className="absolute -top-3 -right-3 w-10 h-10 border-t-4 border-r-4 border-[#53D29D] z-20" />
            <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-4 border-l-4 border-[#2BAEC8] z-20" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-[#6FE785] z-20" />
            
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 30px rgba(28, 182, 217, 0.2)',
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 50px rgba(28, 182, 217, 0.4)',
              }}
              transition={{ duration: 0.4 }}
            >
              <ImageWithFallback
                src={techImage}
                alt="Desenvolvimento de software moderno"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Tech grid overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(to right, #1CB6D9 1px, transparent 1px),
                  linear-gradient(to bottom, #1CB6D9 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }} />
            </motion.div>
            
            {/* Decorative tech elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-16 h-16 z-20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#1CB6D9" strokeWidth="2"/>
                <circle cx="50" cy="50" r="30" fill="none" stroke="#53D29D" strokeWidth="2"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            variants={containerVariants}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-block"
                variants={itemVariants}
              >
                <span className="font-semibold text-sm uppercase tracking-wider flynna-text-sky">Sobre a Flynna</span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Simplificamos o{" "}
                <span className="flynna-gradient-text">
                  complexo
                </span>
              </motion.h2>
              
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Unimos tecnologia e marketing em um só lugar, criando soluções integradas que transformam desafios em oportunidades.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nossa missão é ser a ponte entre ideias inovadoras e sua execução, oferecendo uma experiência completa e personalizada para cada cliente.
                </p>
              </motion.div>
            </div>

            {/* Stats or highlights with tech design */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className="space-y-2 p-4 rounded-xl border border-[#1CB6D9]/20 bg-gradient-to-br from-[#1CB6D9]/5 to-transparent relative overflow-hidden group"
                whileHover={{ y: -5, borderColor: "#1CB6D9" }}
                transition={{ duration: 0.3 }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#1CB6D9]/50 group-hover:border-[#1CB6D9] transition-colors" />
                
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#05308E] to-[#1CB6D9] relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 0 20px rgba(28, 182, 217, 0.3)',
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="font-semibold text-gray-900">Inovação</h3>
                <p className="text-sm text-gray-600">Soluções criativas e tecnológicas</p>
              </motion.div>
              
              <motion.div 
                className="space-y-2 p-4 rounded-xl border border-[#53D29D]/20 bg-gradient-to-br from-[#53D29D]/5 to-transparent relative overflow-hidden group"
                whileHover={{ y: -5, borderColor: "#53D29D" }}
                transition={{ duration: 0.3 }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#53D29D]/50 group-hover:border-[#53D29D] transition-colors" />
                
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#2BAEC8] to-[#53D29D] relative"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: '0 0 20px rgba(83, 210, 157, 0.3)',
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h3 className="font-semibold text-gray-900">Confiança</h3>
                <p className="text-sm text-gray-600">Resultados consistentes e duradouros</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}