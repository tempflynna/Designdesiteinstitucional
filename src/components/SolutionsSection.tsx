import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { TechCard } from "./TechCard";

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const solutions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Software Inteligente",
      description: "Desenvolvemos soluções tecnológicas personalizadas que automatizam processos e potencializam resultados.",
      gradient: "flynna-primary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Estratégias de Marketing Inovadoras",
      description: "Criamos campanhas digitais eficazes que conectam marcas aos seus públicos de forma autêntica e impactante.",
      gradient: "flynna-secondary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z" />
        </svg>
      ),
      title: "Experiências Integradas",
      description: "Unimos tecnologia e criatividade para criar experiências digitais memoráveis e resultados mensuráveis.",
      gradient: "flynna-accent"
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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} id="solucoes" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div className="inline-block">
            <span className="font-semibold text-sm uppercase tracking-wider flynna-text-sky">Nossas Soluções</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Transformamos{" "}
            <span className="flynna-gradient-text">
              desafios
            </span>{" "}
            em oportunidades
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um ecossistema completo de soluções integradas para impulsionar seu negócio no mundo digital.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {solutions.map((solution, index) => {
            const glowColor = solution.gradient === 'flynna-primary' ? '#1CB6D9' :
                             solution.gradient === 'flynna-secondary' ? '#53D29D' : '#2BAEC8';
            
            return (
              <TechCard key={index} glowColor={glowColor} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Icon with tech border */}
                  <div className="relative inline-block">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${
                        solution.gradient === 'flynna-primary' ? 'flynna-icon-primary' :
                        solution.gradient === 'flynna-secondary' ? 'flynna-icon-secondary' : 'flynna-icon-accent'
                      }`}
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{ duration: 0.4 }}
                      style={{
                        boxShadow: `0 0 20px ${glowColor}40`,
                      }}
                    >
                      {solution.icon}
                    </motion.div>
                    
                    {/* Tech corner accent */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 opacity-50"
                         style={{ borderColor: glowColor }} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:flynna-text-sky transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Tech detail line */}
                    <div className="pt-2">
                      <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
                           style={{ color: glowColor }} />
                    </div>
                  </div>
                </motion.div>
              </TechCard>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* <motion.button 
            className="text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl flynna-gradient-bg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Descubra como podemos ajudar você</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}