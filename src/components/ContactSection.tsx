import React from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  }, []);

  const handleFocus = React.useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = '#1CB6D9';
  }, []);

  const handleBlur = React.useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgb(229, 231, 235)';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={ref} id="contato" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="font-semibold text-sm uppercase tracking-wider flynna-text-sky">Entre em Contato</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Vamos transformar sua{" "}
                <span className="flynna-gradient-text">
                  ideia
                </span>{" "}
                em realidade?
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Estamos aqui para ouvir suas necessidades e criar soluções personalizadas que impulsionem seu negócio.
              </p>
            </div>

            {/* Contact Info */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flynna-badge-bg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6 text-[#2BAEC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-900">Telefone</p>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form with Tech Design */}
          <motion.div variants={itemVariants} className="relative">
            {/* Tech corner frames */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-[#1CB6D9] z-10" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-[#53D29D] z-10" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-[#2BAEC8] z-10" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-[#6FE785] z-10" />
            
            <Card className="border-0 relative" style={{
              boxShadow: '0 0 40px rgba(28, 182, 217, 0.15)',
            }}>
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="name">Nome completo</Label>
                    <Input 
                      id="name"
                      placeholder="Seu nome"
                      className="h-12 border-gray-200 focus:ring-opacity-20"
                      style={{ 
                        '--tw-ring-color': '#1CB6D9',
                        borderColor: 'inherit'
                      } as React.CSSProperties}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="h-12 border-gray-200 focus:ring-opacity-20"
                      style={{ 
                        '--tw-ring-color': '#1CB6D9',
                        borderColor: 'inherit'
                      } as React.CSSProperties}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="company">Empresa (opcional)</Label>
                    <Input 
                      id="company"
                      placeholder="Nome da sua empresa"
                      className="h-12 border-gray-200 focus:ring-opacity-20"
                      style={{ 
                        '--tw-ring-color': '#1CB6D9',
                        borderColor: 'inherit'
                      } as React.CSSProperties}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea 
                      id="message"
                      placeholder="Conte-nos sobre seu projeto ou como podemos ajudar..."
                      rows={5}
                      className="border-gray-200 focus:ring-opacity-20 resize-none"
                      style={{ 
                        '--tw-ring-color': '#1CB6D9',
                        borderColor: 'inherit'
                      } as React.CSSProperties}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit"
                        className="cursor-pointer w-full text-white h-12 rounded-lg shadow-lg hover:shadow-xl flynna-gradient-bg relative overflow-hidden group"
                      >
                        <span className="relative z-10">Enviar mensagem</span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.p 
                    className="text-sm text-gray-500 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Responderemos em até 24 horas úteis
                  </motion.p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
