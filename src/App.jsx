import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { BottomNav } from './components/common/BottomNav';
import { HomePage } from './pages/HomePage';
import { AnimationReelsPage } from './pages/AnimationReelsPage';
import { IllustrationsPage } from './pages/IllustrationsPage';
import { AboutContactPage } from './pages/AboutContactPage';

export function App() {
  const getInitialPath = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (['animation-reels', 'illustrations', 'about-artist', 'contact'].includes(hash)) {
      if (hash === 'contact') return 'about-artist';
      return hash;
    }
    return 'showcase';
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['animation-reels', 'illustrations', 'about-artist', 'contact'].includes(hash)) {
        setCurrentPath(hash === 'contact' ? 'about-artist' : hash);
      } else {
        setCurrentPath('showcase');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path, targetId = null) => {
    setCurrentPath(path);
    window.location.hash = `#/${path}`;
    
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case 'animation-reels':
        return <AnimationReelsPage onNavigate={handleNavigate} />;
      case 'illustrations':
        return <IllustrationsPage />;
      case 'about-artist':
        return <AboutContactPage />;
      case 'showcase':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Header */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Content View */}
      <main className="flex-1 flex flex-col relative w-full pt-16 bg-surface min-h-[calc(100vh-4rem)]">
        {renderCurrentPage()}
        <Footer />
      </main>

      {/* Mobile Tab Navigation */}
      <BottomNav currentPath={currentPath} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
