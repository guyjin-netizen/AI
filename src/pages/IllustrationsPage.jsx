import React from 'react';
import { IllustrationGallery } from '../components/sections/IllustrationGallery';
import { TechniqueBento } from '../components/sections/TechniqueBento';

export const IllustrationsPage = () => {
  return (
    <div className="flex flex-col w-full pb-12 gap-space-xl">
      <IllustrationGallery />
      <TechniqueBento />
    </div>
  );
};
