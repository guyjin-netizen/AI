import React, { useState } from 'react';
import { artistProfile } from '../../data/skills';

export const ContactFormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('動畫專案');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    { type: '動畫專案', icon: 'movie_creation' },
    { type: '商業插畫', icon: 'palette' },
    { type: '委託合作', icon: 'handshake' },
    { type: '學校交流', icon: 'school' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(artistProfile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`【合作需求 - ${projectType}】來自 ${name}`);
    const body = encodeURIComponent(
      `您好，翊庭：\n\n我是 ${name} (${email})。\n對您的專案合作有濃厚興趣！\n\n【合作類型】: ${projectType}\n【詳細需求】:\n${message}\n\n期待您的回覆！`
    );

    setSubmitted(true);
    // Trigger user mail client with prefilled context
    window.location.href = `mailto:${artistProfile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full flex flex-col gap-space-lg" id="contact-section">
      {/* Header Block */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit border border-white/[0.06]">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            目前開放新專案委託與工作機會
          </span>
        </div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
          一起創作有趣的故事吧
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
          無論是動畫短片製作、原創插畫商業授權、動態分鏡規劃或學校畢業專案交流，歡迎隨時來信。
        </p>
      </div>

      {/* Direct Email Capsule */}
      <div className="p-5 md:p-6 rounded-2xl bg-surface-container flex flex-col gap-space-sm shadow-md border border-white/[0.06]">
        <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
          Direct Email
        </span>
        <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-surface-container-lowest border border-white/[0.04] flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="material-symbols-outlined text-primary text-[22px] shrink-0">
              alternate_email
            </span>
            <span className="font-body-md text-body-md text-on-surface font-medium truncate">
              {artistProfile.email}
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="px-3.5 h-10 rounded-lg bg-surface-container-high text-primary hover:bg-surface-bright active:scale-95 transition-all flex items-center gap-1.5 font-label-sm text-label-sm border border-primary/20"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? '已複製' : '複製'}</span>
            </button>
            <a
              href={`mailto:${artistProfile.email}?subject=【合作邀約】來自作品集訪客`}
              className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-secondary-container transition-colors shadow-sm"
              aria-label="寄送郵件"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </a>
          </div>
        </div>
        {copied && (
          <p className="font-label-sm text-label-sm text-primary text-center animate-fade-in">
            已複製至剪貼簿！期待您的來信。
          </p>
        )}
      </div>

      {/* Quick Collaboration Form */}
      <div className="p-5 md:p-8 rounded-2xl bg-surface-container flex flex-col gap-space-md shadow-xl border border-white/[0.06]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">edit_note</span>
            <span className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-surface font-semibold">
              快速專案聯絡表單
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-outline font-mono">Quick Dispatch</span>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between" htmlFor="contact-name">
                <span>您的稱呼 / 團隊名稱</span>
                <span className="text-primary">*必填</span>
              </label>
              <input
                id="contact-name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="例如：林導演 / 樂木設計"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline/70 font-body-md text-body-md border border-white/[0.06] focus:outline-none focus:border-primary focus:bg-surface-container-high transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between" htmlFor="contact-sender-email">
                <span>電子信箱 (Email)</span>
                <span className="text-primary">*必填</span>
              </label>
              <input
                id="contact-sender-email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline/70 font-body-md text-body-md border border-white/[0.06] focus:outline-none focus:border-primary focus:bg-surface-container-high transition-colors"
              />
            </div>
          </div>

          {/* Project Type Radio Pills */}
          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant">專案合作類型</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {projectTypes.map((pt) => {
                const isSelected = projectType === pt.type;
                return (
                  <button
                    key={pt.type}
                    type="button"
                    onClick={() => setProjectType(pt.type)}
                    className={`px-3 py-3 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all border ${
                      isSelected
                        ? 'bg-primary-container text-on-primary-container font-semibold shadow-md border-primary-container'
                        : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-high border-white/[0.06]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{pt.icon}</span>
                    <span>{pt.type}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between" htmlFor="contact-message">
              <span>合作想法或需求說明</span>
              <span className="text-primary">*必填</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="請簡要描述您的專案概念、時程預估或期望的視覺風格..."
              className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline/70 font-body-md text-body-md border border-white/[0.06] focus:outline-none focus:border-primary focus:bg-surface-container-high transition-colors resize-none leading-relaxed"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold flex items-center justify-center gap-2 hover:bg-secondary-container active:scale-[0.98] transition-all shadow-lg glow-amber"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>發送合作需求</span>
          </button>

          {/* Feedback Alert */}
          {submitted && (
            <div className="p-4 rounded-xl bg-surface-container-high flex items-center gap-3 border border-primary/30 animate-fade-in">
              <span className="material-symbols-outlined text-primary text-[24px]">check_circle</span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  需求已成功整理！
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  已為您開啟郵件客戶端，翊庭將盡快回覆。
                </span>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* External Portals & Social Hub */}
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <span className="font-label-sm text-label-sm text-outline tracking-wider uppercase text-center">
          Portfolio Channels & Social
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {artistProfile.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-surface-container flex flex-col items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-high active:scale-95 transition-all border border-white/[0.06]"
            >
              <span className="material-symbols-outlined text-[26px]">{social.icon}</span>
              <span className="font-label-md text-label-md font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Architecture Notice Pill */}
      <div className="p-4 rounded-2xl bg-surface-container-lowest flex items-center gap-3 border border-white/[0.04]">
        <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0 border border-primary/20">
          <span className="material-symbols-outlined text-[20px]">terminal</span>
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-label-md text-label-md text-on-surface font-semibold">
              Vite + React 18/19 現代化架構
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm border border-primary/20">
              Render Deploy Ready
            </span>
          </div>
          <span className="font-body-sm text-body-sm text-outline truncate mt-0.5">
            支援高畫質影格預載、流暢分鏡切換與極速效能渲染。
          </span>
        </div>
      </div>
    </section>
  );
};
