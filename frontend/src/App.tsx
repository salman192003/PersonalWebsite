import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SettingsHome from './components/SettingsHome';
import DesktopDashboard from './components/desktop/DesktopDashboard';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => { },
});

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('ios-portfolio-theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#F2F2F7';
    // Save to localStorage
    localStorage.setItem('ios-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        {isMobile ? (
          /* ── Mobile/Tablet: iOS Settings experience (UNCHANGED) ── */
          <div className={`ios-app-container ${theme}`}>
            <SettingsHome />
          </div>
        ) : (
          /* ── Desktop: visionOS-inspired floating glass dashboard ── */
          <DesktopDashboard />
        )}
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
