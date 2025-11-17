import { FLynnaLogo } from "./FLynnaLogo";
import { motion } from "motion/react";
import { Linkedin, Instagram, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative z-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <FLynnaLogo showByline={false} size="lg" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Hub de inovação do Grupo All Online. Transformamos ideias em soluções que impulsionam o futuro.
            </p>
          </motion.div>

          {/* Empty div */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-2">
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              <motion.a
                href="#inicio"
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#inicio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Início
              </motion.a>
              <motion.a
                href="#sobre"
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Sobre
              </motion.a>
              <motion.a
                href="#solucoes"
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#solucoes')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Soluções
              </motion.a>
              <motion.a
                target="_blank"
                href="https://www.flynna.marketing"
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
              >
                Marketing
              </motion.a>
              {/* <motion.a
                href="#contato"
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contato
              </motion.a> */}
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 Flynna - Grupo All Online. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4">
            <motion.a
              href="https://www.instagram.com/flynna_all/"
              target="_blank"
              className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zM18.5 6.5a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>

            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/flynna"
              target="_blank"
              className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}