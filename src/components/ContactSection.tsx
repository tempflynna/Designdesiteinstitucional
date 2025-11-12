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
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-6 h-6 flynna-text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div>
                  <p className="font-semibold text-gray-900">E-mail</p>
                  <p className="text-gray-600">contato@flynna.com.br</p>
                </div>
              </motion.div>

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

            {/* Social Media */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="font-semibold text-gray-900">Siga o Grupo All Online</p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white flynna-icon-primary"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white flynna-icon-secondary"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white flynna-icon-accent"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              </div>
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
                        className="w-full text-white h-12 rounded-lg shadow-lg hover:shadow-xl flynna-gradient-bg relative overflow-hidden group"
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
