import React from 'react';

export const WorkflowProcessSection = ({ onNavigate }) => {
  const steps = [
    {
      step: 1,
      title: "文本與世界觀構思",
      en: "Script & Concept",
      desc: "劇本起草、文學意象具象化、色彩氛圍草案 (Color Script) 確立，鎖定全片的核心主軸。"
    },
    {
      step: 2,
      title: "分鏡與動態預覽",
      en: "Storyboard & Animatic",
      desc: "畫面鏡頭構圖剪接、時間律動掌控，配合臨時音軌進行剪輯節奏測試與剪點定案。"
    },
    {
      step: 3,
      title: "角色原畫與中割",
      en: "Keyframes & Inbetween",
      desc: "第一原畫動作設定、極限姿勢 (Extremes)、清稿描線與二原中割補全，賦予生命律動。"
    },
    {
      step: 4,
      title: "上色與特效合成",
      en: "Compositing & FX",
      desc: "色彩指定填色、動態光影著色、After Effects 圖層景深與粒子特效整合輸出。"
    }
  ];

  return (
    <section className="px-margin-mobile md:px-margin max-w-7xl mx-auto w-full flex flex-col gap-space-lg">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[24px]">account_tree</span>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-on-surface font-bold">
            動畫製程工作流 (Workflow)
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          堅持嚴謹工業規格與獨立手繪匠人美感並行的 4 階核心工作方法。
        </p>
      </div>

      {/* 4-Step Flow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {steps.map((item) => (
          <div 
            key={item.step} 
            className="bg-surface-container p-5 rounded-2xl flex gap-4 shadow-sm border border-white/[0.06] hover:border-primary/20 transition-all"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold flex items-center justify-center shrink-0 shadow-md">
                {item.step}
              </div>
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {item.title}
                </h3>
                <span className="font-label-sm text-label-sm text-outline font-mono">
                  {item.en}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Consultation CTA Card */}
      <div className="bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-low p-6 md:p-8 rounded-2xl shadow-2xl border border-white/[0.08] flex flex-col gap-4 text-center items-center">
        <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg glow-amber">
          <span className="material-symbols-outlined text-[28px]">movie_edit</span>
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <h3 className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md font-bold text-on-surface">
            想為您的品牌或專案注入生命力？
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            歡迎洽詢 2D 逐格動畫短片委託、MV分鏡繪製、角色動態設定合作。
          </p>
        </div>
        <button
          onClick={() => onNavigate('about-artist', 'contact-section')}
          className="py-3 px-8 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:bg-secondary-container transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 glow-amber"
        >
          <span className="material-symbols-outlined text-[18px]">send</span>
          <span>預約專案諮詢 / 取得報價</span>
        </button>
      </div>
    </section>
  );
};
