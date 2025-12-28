import React from 'react';
import { ContentMap } from '../types';

interface TeamSectionProps {
  content: ContentMap['team'];
}

const TeamSection: React.FC<TeamSectionProps> = ({ content }) => {
  return (
    <section id="team" className="px-6 py-24 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-20 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{content.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-geek-mint to-emerald-blue mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {content.members.map((member, index) => (
          <div 
            key={index} 
            className="group glass-panel rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 animate-fade-in-up border border-white/5 hover:border-geek-mint/20"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative w-36 h-36 mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-geek-mint to-emerald-blue blur-lg opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="w-full h-full rounded-full overflow-hidden p-1 bg-gradient-to-tr from-white/10 to-transparent relative z-10">
                    <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full rounded-full object-cover border-2 border-obsidian grayscale contrast-125 brightness-110 group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 bg-[#0a0a0a]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}&backgroundColor=030303`;
                        }}
                    />
                </div>
            </div>
            
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-geek-mint transition-colors duration-300">{member.name}</h3>
                <span className="inline-block px-3 py-1 rounded-md bg-white/5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-blue mb-6 border border-white/10">{member.role}</span>
                <p className="text-sm text-gray-400 leading-relaxed font-light line-clamp-6 group-hover:line-clamp-none transition-all duration-500">
                    {member.bio}
                </p>
            </div>
            
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 border-t-2 border-r-2 border-geek-mint/30 rounded-tr-xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;