import React, { useState } from 'react';
import { illustrationsData } from '../../data/illustrations';
import { IllustrationDetailModal } from './IllustrationDetailModal';

export const IllustrationGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filterTabs = [
    { id: 'all', label: '全部 (All)' },
    { id: 'impasto', label: '厚塗油畫風' },
    { id: 'anime', label: '日式動漫' },
    { id: 'cartoon', label: '歐美卡通' },
    { id: 'concept', label: '概念美術' },
  ];

  const filteredItems = illustrationsData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full flex flex-col gap-space-lg">
      {/* Header Hub */}
      <div className="pt-space-md flex flex-col gap-space-md">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 text-primary">
              <span className="material-symbols-outlined text-[18px]">palette</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                Visual Arts & Concept
              </span>
            </div>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-semibold tracking-tight mt-0.5">
              2D 插畫與角色設計
            </h1>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm border border-white/[0.06]">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span>6 件精選作品</span>
          </div>
        </div>

        {/* Artist Quote */}
        <div className="p-space-md rounded-2xl bg-surface-container-low flex items-start gap-space-sm shadow-sm relative overflow-hidden border border-white/[0.06]">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary/10 pointer-events-none blur-xl"></div>
          <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
            format_quote
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
            「用光影雕琢呼吸的厚度，藉筆觸留存角色的靈魂脈動。每一幅畫稿都是未完電影的第一個分鏡。」
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`h-10 px-4 rounded-full font-label-md text-label-md shrink-0 flex items-center gap-1.5 transition-all active:scale-95 ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-md'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container"></span>}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Cards Stream */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {filteredItems.map((item) => (
          <article 
            key={item.id}
            className={`gallery-card flex flex-col rounded-2xl bg-surface-container-low border border-white/[0.08] overflow-hidden shadow-lg group transition-all duration-300 hover:border-primary/40 hover:shadow-2xl ${
              item.hero ? 'md:col-span-2' : ''
            }`}
          >
            <div 
              className={`relative w-full ${item.hero ? 'aspect-[16/9]' : 'aspect-[4/3]'} bg-surface-container-high overflow-hidden cursor-pointer`}
              onClick={() => setSelectedItem(item)}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={item.alt} 
                src={item.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-container-lowest/85 backdrop-blur-md text-primary font-label-sm text-label-sm flex items-center gap-1.5 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                {item.categoryLabel}
              </div>

              <button 
                aria-label="放大檢視" 
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg active:scale-90 transition-transform hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(item);
                }}
              >
                <span className="material-symbols-outlined text-[20px]">zoom_in</span>
              </button>

              <div className="absolute bottom-3 left-3 right-16 flex items-center gap-2">
                <span className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface font-semibold truncate">
                  {item.title}
                </span>
                <span className="font-label-sm text-label-sm text-outline px-2 py-0.5 rounded bg-surface-container-high/90 shrink-0 font-mono">
                  {item.hours}
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-space-sm flex-1 justify-between">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] gap-2 flex-wrap">
                {item.palette && (
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-outline">主要色票</span>
                    <div className="flex items-center -space-x-1.5">
                      {item.palette.map((color, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="w-5 h-5 rounded-full border border-black/40 shadow-sm"
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  </div>
                )}

                <button 
                  className="text-primary hover:text-secondary font-label-md text-label-md flex items-center gap-1 transition-colors ml-auto"
                  onClick={() => setSelectedItem(item)}
                >
                  <span>探索設定</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <IllustrationDetailModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
};
