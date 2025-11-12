import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Talento",
      description: "Equipe multidisciplinar com expertise em tecnologia e marketing digital"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Tecnologia",
      description: "Ferramentas e plataformas de última geração para soluções escaláveis"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Insights de Mercado",
      description: "Análise profunda de dados para estratégias baseadas em evidências"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const pillarVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-10 w-64 h-64 opacity-15 rounded-full blur-3xl flynna-floating-element-1"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-80 h-80 opacity-10 rounded-full blur-3xl flynna-floating-element-2"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Quote Section */}
        <motion.div 
          className="text-center space-y-8 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div className="space-y-6">
            <div className="inline-block">
              <span className="font-semibold text-sm uppercase tracking-wider flynna-text-sky">Nosso Propósito</span>
            </div>
            
            <blockquote className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              "Inovação não é{" "}
              <motion.span 
                className="flynna-gradient-text inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                destino
              </motion.span>
              , é{" "}
              <motion.span 
                className="flynna-gradient-text inline-block"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                jornada
              </motion.span>
              ."
            </blockquote>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Acreditamos que cada projeto é uma oportunidade de criar algo extraordinário e duradouro.
            </p>
          </div>
        </motion.div>

        {/* Pillars Grid with Tech Design */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              variants={pillarVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group text-center space-y-6 p-8 rounded-2xl border border-gray-100 hover:border-[#1CB6D9]/30 bg-white relative overflow-hidden transition-all duration-300"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* Tech corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#1CB6D9]/0 group-hover:border-[#1CB6D9] transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#53D29D]/0 group-hover:border-[#53D29D] transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#2BAEC8]/0 group-hover:border-[#2BAEC8] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#6FE785]/0 group-hover:border-[#6FE785] transition-colors duration-300" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1CB6D9]/0 via-transparent to-[#53D29D]/0 group-hover:from-[#1CB6D9]/5 group-hover:to-[#53D29D]/5 transition-all duration-300" />
              
              {/* Icon */}
              <motion.div 
                className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#1CB6D9]/10 to-[#53D29D]/10 flynna-text-sky border border-[#1CB6D9]/20 relative z-10"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  boxShadow: '0 0 30px rgba(28, 182, 217, 0.4)',
                }}
                transition={{ duration: 0.4 }}
              >
                {pillar.icon}
                
                {/* Corner detail */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#1CB6D9]" />
              </motion.div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-gray-900"
                  whileHover={{
                    color: "#1CB6D9",
                    transition: { duration: 0.3 }
                  }}
                >
                  {pillar.title}
                </motion.h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
                
                {/* Tech accent line */}
                <div className="pt-2 flex justify-center">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#1CB6D9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Pronto para transformar sua visão em realidade?
          </p>
          <motion.button 
            className="text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl flynna-gradient-bg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Inicie sua jornada conosco</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}