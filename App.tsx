import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';
import DocumentationModal from './components/DocumentationModal';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>(Language.EN);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const content = TRANSLATIONS[currentLang];

  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-geek-mint selection:text-obsidian relative bg-logic-grid">
      
      {/* Visual Background Layer */}
      <NeuralBackground />
      
      {/* Sticky Navigation */}
      <Navbar 
        currentLang={currentLang} 
        setLang={setCurrentLang} 
        content={content}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          content={content.hero} 
          onOpenDocs={() => setIsDocsOpen(true)}
        />

        {/* Feature Grid */}
        <BentoGrid content={content.bento} />

        {/* Team Section */}
        <TeamSection content={content.team} />
      </main>

      {/* Footer */}
      <Footer content={content.footer} />

      {/* Overlays */}
      <DocumentationModal 
        isOpen={isDocsOpen} 
        onClose={() => setIsDocsOpen(false)} 
        lang={currentLang}
      />
      
    </div>
  );
};

export default App;