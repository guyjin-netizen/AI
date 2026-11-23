import React, { useState } from 'react';
import { artistProfile } from '../../data/skills';

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(artistProfile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest mt-space-xl pt-space-lg pb-24 md:pb-12 px-margin-mobile md:px-margin border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
        {/* Availability Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high w-fit border border-white/[0.06]">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Open for Freelance & Animation
          </span>
        </div>

        {/* Email Capsule */}
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm text-outline">Direct Collaboration</span>
          <div className="flex items-center gap-2">
            <span className="font-body-sm text-body-sm text-on-surface truncate">
              {artistProfile.email}
            </span>
            <button
              aria-label="Copy Email"
              onClick={handleCopyEmail}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high text-primary active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? 'check' : 'content_copy'}
              </span>
            </button>
            {copied && (
              <span className="text-primary font-label-sm text-label-sm animate-fade-in">
                已複製！
              </span>
            )}
          </div>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-space-sm pt-space-xs flex-wrap">
          {artistProfile.socials.map((social) => (
            <a
              key={social.name}
              aria-label={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-white/[0.06]"
            >
              <span className="material-symbols-outlined text-[20px]">
                {social.icon}
              </span>
            </a>
          ))}

          <button
            aria-label="Back to top"
            onClick={scrollToTop}
            className="ml-auto w-10 h-10 rounded-full bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-primary shadow-[0_2px_12px_rgba(245,158,11,0.15)] active:scale-95 transition-all border border-primary/20"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-space-sm text-center border-t border-white/[0.04]">
          <p className="font-label-sm text-label-sm text-outline">
            © 2024 Yi-ting Portfolio. All rights reserved. ｜ 多媒體設計系 • 獨立動畫作品集
          </p>
        </div>
      </div>
    </footer>
  );
};
