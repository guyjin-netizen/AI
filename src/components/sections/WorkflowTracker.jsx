import React from 'react';
import { artistProfile } from '../../data/skills';

export const WorkflowTracker = () => {
  return (
    <section className="w-full px-margin-mobile md:px-margin py-space-md flex flex-col gap-space-lg max-w-7xl mx-auto">
      {/* Stat Trio */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {artistProfile.stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="flex flex-col p-4 rounded-xl bg-surface-container-low border border-white/[0.06] shadow-sm hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-1.5 text-primary">
              <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
              <span className="font-headline-md text-headline-md font-bold text-on-surface">
                {stat.count}
              </span>
              <span className="font-label-md text-label-md text-primary font-semibold">
                {stat.unit}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-outline mt-1 truncate">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Production Pipeline Tracker Bento */}
      <div className="w-full p-5 rounded-2xl bg-surface-container-low border border-white/[0.06] flex flex-col gap-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">account_tree</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              創作管線 Workflow
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
            Production Cycle
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          {artistProfile.workflowSteps.map((step) => (
            <div 
              key={step.step} 
              className="flex items-start gap-3 p-3 rounded-xl bg-surface-container border border-white/[0.04] hover:border-primary/20 transition-all"
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold shrink-0 ${
                step.step === 1 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'bg-surface-container-high text-primary'
              }`}>
                {step.step}
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                  {step.title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  {step.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
