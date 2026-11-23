import React from 'react';
import { projectsData } from '../../data/projects';

export const CaseStudyToyBrick = () => {
  const toybrick = projectsData.find((p) => p.id === 'toybrick');
  if (!toybrick) return null;

  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full flex flex-col gap-space-md">
      {/* Section Header */}
      <div className="bg-surface-container-low p-space-md md:p-space-lg rounded-2xl shadow-md border border-white/[0.06] flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold border border-primary/30">
            旗艦獨立代表作
          </span>
          <span className="font-label-sm text-label-sm text-outline font-mono">Production 2024</span>
        </div>
        <div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface font-bold tracking-tight">
            《積木 ToyBrick》
          </h2>
          <p className="font-label-md md:font-headline-sm text-label-md md:text-headline-sm text-secondary mt-1">
            獨立動畫主製作 / 原創故事 / 2D 逐格手繪動畫
          </p>
        </div>
        {/* Specification Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="px-3 py-1 rounded-lg bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
            總導演 & 分鏡
          </span>
          <span className="px-3 py-1 rounded-lg bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
            角色原畫 / 構圖
          </span>
          <span className="px-3 py-1 rounded-lg bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
            時長 06:20
          </span>
          <span className="px-3 py-1 rounded-lg bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
            Color Grade: P3
          </span>
        </div>
      </div>

      {/* Hero Concept Art Plate */}
      <div className="w-full rounded-2xl overflow-hidden bg-surface-container-low shadow-xl border border-white/[0.08]">
        <div className="w-full aspect-[16/9] relative group">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Key visual concept art of ToyBrick animation short film"
            src={toybrick.keyArtImage}
          />
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface font-medium">
              主視覺概念幀 (Key Art Frame #128)
            </span>
            <span className="font-label-sm text-label-sm text-primary font-mono px-2 py-0.5 rounded bg-surface-container-highest/80">
              Final AE Pass
            </span>
          </div>
        </div>
      </div>

      {/* Story Concept & Technical Challenges (Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
        {/* Story Narrative */}
        <div className="bg-surface-container p-5 rounded-2xl flex flex-col gap-2.5 shadow-sm border border-white/[0.06]">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-[22px]">psychology</span>
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              故事核心與象徵隱喻
            </h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {toybrick.synopsis}
          </p>
        </div>

        {/* Core Technical Challenges */}
        <div className="bg-surface-container p-5 rounded-2xl flex flex-col gap-2.5 shadow-sm border border-white/[0.06]">
          <div className="flex items-center gap-2 text-secondary">
            <span className="material-symbols-outlined text-[22px]">construction</span>
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              核心研發與挑戰克服
            </h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {toybrick.challenges}
          </p>
        </div>
      </div>

      {/* Pipeline Toolchain Breakdown */}
      <div className="bg-surface-container-low p-5 md:p-6 rounded-2xl flex flex-col gap-space-sm shadow-sm border border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">handyman</span>
          <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
            技術工具鏈 (Production Pipeline)
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container border border-white/[0.04]">
            <div className="w-9 h-9 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">brush</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface">Clip Studio Paint EX</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                分鏡腳本繪製、全片關鍵影格 (Keyframes) 與厚塗紋理筆刷建構
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container border border-white/[0.04]">
            <div className="w-9 h-9 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">motion_blur</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface">Adobe Animate</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                平滑向量補間動畫、次要重疊動態及數位描線清稿 (Clean-up)
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container border border-white/[0.04]">
            <div className="w-9 h-9 rounded-lg bg-primary/20 text-primary-fixed-dim flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">layers</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md font-semibold text-on-surface">After Effects & Premiere</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                多平面景深合成、環境光斑粒線暈染、動態膠卷顆粒質調統整
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Storyboard Breakdown (4-Frame Grid) */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">view_quilt</span>
            精彩分鏡切片 (Storyboard Breakdown)
          </h3>
          <span className="font-label-sm text-label-sm text-outline font-mono">Act I - Scene 04</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {toybrick.storyboardFrames.map((frame, idx) => (
            <div key={idx} className="bg-surface-container rounded-xl overflow-hidden flex flex-col shadow-sm border border-white/[0.06] group">
              <div className="aspect-[16/10] w-full bg-surface-container-highest overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt={frame.desc} 
                  src={frame.image} 
                />
              </div>
              <div className="p-3 flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm text-primary font-mono">{frame.cut}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">{frame.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Character Model Sheets */}
      <div className="bg-surface-container p-5 md:p-6 rounded-2xl flex flex-col gap-3 shadow-md border border-white/[0.06]">
        <div className="flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">person_outline</span>
            角色設計演進表 (Character Model Sheets)
          </h3>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          主角色「諾亞」從初期圓滑幾何形狀，逐步收斂至帶有木質銳角與多邊形關節的正式定稿設計。
        </p>
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-surface-container-lowest border border-white/[0.06]">
          <img 
            className="w-full h-full object-cover" 
            alt="Character model turn around turnaround sheet" 
            src={toybrick.characterTurnaround.image} 
          />
        </div>
        <div className="grid grid-cols-3 gap-3 text-center pt-2">
          {toybrick.characterTurnaround.stages.map((stage, idx) => (
            <div 
              key={idx} 
              className={`p-3 rounded-xl flex flex-col border ${
                stage.highlight 
                  ? 'bg-surface-container-highest border-primary/40' 
                  : 'bg-surface-container-high border-white/[0.04]'
              }`}
            >
              <span className={`font-label-sm text-label-sm ${stage.highlight ? 'text-primary font-bold' : 'text-outline'}`}>
                {stage.label}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface font-medium mt-0.5">
                {stage.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
