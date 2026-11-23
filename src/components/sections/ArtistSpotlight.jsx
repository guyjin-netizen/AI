import React from 'react';
import { artistProfile, studioMoodStills } from '../../data/skills';

export const ArtistSpotlight = () => {
  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full pt-space-md flex flex-col gap-space-lg">
      {/* Spotlight Card */}
      <div className="relative w-full rounded-2xl bg-surface-container overflow-hidden shadow-2xl border border-white/[0.08]">
        {/* Ambient Studio Glow */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-secondary-container/15 blur-2xl pointer-events-none"></div>

        <div className="relative p-space-md md:p-space-lg flex flex-col gap-space-md">
          {/* Visual Header: Avatar & Status */}
          <div className="flex items-center gap-space-md flex-wrap">
            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-container-high shadow-lg border-2 border-primary/30">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Portrait of Yi-ting Huang" 
                  src={artistProfile.avatar} 
                />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-surface-container-lowest flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-primary-container animate-ping absolute opacity-75"></span>
                <span className="w-4 h-4 rounded-full bg-primary-container relative"></span>
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-primary tracking-wider uppercase">
                Artist Profile
              </span>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight truncate">
                {artistProfile.name}
              </h1>
              <span className="font-body-md text-body-md text-on-surface-variant font-medium">
                {artistProfile.enName}
              </span>
            </div>
          </div>

          {/* Role Pills / Tags */}
          <div className="flex flex-wrap gap-2">
            {artistProfile.roles.map((role, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-label-sm font-label-sm border border-white/[0.06]"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Quote Capsule */}
          <div className="p-3.5 rounded-xl bg-surface-container-lowest/80 backdrop-blur-sm flex items-start gap-3 border border-white/[0.04]">
            <span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
            <p className="font-label-md md:font-headline-sm text-label-md md:text-headline-sm text-primary italic leading-relaxed">
              {artistProfile.quote}
            </p>
          </div>

          {/* Bio Paragraphs */}
          <div className="flex flex-col gap-space-xs text-on-surface-variant font-body-md text-body-md leading-relaxed">
            {artistProfile.bio.map((p, idx) => (
              <p key={idx} className={idx === 1 ? "text-on-surface font-normal" : ""}>
                {p}
              </p>
            ))}
          </div>

          {/* Studio Milestone Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-space-xs">
            <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-white/[0.04]">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-[18px]">movie</span>
                <span className="font-label-sm text-label-sm">代表主製作</span>
              </div>
              <span className="font-body-md text-body-md text-on-surface font-semibold truncate">
                《積木 ToyBrick》
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                原創短篇獨立動畫
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1 border border-white/[0.04]">
              <div className="flex items-center gap-1.5 text-tertiary">
                <span className="material-symbols-outlined text-[18px]">animation</span>
                <span className="font-label-sm text-label-sm">專案主編劇</span>
              </div>
              <span className="font-body-md text-body-md text-on-surface font-semibold truncate">
                《嘿！這次是我覺得》
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                動態分鏡與關鍵格
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Artwork Moodstrip */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
            Atmospheric Palette
          </span>
          <span className="font-label-sm text-label-sm text-primary">2D Studio Stills</span>
        </div>
        <div className="grid grid-cols-3 gap-3 h-28 md:h-36">
          {studioMoodStills.map((still, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden bg-surface-container-high group border border-white/[0.06]">
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt={still.title} 
                src={still.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent flex items-end p-2 md:p-3">
                <span className="font-label-sm md:font-label-md text-label-sm md:text-label-md text-on-surface font-medium truncate">
                  {still.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
