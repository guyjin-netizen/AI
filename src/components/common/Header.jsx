import React from 'react';
import { artistProfile } from '../../data/skills';

export const Header = ({ currentPath, onNavigate }) => {
  const getSubTitle = () => {
    switch (currentPath) {
      case 'animation-reels':
        return 'Animation Reels';
      case 'illustrations':
        return 'Illustrations';
      case 'about-artist':
        return 'About Artist';
      case 'showcase':
      default:
        return 'Showcase';
    }
  };

  const navItems = [
    { id: 'showcase', label: '精選作品', icon: 'auto_awesome' },
    { id: 'animation-reels', label: '動畫短片', icon: 'movie_creation' },
    { id: 'illustrations', label: '插畫草稿', icon: 'draw' },
    { id: 'about-artist', label: '關於藝術家', icon: 'account_circle' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.5)] border-b border-white/[0.06]">
      <div className="h-16 px-margin-mobile md:px-margin max-w-7xl mx-auto flex items-center justify-between gap-space-sm">
        {/* Brand / Logo */}
        <div 
          className="flex items-center gap-space-sm min-w-0 cursor-pointer group"
          onClick={() => onNavigate('showcase')}
        >
          <img 
            alt="Yi-ting Brand Logo" 
            className="h-8 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105" 
            src={artistProfile.brandLogo} 
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight truncate">
                Yi-ting
              </span>
              <span className="font-label-sm text-label-sm text-outline px-1.5 py-0.5 rounded bg-surface-container-high hidden sm:inline">
                黃翊庭
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-primary tracking-wide truncate">
              {getSubTitle()}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-container-lowest/60 p-1.5 rounded-full border border-white/[0.08]">
          {navItems.map((item) => {
            const isActive = currentPath === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-1.5 transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action: Mail CTA + Avatar */}
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            onClick={() => onNavigate('about-artist', 'contact-section')}
            className="h-10 px-3.5 sm:px-4 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center justify-center gap-1.5 hover:bg-secondary-container active:scale-95 transition-all shadow-[0_0_12px_rgba(245,158,11,0.2)]"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span className="whitespace-nowrap">聯絡</span>
          </button>
          
          <button
            onClick={() => onNavigate('about-artist')}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 hover:ring-2 hover:ring-primary-container transition-all"
            aria-label="關於藝術家"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
