import { Button } from "./ui/button";
import { FLynnaLogo } from "./FLynnaLogo";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.95)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 1px 2px rgba(0, 0, 0, 0.05)", "0px 4px 12px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-100"
        style={{
          backgroundColor: headerBg,
          boxShadow: headerShadow,
        }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FLynnaLogo showByline={false} size="lg" />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:flynna-text-sky transition-colors cursor-pointer relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 flynna-gradient-bg group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <Button 
                  className="text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 flynna-gradient-bg relative overflow-hidden group"
                >
                  <span className="relative z-10">Fale Conosco</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
                <a
                  href="https://www.instagram.com/flynna_all/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border-2 flynna-border-sky hover:flynna-gradient-bg hover:border-transparent transition-all transform hover:scale-105 group"
                >
                  <Instagram className="w-5 h-5 flynna-text-sky group-hover:text-white transition-colors" />
                </a>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className="w-full h-0.5 bg-gray-900 block"
                  animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-900 block"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-gray-900 block"
                  animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 bg-white z-40 md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-2xl font-semibold text-gray-900 hover:flynna-text-sky transition-colors"
              initial={{ opacity: 0, x: 50 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }
              }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <Button 
              className="text-white px-8 py-3 rounded-lg flynna-gradient-bg"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </Button>
            <a
              href="https://www.instagram.com/flynna_all/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border-2 flynna-border-sky hover:flynna-gradient-bg hover:border-transparent transition-all group"
              onClick={() => setIsOpen(false)}
            >
              <Instagram className="w-6 h-6 flynna-text-sky group-hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}