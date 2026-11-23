import React from 'react';

export const BottomNav = ({ currentPath, onNavigate }) => {
  const tabs = [
    { id: 'showcase', label: '精選作品', icon: 'auto_awesome' },
    { id: 'animation-reels', label: '動畫短片', icon: 'movie_creation' },
    { id: 'illustrations', label: '插畫草稿', icon: 'draw' },
    { id: 'about-artist', label: '關於藝術家', icon: 'account_circle' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl border-t border-white/[0.08] shadow-[0_-2px_16px_rgba(0,0,0,0.6)]">
      <div className="flex justify-around items-center h-16 px-space-xs max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = currentPath === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors ${
                isActive
                  ? 'text-primary-container font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span 
                className="material-symbols-outlined text-[22px]"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              <span className="font-label-sm text-label-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
