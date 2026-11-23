import React from 'react';
import { projectsData } from '../../data/projects';

export const CaseStudyHey = () => {
  const heyProject = projectsData.find((p) => p.id === 'hey-felt');
  if (!heyProject) return null;

  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full flex flex-col gap-space-md">
      <div className="bg-surface-container-low p-space-md md:p-space-lg rounded-2xl shadow-md border border-white/[0.06] flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold border border-secondary-container/30">
            獨立動畫代表作 02
          </span>
          <span className="font-label-sm text-label-sm text-outline font-mono">Animation Short</span>
        </div>
        <div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface font-bold tracking-tight">
            《嘿！這次是我覺得》
          </h2>
          <p className="font-label-md md:font-headline-sm text-label-md md:text-headline-sm text-secondary mt-1">
            主製作、分鏡、角色動作指導 (Animation Director)
          </p>
        </div>

        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-surface-container-lowest mt-2 shadow-xl border border-white/[0.08] group">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Dynamic 2D animation screenshot from Hey This Is What I Think"
            src={heyProject.detailImage}
          />
        </div>

        {/* Style Description & Dynamics */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-[20px]">auto_fix_high</span>
            <span className="font-label-md md:font-headline-sm text-label-md md:text-headline-sm font-semibold text-on-surface">
              視覺風格與動態節奏亮點
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {heyProject.synopsis}
          </p>
        </div>

        {/* Keyframe Motion Breakdown Cards */}
        <div className="bg-surface-container p-4 md:p-5 rounded-xl flex flex-col gap-3 mt-2 border border-white/[0.04]">
          <span className="font-label-md text-label-md font-semibold text-on-surface">
            動作亮點分析 (Action Performance)
          </span>
          <div className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
            {heyProject.motionHighlights.map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                <span>
                  <strong className="text-on-surface">{hl.title}：</strong>
                  {hl.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
