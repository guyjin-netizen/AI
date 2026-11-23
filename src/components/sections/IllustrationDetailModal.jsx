import React, { useEffect } from 'react';

export const IllustrationDetailModal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl flex flex-col justify-end md:justify-center p-margin-mobile md:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-surface-container rounded-2xl max-w-2xl w-full mx-auto max-h-[85vh] overflow-y-auto flex flex-col shadow-2xl border border-white/[0.1] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Preview */}
        <div className="relative w-full aspect-[16/10] bg-surface-container-high overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            alt={item.alt} 
            src={item.modalImage || item.image} 
          />
          <button 
            aria-label="關閉視窗"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/80 text-on-surface hover:text-primary flex items-center justify-center shadow-lg active:scale-95 transition-all"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm border border-primary/20">
            {item.categoryLabel}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-space-lg flex flex-col gap-space-md">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                {item.title} 詳細設定
              </h3>
              <p className="font-label-sm text-label-sm text-outline mt-0.5">
                製作時程：{item.hours} ｜ 數位手繪概念作品
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary border border-primary/30 font-label-sm text-label-sm font-semibold">
              HD 4K 規格
            </span>
          </div>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {item.description}
          </p>

          {/* Palette Swatches */}
          {item.palette && (
            <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-2 border border-white/[0.04]">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                畫面主要色相票 (Color Harmonies)
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {item.palette.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container border border-white/[0.06]">
                    <span 
                      className="w-4 h-4 rounded-full border border-black/30 shadow-sm shrink-0" 
                      style={{ backgroundColor: color }}
                    ></span>
                    <span className="font-mono text-xs text-on-surface-variant uppercase">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Details Grid */}
          {item.techDetails && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.techDetails.map((detail, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-surface-container-low border border-white/[0.04] flex flex-col gap-0.5">
                  <span className="font-label-sm text-label-sm text-primary font-medium">{detail.label}</span>
                  <span className="font-body-sm text-body-sm text-on-surface">{detail.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Layer Breakdown */}
          {item.layerBreakdown && (
            <div className="p-3 rounded-xl bg-surface-container-high/60 border border-white/[0.06] flex items-start gap-2.5">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">layers</span>
              <div className="flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm text-on-surface font-semibold">圖層結構與後製筆記</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.layerBreakdown}
                </p>
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-all active:scale-95"
            >
              關閉預覽
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
