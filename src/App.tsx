import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ValuesSection } from './components/ValuesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { StarryBackground } from './components/StarryBackground';

// Ensure proper component mounting and error boundaries
function App() {
  React.useEffect(() => {
    // Prevent any timing issues with component initialization
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background branco com grid (inicial) */}
      <AnimatedBackground />
      
      {/* Background azul com estrelas (aparece ao rolar) */}
      <StarryBackground />
      
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ValuesSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;