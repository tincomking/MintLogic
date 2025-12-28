import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe, Leaf } from 'lucide-react';
import { Language, ContentMap } from '../types';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  content: ContentMap;
}

// MintLogic Logo Component - Single Leaf
export const MintLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Main Leaf (Foreground) */}
    <div className="relative z-10 bg-obsidian rounded-full p-0.5 border border-white/20 shadow-[0_0_15px_rgba(0,245,160,0.3)]">
         <Leaf size={24} className="text-white fill-geek-mint" strokeWidth={1.5} />
    </div>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ currentLang, setLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.nav.solutions, href: '#solutions' },
    { label: content.nav.technology, href: '#tech' },
    { label: content.nav.team, href: '#team' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-obsidian/70 backdrop-blur-md border-b border-white/5 shadow-lg shadow-geek-mint/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <MintLogo className="w-10 h-10 transition-transform group-hover:scale-110 duration-300" />
          <span className="text-white font-semibold text-xl tracking-tight group-hover:text-geek-mint transition-colors">
            {content.brandName}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-gray-300 hover:text-geek-mint text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
                <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                >
                    <Globe size={16} />
                    <span>{currentLang}</span>
                    <ChevronDown size={14} />
                </button>
                
                {isLangMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-xl backdrop-blur-xl">
                        {Object.values(Language).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => {
                                    setLang(lang);
                                    setIsLangMenuOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${currentLang === lang ? 'text-geek-mint' : 'text-gray-400'}`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:border-geek-mint/50 hover:text-geek-mint transition-all duration-300 glass-panel">
                {content.nav.contact}
            </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-obsidian border-b border-white/10 absolute w-full left-0 top-20 p-6 flex flex-col gap-6 shadow-2xl">
           {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-gray-300 hover:text-geek-mint text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-white/10 w-full my-2"></div>
          <div className="flex flex-wrap gap-2">
            {Object.values(Language).map((lang) => (
                <button
                    key={lang}
                    onClick={() => {
                        setLang(lang);
                    }}
                    className={`px-3 py-1 text-xs rounded-full border ${currentLang === lang ? 'border-geek-mint text-geek-mint' : 'border-white/10 text-gray-500'}`}
                >
                    {lang}
                </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;