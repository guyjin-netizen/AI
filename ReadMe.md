# Yi-ting Portfolio ｜ 黃翊庭個人作品集網站

本專案為多媒體設計系學生**黃翊庭（Yi-ting Huang）**的個人作品集網站。依據 [PRD.md](docs/PRD.md) 與 `references/stitch/` 的設計規格，採用 **React + React Router + Tailwind CSS** 與 **Obsidian Amber（Elevated Dark Gallery）** 深色藝廊設計系統打造，元件完整模組化並支援手機與桌面響應式瀏覽。

---

## 視覺風格與設計系統（Design System）

- **主色調與 CSS 變數**：深黑曜石背景（`#131313` / `#0e0e0e`）搭配暖琥珀金橘（`#f59e0b` / `#ffc174`）與細微半透明邊框（`border-white/[0.06]`），並在 `src/index.css` 中定義 `:root` 深色主題變數。
- **品牌識別**：內建客製化 `BrandLogo.jsx`（「Y + T」幾何動畫影格交織 Monogram SVG），確保所有頁面與裝置皆可清晰顯示。
- **排版字型**：`Inter` 與 `Noto Sans TC` 跨語系搭配。
- **圖片懶加載與微互動**：透過 `LazyImage.jsx` 整合 `IntersectionObserver` 延遲載入與載入淡入效果，並內建卡片 hover 縮放、進場淡入、Showreel 播放器進度軸與燈箱彈窗。

---

## 系統目錄結構與模組化架構

```text
AI/
├── docs/
│   └── PRD.md                       # 專案開發規格書
├── references/
│   └── stitch/                      # Stitch 原始匯出設計檔與 DESIGN.md
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── BrandLogo.jsx        # 客製 Y+T 幾何 Monogram SVG Logo
│   │   │   ├── LazyImage.jsx        # IntersectionObserver 圖片懶加載與容錯元件
│   │   │   ├── Header.jsx           # 頂部固定導航列（桌面導航 + 聯絡快捷鈕）
│   │   │   ├── Footer.jsx           # 底部狀態徽章、Email 一鍵複製、社群連結與置頂
│   │   │   └── BottomNav.jsx        # 行動端底部標籤導航欄
│   │   └── sections/
│   │       ├── HeroSection.jsx             # 首頁主視覺、時間碼與代表作卡片
│   │       ├── WorkflowTracker.jsx         # 創作數據看板與 4 階管線
│   │       ├── FeaturedWorksSection.jsx    # 精選作品網格與分類篩選器
│   │       ├── ShowreelBanner.jsx          # 2024 年度動畫秀帶橫幅
│   │       ├── ReelPlayerSection.jsx       # Showreel 互動播放器（播放計時、章節跳轉、進度拖曳、音波）
│   │       ├── CaseStudyToyBrick.jsx       # 《積木 ToyBrick》案例研究（含可點擊放大分鏡切片）
│   │       ├── CaseStudyHey.jsx            # 《嘿！這次是我覺得》動態表演分析
│   │       ├── WorkflowProcessSection.jsx  # 動畫 4 階製程與專案諮詢卡
│   │       ├── IllustrationGallery.jsx     # 6 件插畫作品流與風格篩選
│   │       ├── IllustrationDetailModal.jsx # 插畫高清燈箱彈窗（色票、技術參數、圖層拆解）
│   │       ├── TechniqueBento.jsx          # Clip Studio Paint 工具剖析與三大風格徽章
│   │       ├── ArtistSpotlight.jsx         # 藝術家自述、里程碑與氣氛靜態幀
│   │       ├── SkillsTree.jsx              # 專業技能百分比進度條與軟體工具庫
│   │       └── ContactFormSection.jsx      # Email 複製、合作表單（支援 Formspree / mailto）與社群入口
│   ├── data/
│   │   ├── projects.js              # 動畫專案、分鏡切片與 Showreel 章節資料
│   │   ├── illustrations.js         # 插畫作品、調色盤與燈箱技術細節
│   │   └── skills.js                # 藝術家檔案、技能數值與社群連結
│   ├── pages/
│   │   ├── HomePage.jsx             # 首頁（/）
│   │   ├── AnimationReelsPage.jsx   # 動畫短片與案例研究（/animation-reels）
│   │   ├── IllustrationsPage.jsx    # 2D 插畫與角色設計（/illustrations）
│   │   └── AboutContactPage.jsx     # 關於藝術家與聯絡合作（/about-artist）
│   ├── App.jsx                      # React Router 路由設定與動態頁面標題管理
│   ├── main.jsx                     # React 渲染入口
│   └── index.css                    # Tailwind 指令與 CSS 變數設定
├── .env.example                     # 環境變數範本（VITE_FORMSPREE_ENDPOINT）
├── index.html                       # HTML 範本
├── package.json                     # 專案設定與依賴清單
├── postcss.config.js                # PostCSS 設定
├── render.yaml                      # Render Static Site 部署與 SPA Rewrite 設定
├── tailwind.config.js               # Obsidian Amber 主題色票、字級與動畫設定
├── vite.config.js                   # Vite 開發伺服器與建置設定
└── ReadMe.md                        # 本說明文件
```

---

## 實際安裝套件版本（依據 `node_modules` 實測）

| 套件名稱 | 實際安裝版本 | 用途 |
|---|---|---|
| **react** | `18.3.1` | 前端 UI 元件核心框架 |
| **react-dom** | `18.3.1` | React 瀏覽器 DOM 渲染 |
| **react-router-dom** | `6.30.6` | 單頁應用路由切換與平滑捲動 |
| **lucide-react** | `0.460.0` | 圖示庫支援 |
| **clsx** | `2.1.1` | 條件式 className 組合 |
| **tailwind-merge** | `2.6.1` | Tailwind 類別衝突合併工具 |
| **vite** | `5.4.21` | 前端開發伺服器與生產建置工具 |
| **@vitejs/plugin-react** | `4.7.0` | Vite React Fast Refresh 外掛 |
| **tailwindcss** | `3.4.19` | 實用優先 CSS 框架 |
| **postcss** | `8.5.33` | CSS 編譯處理器 |
| **autoprefixer** | `10.6.2` | CSS 跨瀏覽器前綴補全 |

> 本機驗證執行環境：`Node.js v22.22.0`（透過本機安裝之 Node 執行檔直跑 Vite）。

---

## 啟動方式與本機網址

### 1. 標準環境啟動（已將 Node.js / npm 加入系統 PATH）
```bash
npm install
npm run dev
```

### 2. 若本機未將 Node / npm 加入 PATH（直接呼叫 Node 執行 Vite）
```powershell
& "E:\Downloads\ADB\PS\Adobe Photoshop 2026\node.exe" .\node_modules\vite\bin\vite.js --port 3000
```

啟動後可於瀏覽器開啟：
- **Local**：`http://localhost:3000/`
- **各頁面路徑**：
  - 首頁精選：`http://localhost:3000/`
  - 動畫短片與案例研究：`http://localhost:3000/animation-reels`
  - 2D 插畫與角色設計：`http://localhost:3000/illustrations`
  - 關於藝術家與聯絡合作：`http://localhost:3000/about-artist`

### 3. 生產環境建置與預覽
```bash
npm run build
npm run preview
```

---

## 部署至 Render（Static Site）

專案根目錄已附帶 `render.yaml`，設定如下：
- **Service Type**：Static Site
- **Build Command**：`npm install && npm run build`
- **Publish Directory**：`dist`
- **Rewrite Rule**：`/* -> /index.html`（確保重新整理子路由時不出現 404）

---

## 尚未完成與待補充項目

1. **正式影音與個人素材替換**：
   - `ReelPlayerSection` 目前為高質感互動播放器介面（支援播放計時、進度條拖曳與章節切換），尚未串接正式的 YouTube / Vimeo Showreel 嵌入影片連結。
   - 現階段作品圖片與頭像仍引用 Stitch 匯出之範例連結，未來建議替換為本地 `public/` 壓縮後之 `.webp` 原圖與個人真實照片。
2. **社群帳號真實連結**：`src/data/skills.js` 中的 Behance、Instagram、YouTube、ArtStation 目前為官方首頁占位網址，待補上個人帳號頁面 URL。
3. **線上表單服務與進階 SEO**：
   - 聯絡表單已支援 `VITE_FORMSPREE_ENDPOINT` 環境變數串接 Formspree；在未設定前會自動使用 `mailto:` 開啟郵件客戶端。
   - `react-helmet-async`、Framer Motion 進場動畫及規格書內提及的「3D 模型檢視器 / CMS 後台 / 多語系切換」尚未實作（目前以 2D 插畫與動畫作品集為主軸）。
