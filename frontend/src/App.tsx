import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HomeMobile from './components/HomeMobile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => { },
});

function App() {
  const [theme, setTheme] = useState('light');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    // Set background color based on theme
    document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        {isMobile ? (
          // Mobile-only experience
          <div className="min-h-screen bg-black">
            <Routes>
              <Route path="/" element={<HomeMobile />} />
              <Route path="/about" element={<HomeMobile />} />
              <Route path="/projects" element={<HomeMobile />} />
              <Route path="/contact" element={<HomeMobile />} />
              <Route path="/resume" element={<HomeMobile />} />
            </Routes>
          </div>
        ) : (
          // Desktop experience
          <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <Navbar />
            <main className={`${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
