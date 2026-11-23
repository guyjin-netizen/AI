import React, { useState } from 'react';
import { showreelChapters } from '../../data/projects';

export const ReelPlayerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(showreelChapters[0]);
  const [progress, setProgress] = useState('25%');

  const handleSelectChapter = (chapter) => {
    setCurrentChapter(chapter);
    setProgress(chapter.percent);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full">
      {/* Title & Narrative Subheading */}
      <div className="pt-space-md pb-space-md flex flex-col gap-space-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-4 bg-primary-container rounded-full"></span>
          <span className="font-label-sm text-label-sm text-primary tracking-wider uppercase">
            Case Studies & Reel
          </span>
        </div>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
          動畫專案與精華影片
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-3xl">
          收錄獨立主導之動畫短片、角色動態分析與原創美術工程。從分鏡構思到後期光影合成的完整製程筆記。
        </p>
      </div>

      {/* Interactive 2024 Showreel Player Interface */}
      <div className="w-full bg-surface-container rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08] flex flex-col">
        {/* Player Viewport */}
        <div className="relative w-full aspect-video bg-surface-container-lowest overflow-hidden group">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5F-GuYmI87q77TZVKq-UJTbWhz68p3QLRxjKypnpjG76sswS1hIWoHlc43GM3mitkY4NtZOYM9NSI72c1mZqNW27U4BdwIrmL9-cB0S7RGutiBr9OJdRwTh55TlIxg7PlY6daGHZoWoQvMigUl1A_TBUxPEMDNszWba1axT0PT8RzesDt5oOFyLbpCnaArordjd7epUGy8MBGOxsi6WUBjnn7iB8mbyq3AeM0mbE')"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>

          {/* Badges on Player */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded bg-surface-container-highest/90 text-primary-container font-label-sm text-label-sm backdrop-blur-md border border-primary/20">
              2024 REEL
            </span>
            <span className="px-2.5 py-1 rounded bg-surface-container-highest/90 text-on-surface font-label-sm text-label-sm backdrop-blur-md">
              4K 60FPS
            </span>
          </div>

          {/* Center Play/Pause Button */}
          <button 
            aria-label={isPlaying ? "暫停播放" : "播放秀帶"}
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-2xl active:scale-90 hover:scale-110 transition-transform cursor-pointer glow-amber"
          >
            <span className="material-symbols-outlined text-[32px] pl-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Dynamic Chapter Marker Prompt */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-on-surface">
            <span className="font-label-md md:font-headline-sm text-label-md md:text-headline-sm font-semibold text-primary truncate">
              {currentChapter.title}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-mono bg-surface-container-lowest/80 px-2 py-0.5 rounded">
              02:45
            </span>
          </div>
        </div>

        {/* Scrubber & Audio Waveform */}
        <div className="px-5 pt-3 pb-5 bg-surface-container flex flex-col gap-3">
          {/* Interactive Progress Scrubber */}
          <div 
            className="relative w-full h-2 bg-surface-container-highest rounded-full overflow-hidden cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newPercent = Math.round((clickX / rect.width) * 100) + '%';
              setProgress(newPercent);
            }}
          >
            <div 
              className="h-full bg-primary-container rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
              style={{ width: progress }}
            ></div>
          </div>

          {/* Audio Waveform Visualization (SVG) */}
          <div className="flex items-center justify-between h-5 px-1 opacity-70">
            <svg className="w-full h-4 text-primary" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 240 20">
              <rect height="4" rx="1.5" width="3" x="0" y="8"></rect>
              <rect height="10" rx="1.5" width="3" x="6" y="5"></rect>
              <rect height="14" rx="1.5" width="3" x="12" y="3"></rect>
              <rect height="6" rx="1.5" width="3" x="18" y="7"></rect>
              <rect height="16" rx="1.5" width="3" x="24" y="2"></rect>
              <rect height="8" rx="1.5" width="3" x="30" y="6"></rect>
              <rect height="18" rx="1.5" width="3" x="36" y="1"></rect>
              <rect height="12" rx="1.5" width="3" x="42" y="4"></rect>
              <rect height="6" rx="1.5" width="3" x="48" y="7"></rect>
              <rect height="16" rx="1.5" width="3" x="54" y="2"></rect>
              <rect height="10" rx="1.5" width="3" x="60" y="5"></rect>
              <rect height="18" rx="1.5" width="3" x="66" y="1"></rect>
              <rect height="12" rx="1.5" width="3" x="72" y="4"></rect>
              <rect height="4" rx="1.5" width="3" x="78" y="8"></rect>
              <rect height="14" rx="1.5" width="3" x="84" y="3"></rect>
              <rect height="8" rx="1.5" width="3" x="90" y="6"></rect>
              <rect height="16" rx="1.5" width="3" x="96" y="2"></rect>
              <rect height="10" rx="1.5" width="3" x="102" y="5"></rect>
              <rect height="18" rx="1.5" width="3" x="108" y="1"></rect>
              <rect height="6" rx="1.5" width="3" x="114" y="7"></rect>
              <rect height="16" rx="1.5" width="3" x="120" y="2"></rect>
              <rect height="12" rx="1.5" width="3" x="126" y="4"></rect>
              <rect height="8" rx="1.5" width="3" x="132" y="6"></rect>
              <rect height="14" rx="1.5" width="3" x="138" y="3"></rect>
              <rect height="18" rx="1.5" width="3" x="144" y="1"></rect>
              <rect height="10" rx="1.5" width="3" x="150" y="5"></rect>
              <rect height="4" rx="1.5" width="3" x="156" y="8"></rect>
              <rect height="16" rx="1.5" width="3" x="162" y="2"></rect>
              <rect height="8" rx="1.5" width="3" x="168" y="6"></rect>
              <rect height="14" rx="1.5" width="3" x="174" y="3"></rect>
              <rect height="18" rx="1.5" width="3" x="180" y="1"></rect>
              <rect height="10" rx="1.5" width="3" x="186" y="5"></rect>
              <rect height="6" rx="1.5" width="3" x="192" y="7"></rect>
              <rect height="14" rx="1.5" width="3" x="198" y="3"></rect>
              <rect height="16" rx="1.5" width="3" x="204" y="2"></rect>
              <rect height="8" rx="1.5" width="3" x="210" y="6"></rect>
              <rect height="12" rx="1.5" width="3" x="216" y="4"></rect>
              <rect height="4" rx="1.5" width="3" x="222" y="8"></rect>
              <rect height="16" rx="1.5" width="3" x="228" y="2"></rect>
              <rect height="10" rx="1.5" width="3" x="234" y="5"></rect>
            </svg>
          </div>

          {/* Quick Jump Chapter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            {showreelChapters.map((ch) => {
              const isSelected = currentChapter.time === ch.time;
              return (
                <button
                  key={ch.time}
                  onClick={() => handleSelectChapter(ch)}
                  className={`px-3 py-1.5 rounded-full font-label-sm text-label-sm shrink-0 flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm'
                      : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-bright'
                  }`}
                >
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container"></span>}
                  <span>{ch.time} {ch.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
