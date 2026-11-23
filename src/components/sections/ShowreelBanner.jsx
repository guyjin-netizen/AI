import React from 'react';

export const ShowreelBanner = ({ onNavigate }) => {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-md max-w-7xl mx-auto">
      <div className="relative w-full rounded-2xl overflow-hidden p-6 md:p-8 bg-gradient-to-br from-surface-container via-surface-container-low to-surface-container-lowest border border-white/[0.08] shadow-2xl flex flex-col gap-4">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>

        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm flex items-center gap-1.5 border border-primary/30">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            2024 年度動畫秀帶
          </span>
          <span className="font-label-sm text-label-sm text-outline font-mono">01:45 Full HD</span>
        </div>

        <div className="flex flex-col gap-1 max-w-2xl">
          <h3 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface font-bold">
            一覽 2D 動畫剪輯精華
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            收錄《積木 ToyBrick》、《嘿！這次是我覺得》與個人原創動畫片段、分鏡連環及角色動作循環。
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2 flex-wrap">
          <button 
            onClick={() => onNavigate('animation-reels')}
            className="h-11 px-6 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold flex items-center justify-center gap-2 hover:bg-secondary-container transition-all glow-amber active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              play_arrow
            </span>
            <span>立即觀看 Showreel</span>
          </button>
          
          <button 
            onClick={() => onNavigate('about-artist')}
            className="h-11 px-5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 hover:bg-surface-bright transition-all border border-white/[0.06] active:scale-95"
          >
            <span>關於藝術家</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
};
