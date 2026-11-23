import React from 'react';
import { ArtistSpotlight } from '../components/sections/ArtistSpotlight';
import { SkillsTree } from '../components/sections/SkillsTree';
import { ContactFormSection } from '../components/sections/ContactFormSection';

export const AboutContactPage = () => {
  return (
    <div className="flex flex-col w-full pb-12 gap-space-xl">
      <ArtistSpotlight />
      <SkillsTree />
      <ContactFormSection />
    </div>
  );
};
