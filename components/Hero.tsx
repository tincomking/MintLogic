import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { ContentMap } from '../types';

interface HeroProps {
  content: ContentMap['hero'];
  onOpenDocs: () => void;
}

const Hero: React.FC<HeroProps> = ({ content, onOpenDocs }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-blue/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Badge */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-geek-mint/30 bg-geek-mint/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,245,160,0.15)]">
            <span className="w-2 h-2 rounded-full bg-geek-mint animate-pulse"></span>
            <span className="text-geek-mint text-xs md:text-sm font-semibold tracking-wide uppercase">
                {content.badge}
            </span>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <span className="block text-white">
          {content.titleLine1}
        </span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-geek-mint to-emerald-blue italic pr-2">
          {content.titleLine2}
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        {content.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <button 
          onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 rounded-xl bg-white text-obsidian font-bold text-base hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10 group"
        >
          {content.primaryBtn}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button 
          onClick={onOpenDocs}
          className="px-8 py-4 rounded-xl glass-panel text-white font-semibold text-base hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
        >
          <FileText className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          {content.secondaryBtn}
        </button>
      </div>
    </section>
  );
};

export default Hero;