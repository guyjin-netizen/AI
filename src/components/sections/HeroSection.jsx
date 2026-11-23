import React from 'react';
import { artistProfile } from '../../data/skills';

export const HeroSection = ({ onNavigate }) => {
  return (
    <section className="relative w-full px-margin-mobile md:px-margin pt-space-lg pb-space-xl flex flex-col gap-space-lg overflow-hidden max-w-7xl mx-auto">
      {/* Atmospheric Ambient Glows */}
      <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-primary-container/15 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>

      {/* Timeline Tape Reel Accent */}
      <div className="flex items-center gap-space-xs overflow-hidden opacity-50 select-none">
        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-outline tracking-widest shrink-0 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          FR-24.00 FPS / SEQ.01
        </div>
        <div className="h-px flex-1 bg-surface-variant/40"></div>
        <div className="flex items-center gap-1 shrink-0 font-label-sm text-label-sm text-outline">
          <span>00:01:24</span>
          <span className="material-symbols-outlined text-[14px]">cloud_download</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col gap-space-sm relative z-10 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1 shadow-sm border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            多媒體設計系
          </span>
          <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-white/[0.06]">
            《積木 ToyBrick》主製作
          </span>
        </div>

        <div className="flex flex-col">
          <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight font-bold">
            {artistProfile.name}
          </h1>
          <p className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-primary font-semibold mt-1">
            {artistProfile.tagline}
          </p>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-1">
          曾任獨立動畫專案《積木 ToyBrick》與《嘿！這次是我覺得》主製作，擅長厚塗油畫感、日式動漫插畫、歐美卡通人物設計與流暢分鏡設計。
        </p>

        {/* Skill Tech Pills */}
        <div className="flex flex-wrap gap-2 pt-space-xs">
          <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm flex items-center gap-1.5 border border-white/[0.06]">
            <span className="material-symbols-outlined text-primary text-[14px]">brush</span>
            厚塗油畫
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm flex items-center gap-1.5 border border-white/[0.06]">
            <span className="material-symbols-outlined text-secondary-container text-[14px]">animation</span>
            2D 動畫
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm flex items-center gap-1.5 border border-white/[0.06]">
            <span className="material-symbols-outlined text-outline text-[14px]">layers</span>
            Clip Studio Paint
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm flex items-center gap-1.5 border border-white/[0.06]">
            <span className="material-symbols-outlined text-outline text-[14px]">movie_edit</span>
            Adobe Animate
          </span>
        </div>
      </div>

      {/* Dual CTAs */}
      <div className="flex flex-col sm:flex-row gap-space-sm relative z-10">
        <a
          href="#featured-gallery"
          className="w-full sm:w-auto h-12 px-6 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center justify-center gap-2 glow-amber hover:bg-secondary-container active:scale-[0.98] transition-all font-semibold"
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            play_circle
          </span>
          <span>查看精選作品 (Explore Works)</span>
        </a>
        <button
          onClick={() => onNavigate('about-artist', 'contact-section')}
          className="w-full sm:w-auto h-12 px-6 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-bright active:scale-[0.98] transition-all shadow-sm border border-white/[0.06]"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
          <span>聯絡合作 (Contact)</span>
        </button>
      </div>

      {/* Hero Visual Card (ToyBrick Teaser Stills) */}
      <div 
        className="relative w-full rounded-2xl overflow-hidden bg-surface-container-low shadow-2xl border border-white/[0.08] cursor-pointer group"
        onClick={() => onNavigate('animation-reels')}
      >
        <div className="relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Cinematic animation keyframe from ToyBrick animated short" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnbNQS8V2RJPfNswJNGhwRsQT3WSXufZ9X8tsGf48cap9uKdwvt36nnbYAzY0ssDola8ZM_F6-3sqND8Q_TD_51rBcE3geoAoCKj9ozoHYV1spcd0Lj4COyx-DpDLlj1GoabvMDEjFovsg2aE_Xcx9IaH5-kV2qo15ri_yQmOHfS-lUL340T8SSnKFKZbf1sG8HDjO0nR6hef6F2m4veucr39H2gxWjzLSq2xqUzs" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
          
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary font-label-sm text-label-sm flex items-center gap-1.5 shadow-md border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            精選主製作作品
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between flex-wrap gap-2">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Independent Short Film</span>
              <span className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface font-bold">《積木 ToyBrick》</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-surface-container-high/90 text-on-surface font-label-sm text-label-sm shadow-sm backdrop-blur-sm">
                2024 Finalist
              </span>
              <span className="px-3 py-1 rounded-lg bg-primary-container text-on-primary-container font-label-sm text-label-sm flex items-center gap-1">
                查看研析
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
