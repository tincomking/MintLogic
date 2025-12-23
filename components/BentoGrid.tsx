import React from 'react';
import { Cpu, Database, CheckCircle2, Globe, Workflow } from 'lucide-react';
import { ContentMap } from '../types';

interface BentoGridProps {
  content: ContentMap['bento'];
}

const BentoGrid: React.FC<BentoGridProps> = ({ content }) => {
  return (
    <section id="solutions" className="px-6 py-20 max-w-7xl mx-auto z-10 relative">
      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[minmax(350px,auto)]">
        
        {/* Card 1: Web3 - Left Side */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group animate-fade-in-up flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-geek-mint/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-geek-mint/20 transition-all duration-500" />
            
            <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-geek-mint shadow-lg shadow-geek-mint/5">
                    <Globe size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">{content.web3Title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{content.web3Desc}</p>
            </div>
            
            <div className="relative z-10 mt-10">
                <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-1.5 rounded-full text-sm font-mono border border-white/10 bg-white/5 text-gray-300 hover:border-geek-mint/30 transition-colors">Stablecoin Issuance</span>
                    <span className="px-4 py-1.5 rounded-full text-sm font-mono border border-white/10 bg-white/5 text-gray-300 hover:border-geek-mint/30 transition-colors">Cross-border Payments</span>
                    <span className="px-4 py-1.5 rounded-full text-sm font-mono border border-white/10 bg-white/5 text-gray-300 hover:border-geek-mint/30 transition-colors">Compliance Ops</span>
                </div>
            </div>
        </div>

        {/* Card 2: AI - Right Side */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group animate-fade-in-up flex flex-col justify-between" style={{ animationDelay: '100ms' }}>
            {/* Decorative background grid line */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-blue/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-emerald-blue/20 transition-all duration-500" />
            
            <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-emerald-blue shadow-lg shadow-emerald-blue/5">
                    <Cpu size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">{content.aiTitle}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{content.aiDesc}</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.aiFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5 hover:border-emerald-blue/30 transition-colors">
                        <CheckCircle2 size={16} className="text-emerald-blue" />
                        <span className="text-gray-200 font-medium text-sm">{feature}</span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;