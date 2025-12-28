import React, { useEffect } from 'react';
import { X, BookOpen, ChevronRight, Layout, Zap, Target } from 'lucide-react';
import { Language } from '../types';
import { DOCS_CONTENT } from '../docsContent';

interface DocumentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const DocumentationModal: React.FC<DocumentationModalProps> = ({ isOpen, onClose, lang }) => {
  // Use English if the selected language is not yet fully localized in docs
  const doc = DOCS_CONTENT[lang] || DOCS_CONTENT[Language.EN];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-obsidian/90 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/10 animate-fade-in-up">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-geek-mint/10 flex items-center justify-center text-geek-mint border border-geek-mint/20">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">{doc.mainTitle}</h2>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">INTERNAL STRATEGY DOCUMENT</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="relative group">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-geek-mint/30 bg-geek-mint/5 flex items-center justify-center text-xs font-bold text-geek-mint">
                        0{idx + 1}
                    </div>
                    {idx !== doc.sections.length - 1 && <div className="w-px h-full bg-gradient-to-b from-geek-mint/20 to-transparent mt-2" />}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="md:hidden text-geek-mint text-sm">0{idx + 1}.</span>
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx} className="text-gray-400 leading-relaxed text-lg font-light">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Footer Call to Action */}
          <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 border border-white/5 mt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h4 className="text-white font-bold text-lg mb-2">Ready to transform your business?</h4>
                    <p className="text-gray-400 text-sm">Contact our strategy team for a customized Web3/AI roadmap.</p>
                </div>
                <button className="px-6 py-3 rounded-xl bg-geek-mint text-obsidian font-bold text-sm hover:scale-105 transition-transform">
                    Contact Strategy Lead
                </button>
            </div>
          </div>
        </div>

        {/* Progress bar at bottom */}
        <div className="h-1.5 w-full bg-white/5">
          <div className="h-full bg-gradient-to-r from-geek-mint to-emerald-blue w-full opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default DocumentationModal;