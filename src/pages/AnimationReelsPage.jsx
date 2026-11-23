import React from 'react';
import { ReelPlayerSection } from '../components/sections/ReelPlayerSection';
import { CaseStudyToyBrick } from '../components/sections/CaseStudyToyBrick';
import { CaseStudyHey } from '../components/sections/CaseStudyHey';
import { WorkflowProcessSection } from '../components/sections/WorkflowProcessSection';

export const AnimationReelsPage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full pb-12 gap-space-xl">
      <ReelPlayerSection />
      <CaseStudyToyBrick />
      <CaseStudyHey />
      <WorkflowProcessSection onNavigate={onNavigate} />
    </div>
  );
};
