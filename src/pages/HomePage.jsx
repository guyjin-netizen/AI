import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { WorkflowTracker } from '../components/sections/WorkflowTracker';
import { FeaturedWorksSection } from '../components/sections/FeaturedWorksSection';
import { ShowreelBanner } from '../components/sections/ShowreelBanner';

export const HomePage = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full pb-12 gap-space-lg">
      <HeroSection onNavigate={onNavigate} />
      <WorkflowTracker />
      <FeaturedWorksSection onNavigate={onNavigate} />
      <ShowreelBanner onNavigate={onNavigate} />
    </div>
  );
};
