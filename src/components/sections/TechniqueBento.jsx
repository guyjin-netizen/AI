import React from 'react';

export const TechniqueBento = () => {
  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full mt-space-lg flex flex-col gap-space-md">
      <div className="flex flex-col">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
          Workflow & Technique
        </span>
        <h3 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface font-semibold">
          創作特色與繪畫工具解析
        </h3>
      </div>

      {/* Software Deep Dive Card: Clip Studio Paint */}
      <div className="p-5 md:p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-space-sm border border-white/[0.06]">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-space-sm">
            <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shadow-sm border border-primary/20">
              <span className="material-symbols-outlined text-[26px]">brush</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Clip Studio Paint EX
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                主要繪圖與角色設計工作站
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm border border-primary/30">
            專業工作流
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
          <div className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-1.5 border border-white/[0.04]">
            <div className="flex items-center gap-1.5 text-primary">
              <span className="material-symbols-outlined text-[18px]">texture</span>
              <span className="font-label-md text-label-md font-semibold">自訂油畫筆刷</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              模擬實體壓克力與油彩刮刀混合率，賦予畫面顆粒阻尼感與厚重立體質感。
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-1.5 border border-white/[0.04]">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[18px]">gesture</span>
              <span className="font-label-md text-label-md font-semibold">向量描線圖層</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              任意縮放無損耗，搭配交點擦除快速梳理高密度的角色輪廓線與動態姿勢。
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-1.5 border border-white/[0.04]">
            <div className="flex items-center gap-1.5 text-tertiary">
              <span className="material-symbols-outlined text-[18px]">layers</span>
              <span className="font-label-md text-label-md font-semibold">色相分層管理</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              嚴謹的剪裁遮罩與光源圖層分離，便於快速輸出動畫賽璐珞設定檔與後期微調。
            </p>
          </div>
        </div>
      </div>

      {/* 3 Signature Style Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
        <div className="p-5 rounded-2xl bg-surface-container-high/60 flex flex-col gap-2 border border-white/[0.06]">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">light_mode</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            強烈光影對比
          </span>
          <span className="font-label-sm text-label-sm text-outline font-mono">
            Dramatic Lighting
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
            偏愛高反差的明暗交界線與逆光輪廓光，使扁平構圖瞬間展現電影級空間深度。
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-high/60 flex flex-col gap-2 border border-white/[0.06]">
          <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">auto_stories</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            故事感構圖
          </span>
          <span className="font-label-sm text-label-sm text-outline font-mono">
            Narrative Composition
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
            視線引導線與道具暗示細節，讓觀眾一眼即能聯想畫面發生前與即將展開的情節。
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-high/60 flex flex-col gap-2 border border-white/[0.06]">
          <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">draw</span>
          </div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            多變筆觸質地
          </span>
          <span className="font-label-sm text-label-sm text-outline font-mono">
            Expressive Textures
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
            從俐落平塗向量到鬆弛厚塗堆疊，依專案氛圍精確調配筆刷阻尼與邊緣清晰度。
          </p>
        </div>
      </div>
    </section>
  );
};
