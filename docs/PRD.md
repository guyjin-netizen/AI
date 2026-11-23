黃翊庭個人作品集網站開發規格書

專案名稱：Yi-ting Portfolio（黃翊庭作品集） 目標平台：Render 技術架構：React（建議使用 Vite + React 18/19） 設計方向：現代、深色主題、作品導向、簡潔有力，參考 Behance 高質感作品集風格（大圖、清楚層次、微互動、專業排版）

1\. 專案概述與目標

這是一個個人作品集網站，主要用來展示黃翊庭作為多媒體設計系學生的 2D 插畫與獨立動畫作品，強調「插畫繪製」與「動畫製作」能力，並凸顯獨立動畫專案《積木 ToyBrick》與「嘿！這次是我覺得」的主製作身分。

核心目標：

快速傳達個人定位與風格

高品質展示精選 2D 作品與案例研究

提供清晰的聯絡管道

在手機與桌面都有良好體驗

易於後續在 Render 部署與維護

目標受眾：動畫/插畫相關工作機會、合作對象、學校評審、同業、潛在客戶。

2\. 技術規格

前端：

React + Vite

React Router（單頁應用，平滑切換）

狀態管理：必要時使用 Zustand 或 Context（作品篩選）

樣式：Tailwind CSS + 自訂 CSS Variables（深色主題易於調整）

動畫：Framer Motion（頁面進入、hover、滾動觸發）

圖片優化：使用 WebP + 懶加載（Intersection Observer）

響應式：Mobile-first

其他建議套件：

react-helmet-async（SEO）

lucide-react 或自訂 SVG 圖示

若需影片嵌入：YouTube / Vimeo embed 或自架影片

部署：

靜態建置後部署至 Render（Static Site 或 Web Service）

環境變數管理聯絡表單（若使用 Formspree / EmailJS 等）

自動 HTTPS、自訂網域支援

效能目標：

Lighthouse Performance ≥ 90

首屏載入 < 2.5 秒（良好網路）

圖片使用適當尺寸與格式

3\. 設計系統（Design System）

整體風格：

深色主題為主（背景接近 #0a0a0a ~ #121212）

強調作品本身，文字簡潔有力

大量留白與清晰層次

微互動：hover 放大、淡入、輕微位移

字體：中文優先使用「Noto Sans TC」或「思源黑體」；英文可用 Inter / Space Grotesk

主色調建議：

背景：深灰黑

文字：近白 #f5f5f5 + 次要灰

強調色：可依個人作品色調選定（例如暖橘、柔藍或品牌色），用於按鈕、hover、分隔線

圓角：中等（8–16px）

陰影：極淡或幾乎無（深色風格）

版面原則：

最大寬度約 1200–1400px

作品卡片採用瀑布流或等寬網格

Hero 區佔滿首屏，具強烈視覺衝擊

4\. 網站結構（Sitemap）

單頁應用為主，搭配平滑滾動與錨點導航：

Hero（主視覺 / 自我介紹）

Featured Works（精選作品 / 案例研究）

About & Skills（關於我與專業技能）

Contact（聯絡方式）

（可選）Process / Showreel 區塊

Footer

導航列固定或滾動後出現，包含：Home / Works / About / Contact。

5\. 各區塊詳細規格

5.1 Hero Section（主視覺區）

目的：在 3 秒內傳達「誰、做什麼、風格」

內容建議：

大標題：黃翊庭

副標題：多媒體設計系學生 ｜ 獨立動畫《積木 ToyBrick》主製作

一句話定位：「擅長插畫繪製 × 2D 動畫製作」

簡短描述：提及「嘿！這次是我覺得」主製作經驗，以及擅長厚塗油畫感、日式動漫插畫、歐美卡通人物設計、分鏡設計

CTA 按鈕：

「查看作品」→ 滾動到 Featured Works

「聯絡我」→ 滾動到 Contact

視覺：建議使用個人代表作品或自畫像 + 微動畫（淡入、輕微浮動），或短 Showreel 背景影片（循環、無聲）

互動：頁面載入時有優雅進場動畫。

5.2 Featured Works / Case Studies（精選作品）

目的：展示最能代表能力的作品

功能：

分類篩選：全部 / 插畫 / 動畫 / 人物設計 / 分鏡

網格或瀑布流卡片

點擊卡片開啟 Modal 或進入作品詳情頁（建議 Modal 先實作，之後可擴充）

卡片內容：

封面圖（高品質）

作品名稱

類型標籤（厚塗油畫 / 日式動漫 / 歐美卡通 / 分鏡 / 動畫）

簡短描述（1–2 行）

hover 效果：放大 + 顯示更多資訊

案例研究建議欄位（詳情頁或 Modal）：

專案名稱與年份

角色（主製作 / 插畫 / 分鏡等）

工具（CSP、Adobe Animate 等）

專案簡介與挑戰

多張高解析圖片 / 影片

過程圖（可選）

特別突出：

《積木 ToyBrick》獨立動畫

「嘿！這次是我覺得」相關作品

5.3 About Me & Skills（關於我與專業技能）

左側或上方：

個人簡介（300–500 字）

多媒體設計系學生

獨立動畫經驗

創作理念（例如：喜歡用厚塗質感與角色設計說故事）

可加入一張專業或半正式照片

右側或下方 Skills：

插畫繪製（厚塗油畫風格、日式動漫、歐美卡通人物）

動畫製作

分鏡設計

工具：Clip Studio Paint（CSP）、Adobe Animate（Adobe AN）

其他可補充：Photoshop、After Effects（若有）等

技能可用進度條、標籤雲或圖示 + 文字呈現，避免過度花俏。

5.4 Contact（聯絡方式）

內容：

標題：一起創作有趣的故事吧

Email：<ab50713845@gmail.com>（可點擊複製或直接 mailto）

簡易聯絡表單（姓名、Email、訊息）→ 建議串接 Formspree、EmailJS 或 Netlify Forms 類服務

社群連結預留位置（Behance、Instagram、YouTube 等，待提供）

視覺：簡潔，深色背景搭配清楚表單。

5.5 其他建議呈現內容

Showreel / 精華影片：在 Hero 下方或 About 區塊嵌入短影片

創作流程（可選區塊）：簡單說明從分鏡 → 角色設計 → 動畫製作的流程

Footer：版權、Email、社群圖示、回到頂部按鈕

SEO 基礎：每個頁面設定 title、description、Open Graph 圖片

6\. 內容與素材需求清單

開發前請準備：

高解析作品圖片（建議至少 8–12 件精選）

《積木 ToyBrick》與「嘿！這次是我覺得」相關素材與說明文字

個人照片或自畫像

Showreel 影片連結（YouTube / Vimeo）

完整自我介紹文案

作品分類與標籤

社群連結（若有）

7\. 響應式與無障礙

斷點建議：手機（&lt; 768px）、平板（768–1024px）、桌面（&gt; 1024px）

觸控友善按鈕尺寸

圖片 alt 文字完整

鍵盤可操作導航與 Modal

對比度符合 WCAG AA 基本標準

8\. 開發與部署流程建議

使用 Vite 建立 React 專案

設定 Tailwind + 深色主題變數

實作各區塊與路由

作品資料先用 JSON 或 Markdown 管理（方便日後擴充 CMS）

本地測試完成後，建置 npm run build

推送到 GitHub，在 Render 連接 Repository 並設定 Static Site 部署

設定自訂網域（可選）

9\. 未來可擴充方向

後台管理作品（Headless CMS，如 Sanity / Contentful）

多語言（中/英）

作品下載權限或密碼保護

部落格 / 創作筆記

深色 / 淺色主題切換

**4\. 系統目錄結構規劃**

Plaintext

```
portfolio-website/
├── public/
│   ├── models/            # 最佳化後之 3D 模型 (.glb / draco)
│   │   ├── hero-avatar.glb
│   │   └── project-01.glb
│   └── textures/          # Matcap 貼圖、環境貼圖 (HDR/EXR)
├── src/
│   ├── assets/            # 動漫風 UI 向量圖、字型、音效 (選配)
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── CanvasContainer.jsx  # 全局 Canvas 與環境光設定
│   │   │   ├── ModelViewer.jsx      # 作品詳情專用 3D 檢視器 (含 Wireframe 切換)
│   │   │   └── HeroScene.jsx        # 首頁 Hero 3D 物件與動態
│   │   ├── common/
│   │   │   ├── AnimeButton.jsx      # 漫畫描邊特效按鈕
│   │   │   ├── Modal.jsx            # 漫畫框彈窗
│   │   │   └── LoadingScreen.jsx    # 動漫進度條載入畫面
│   │   └── sections/
│   │       ├── HeroSection.jsx
│   │       ├── WorksSection.jsx
│   │       ├── AboutSection.jsx
│   │       └── ContactSection.jsx
│   ├── data/
│   │   ├── projects.js              # 3D 作品資料、多邊形數、模型路徑清單
│   │   └── skills.js                # 技能與能力值數據
│   ├── hooks/
│   │   └── useModelLoader.js        # 監聽模型載入進度之自訂 Hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                    # Tailwind 設定與客製漫畫濾鏡
├── package.json
└── vite.config.js
```

**5\. Render 託管部署規範**

在 Render 上部署此 React 專案，應設定為 **Static Site** 模式：

| **項目**                     | **設定值**                                                  | **說明**                               |
| ---------------------------- | ----------------------------------------------------------- | -------------------------------------- |
| **Service Type**             | **Static Site**                                             | 靜態網站服務，提供免費 CDN 與 SSL 憑證 |
| **Build Command**            | npm install && npm run build                                | 執行相依套件安裝與 Vite 前端編譯       |
| **Publish Directory**        | dist                                                        | Vite 預設的靜態輸出資料夾              |
| **Rewrite / Redirect Rules** | Source: /\*<br><br>Dest: /index.html<br><br>Action: Rewrite | 避免單頁路由 (SPA) 重新整理出現 404    |

**部署特別注意事項**

- **大檔管理**：3D 模型檔建議透過 gltf-pipeline 或 draco 進行無損/低損壓縮，避免 Git 儲存庫過大造成 Render 建置逾時；若單一模型大於 25MB，建議託管於外部雲端空間（如 Cloudflare R2 / AWS S3）並以 CDN 網址載入。
- **快取設定**：針對 public/models/\*.glb 靜態資源確認具備快取標頭，加速使用者重複瀏覽時的模型加載體驗。