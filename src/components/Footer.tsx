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
                href="#contato" 
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contato
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
              >
                Política de Privacidade
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                whileHover={{ x: 3 }}
              >
                Termos de Uso
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg">Siga o Grupo All Online</h3>
            <div className="flex space-x-3">
              <motion.a 
                href="https://www.linkedin.com/company/flynna/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1CB6D9] rounded-lg flex items-center justify-center text-white hover:bg-[#05308E] transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 20px rgba(28, 182, 217, 0.3)',
                }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#53D29D] rounded-lg flex items-center justify-center text-white hover:bg-[#2BAEC8] transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 20px rgba(83, 210, 157, 0.3)',
                }}
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/flynna_all/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#6FE785] rounded-lg flex items-center justify-center text-white hover:bg-[#53D29D] transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 20px rgba(111, 231, 133, 0.3)',
                }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
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
            © 2024 Flynna - Grupo All Online. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4">
            <motion.a 
              href="#" 
              className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}