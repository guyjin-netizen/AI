import React from 'react';
import { skillsData, masteredTools } from '../../data/skills';

export const SkillsTree = () => {
  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full flex flex-col gap-space-md">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">account_tree</span>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface font-semibold">
            專業技能與熟練度
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          融匯厚塗質感的靜態視覺，與精準掌握節奏律動的逐格動畫。
        </p>
      </div>

      {/* Core Competencies Bars */}
      <div className="flex flex-col gap-space-sm">
        {skillsData.map((skill, idx) => (
          <div 
            key={idx}
            className="p-4 md:p-5 rounded-2xl bg-surface-container flex flex-col gap-2.5 shadow-sm border border-white/[0.06]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">{skill.icon}</span>
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md md:font-headline-sm text-label-md md:text-headline-sm text-on-surface font-semibold">
                    {skill.name}
                  </span>
                  <span className="font-label-sm text-label-sm text-outline">
                    {skill.category}
                  </span>
                </div>
              </div>
              <span className={`font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md ${skill.textColor} font-bold font-mono`}>
                {skill.percentage}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 rounded-full bg-surface-container-lowest overflow-hidden">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 shadow-sm`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Mastered Tools Deck */}
      <div className="p-5 md:p-6 rounded-2xl bg-surface-container-low flex flex-col gap-space-sm shadow-sm border border-white/[0.06]">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-primary tracking-wider uppercase font-semibold">
            Mastered Tools
          </span>
          <span className="font-label-sm text-label-sm text-outline">軟體工具庫</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {masteredTools.map((tool, idx) => (
            <div 
              key={idx}
              className={`p-3.5 rounded-xl bg-surface-container flex items-center gap-3 shadow-sm border border-white/[0.04] ${
                tool.fullWidth ? 'sm:col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-label-md shrink-0 ${
                tool.type === 'primary' 
                  ? 'bg-primary-container text-on-primary-container' 
                  : tool.type === 'secondary'
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'bg-surface-container-high text-on-surface'
              }`}>
                {tool.abbr}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-on-surface font-medium truncate">
                  {tool.name}
                </span>
                <span className={`font-label-sm text-label-sm flex items-center gap-1 ${
                  tool.isCore ? (tool.type === 'primary' ? 'text-primary font-semibold' : 'text-secondary font-semibold') : 'text-outline'
                }`}>
                  {tool.isCore && <span className="w-1.5 h-1.5 rounded-full bg-current"></span>}
                  {tool.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
