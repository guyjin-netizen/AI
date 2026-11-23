# Yi-ting Portfolio ｜ 黃翊庭個人作品集網站

本專案為多媒體設計系學生**黃翊庭（Yi-ting Huang）**的高質感個人作品集網站。依據 `docs/PRD.md` 與 `references/stitch/` 的設計規格，採用 **React + Tailwind CSS** 與 **Obsidian Amber** 高階深色藝廊設計系統（Elevated Dark Gallery）打造，元件完全模組化並支援多裝置響應式體驗。

---

## 視覺風格與設計系統（Design System）

- **主色調架構**：深黑黑曜石背景（`#0a0a0a` / `#131313`）搭配柔和暖琥珀（Amber `#f59e0b` / `#ffc174`）與微光層次，營造沉浸式藝廊氛圍。
- **排版字型**：Inter 與 Noto Sans TC 跨語系搭配，具備俐落的字距與行高。
- **微互動回饋**：卡片浮動、圖片縮放、發光脈衝、音波可視化動態與燈箱彈窗。

---

## 系統目錄結構與模組化架構

```
AI/
├── docs/                        # 專案規格書 (PRD.md)
├── references/                  # Stitch 原始匯出設計檔與規範
│   └── stitch/
├── public/                      # 靜態資源
├── src/
│   ├── components/
│   │   ├── common/              # 全域模組
│   │   │   ├── Header.jsx       # 頂部導航列（支援桌面導航與手機版聯絡快捷按鈕）
│   │   │   ├── Footer.jsx       # 底部版權、Email一鍵複製、社群連結與回到頂部
│   │   │   └── BottomNav.jsx    # 行動端底部標籤導航欄（符合 Stitch mobile tab 規範）
│   │   └── sections/            # 區塊功能元件
│   │       ├── HeroSection.jsx             # 首頁 Hero 主視覺、動態膠卷時間碼與精選作品卡片
│   │       ├── WorkflowTracker.jsx         # 核心數據統計與 4 階管線看板
│   │       ├── FeaturedWorksSection.jsx    # 精選作品網格與即時分類篩選器
│   │       ├── ShowreelBanner.jsx          # 2024 動畫秀帶精選橫幅
│   │       ├── ReelPlayerSection.jsx       # 秀帶互動播放器（進度軸、音波圖、章節跳轉）
│   │       ├── CaseStudyToyBrick.jsx       # 《積木 ToyBrick》深度案例（分鏡切片、角色演進表）
│   │       ├── CaseStudyHey.jsx            # 《嘿！這次是我覺得》動態表演分析
│   │       ├── WorkflowProcessSection.jsx  # 動畫 4 階段製程解析與專案諮詢卡
│   │       ├── IllustrationGallery.jsx     # 6 件插畫作品流與分類篩選器
│   │       ├── IllustrationDetailModal.jsx # 畫作高清燈箱彈窗（色票、圖層結構、技術參數）
│   │       ├── TechniqueBento.jsx          # Clip Studio Paint 工具深入解析與三特色徽章
│   │       ├── ArtistSpotlight.jsx         # 藝術家頭像、自述、里程碑與氣氛靜態幀
│   │       ├── SkillsTree.jsx              # 技能百分比動態進度條與軟體技能庫
│   │       └── ContactFormSection.jsx      # 信箱複製、合作意願表單與社群連結
│   ├── data/                    # 獨立資料層（分離邏輯與內容）
│   │   ├── projects.js          # 動畫專案資料與秀帶章節
│   │   ├── illustrations.js     # 6 件精選插畫、色票與燈箱資料
│   │   └── skills.js            # 個人檔案、技能數值與社群連結
│   ├── pages/                   # 頁面級元件
│   │   ├── HomePage.jsx         # 精選作品首頁 (Showcase)
│   │   ├── AnimationReelsPage.jsx # 動畫短片與案例分析 (Animation Reels)
│   │   ├── IllustrationsPage.jsx  # 2D 插畫與角色設計 (Illustrations)
│   │   └── AboutContactPage.jsx   # 關於藝術家與聯絡合作 (About & Contact)
│   ├── App.jsx                  # 應用程式主入口與路由狀態管理
│   ├── main.jsx                 # React DOM 渲染入口
│   └── index.css                # Tailwind 與自訂滾動條樣式
├── index.html                   # HTML 範本（引入 Inter、Noto Sans TC 與 Material Symbols）
├── tailwind.config.js           # 完整 Obsidian Amber 色彩系統與字級設定
├── postcss.config.js            # PostCSS 設定
├── vite.config.js               # Vite 設定
├── package.json                 # 專案相依性套件清單
└── ReadMe.md                    # 專案說明文件
```

---

## 實際安裝與相依套件版本

| 套件名稱 | 實際安裝版本 | 用途 |
|---|---|---|
| **Node.js** | v20.18.0 (LTS) | 伺服器端 JavaScript 執行環境 |
| **npm** | 10.8.2 | 套件管理工具 |
| **React** | 18.3.1 | 前端核心元件框架 |
| **React DOM** | 18.3.1 | React 瀏覽器渲染引擎 |
| **Vite** | 5.4.21 | 極速現代前端建置與熱重載伺服器 |
| **Tailwind CSS** | 3.4.15 | 實用優先之 CSS 框架 |
| **PostCSS** | 8.4.49 | CSS 轉換處理器 |
| **Autoprefixer** | 10.4.20 | 自動添加瀏覽器前綴 |
| **Lucide React** | 0.460.0 | SVG 圖示支援庫 |

---

## 啟動方式與本機網址

### 1. 安裝相依套件
```bash
npm install
```

### 2. 啟動本機開發伺服器
```bash
npm run dev
```
啟動後終端機將顯示本機網址：
```
➜  Local:   http://localhost:3000/
➜  Network: http://[your-ip]:3000/
```

### 3. 生產環境編譯打包（驗證部署）
```bash
npm run build
```
編譯產物將儲存於 `dist/` 資料夾中。

### 4. 預覽打包產物
```bash
npm run preview
```

---

## 核心功能與頁面導覽

1. **精選作品（Showcase）**
   - 劇院級 Hero 主視覺，搭配時間碼磁帶意象（`FR-24.00 FPS / SEQ.01`）與動態脈衝。
   - 核心數據看板（2 部獨立動畫主導、20+ 精選厚塗插畫、150+ 動態分鏡繪製）與 4 階創作管線。
   - 支援 5 類標籤即時切換篩選（全部、2D動畫、厚塗插畫、人物設計、分鏡腳本）。
   - 旗艦專案《積木 ToyBrick》與《嘿！這次是我覺得》作品卡。

2. **動畫短片（Animation Reels）**
   - 2024 動畫秀帶播放器介面，支援章節切換（`00:15 積木開場`、`01:05 打鬥與追逐`、`01:50 抒情日常`）、進度軸拖曳與音波頻譜可視化。
   - 《積木 ToyBrick》旗艦專案深度案例研究：包含 4 幕分鏡切片（Cut 01-04）與主角色「諾亞」三階段演進表（早期草稿、透視驗證、最終定案）。
   - 《嘿！這次是我覺得》動態表演分析（預備動作 Anticipation、殘影抹拭 Smear Frames、微表情緩入緩出）。
   - 4 階動畫工業工作流（文本構思、分鏡預覽、原畫中割、上色特效）。

3. **2D 插畫與角色設計（Illustrations）**
   - 6 件精選代表作品流，支援 5 類篩選（全部、厚塗油畫風、日式動漫、歐美卡通、概念美術）。
   - 點擊卡片或「探索設定」可開啟**全螢幕高清燈箱彈窗（Lightbox Modal）**，詳細檢視調色盤色票、技術參數（畫布規格、筆刷、光源）與圖層結構筆記。
   - Clip Studio Paint EX 專業工作站深入解析與三大招牌視覺風格（強烈光影對比、故事感構圖、多變筆觸質地）。

4. **關於藝術家與聯絡（About & Contact）**
   - 藝術家頭像、自述理念、專業技能百分比動態進度條（插畫 95%、動畫 90%、分鏡 92%）。
   - 精熟軟體工具庫（CSP、AN、PS、AE、SBP）。
   - 一鍵複製信箱至剪貼簿（附 Toast 提示），直接點擊調用系統郵件客戶端。
   - 快速專案需求表單（支援動畫專案、商業插畫、委託合作、學校交流等多類型快速預填）。

---

## 部署至 Render 規範

專案已完成相容於 Render 的設定：
- **Service Type**：Static Site
- **Build Command**：`npm install && npm run build`
- **Publish Directory**：`dist`
- **Redirects / Rewrites**：`/* -> /index.html (200)`
