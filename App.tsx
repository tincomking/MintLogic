import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(Language.EN);
  const content = TRANSLATIONS[currentLang];

  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-geek-mint selection:text-obsidian relative bg-logic-grid">
      
      {/* Visual Background Layer */}
      <NeuralBackground />
      
      {/* Sticky Navigation */}
      <Navbar 
        currentLang={currentLang} 
        setLang={setCurrentLang} 
        content={content.nav}
      />

      <main>
        {/* Hero Section */}
        <Hero content={content.hero} />

        {/* Feature Grid */}
        <BentoGrid content={content.bento} />

        {/* Team Section */}
        <TeamSection content={content.team} />
      </main>

      {/* Footer */}
      <Footer content={content.footer} />
      
    </div>
  );
};

export default App;