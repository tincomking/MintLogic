import React from 'react';
import { ContentMap } from '../types';

interface TeamSectionProps {
  content: ContentMap['team'];
}

const TeamSection: React.FC<TeamSectionProps> = ({ content }) => {
  return (
    <section id="team" className="px-6 py-20 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{content.title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-geek-mint to-emerald-blue mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {content.members.map((member, index) => (
          <div 
            key={index} 
            className="group glass-panel rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative w-32 h-32 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-geek-mint to-emerald-blue blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover border-2 border-white/10 relative z-10 group-hover:border-geek-mint/50 transition-colors grayscale group-hover:grayscale-0 duration-500"
                />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-blue mb-4">{member.role}</span>
            <p className="text-sm text-gray-400 leading-relaxed">
                {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;