import React, { useState } from 'react';
import { projectsData } from '../../data/projects';

export const FeaturedWorksSection = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: '全部 (All)' },
    { id: 'animation', label: '2D 動畫 (Animation)' },
    { id: 'oil', label: '厚塗插畫 (Oil)' },
    { id: 'character', label: '人物設計 (Character)' },
    { id: 'storyboard', label: '分鏡腳本 (Storyboard)' },
  ];

  const filteredProjects = projectsData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="w-full px-margin-mobile md:px-margin pt-space-lg pb-space-xl flex flex-col gap-space-md max-w-7xl mx-auto" id="featured-gallery">
      {/* Section Title & Filter Pills */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
              精選作品展示
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-outline">Featured 05</span>
        </div>

        {/* Filter Pill Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md shrink-0 flex items-center gap-1.5 transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-md'
                    : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright'
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container"></span>}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {filteredProjects.map((project) => {
          const isAnimation = project.category === 'animation' || project.category === 'storyboard';
          const targetPath = isAnimation ? 'animation-reels' : 'illustrations';
          const actionText = isAnimation 
            ? (project.category === 'storyboard' ? '播放 Animatic' : '查看分鏡與影片') 
            : (project.category === 'character' ? '查看設定表' : '查看高畫質細節');

          return (
            <article 
              key={project.id}
              className="work-item w-full rounded-2xl bg-surface-container-low border border-white/[0.08] overflow-hidden shadow-lg flex flex-col group transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              <div 
                className="relative aspect-video w-full overflow-hidden cursor-pointer"
                onClick={() => onNavigate(targetPath)}
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt={project.alt} 
                  src={project.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold shadow-md">
                    {project.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm">
                    {project.year || project.meta}
                  </span>
                </div>

                {isAnimation && (
                  <button 
                    aria-label="Play Reel Preview" 
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-surface-container-highest/90 backdrop-blur-md text-primary flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container shadow-md transition-all active:scale-90"
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('animation-reels');
                    }}
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </button>
                )}

                {project.duration && (
                  <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-[14px]">timer</span>
                    {project.duration}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col gap-2.5 flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-label-sm text-label-sm text-primary shrink-0">
                      {project.subtitle}
                    </span>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/[0.04] gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-sm text-label-sm">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => onNavigate(targetPath)}
                    className="font-label-md text-label-md text-primary hover:text-secondary flex items-center gap-1 transition-colors"
                  >
                    <span>{actionText}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
