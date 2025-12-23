import React from 'react';
import { ContentMap } from '../types';
import { MintLogo } from './Navbar';

interface FooterProps {
  content: ContentMap['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-sm z-10 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <MintLogo className="w-6 h-6" />
            <p className="text-gray-500 text-sm ml-2">{content.copyright}</p>
        </div>
        
        <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-geek-mint text-sm transition-colors">{content.privacy}</a>
            <a href="#" className="text-gray-500 hover:text-geek-mint text-sm transition-colors">{content.terms}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;