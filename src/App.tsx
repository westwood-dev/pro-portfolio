import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import ScrollToTop from './components/ScrollToTop';
import ThemeChanger from './components/ThemeChanger';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const { currentTheme, setTheme } = useTheme();
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    // Add theme-ready class once theme is initialized
    if (currentTheme) {
      setIsThemeReady(true);
    }
  }, [currentTheme]);

  const handleThemeChange = () => {
    if (!currentTheme) return;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleThemeSelect = (newTheme: string) => {
    if (!newTheme) return;
    setTheme(newTheme);
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className={`bg-colour text-colour site-cont ${isThemeReady ? 'theme-ready' : 'theme-loading'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/project/:title" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="footer-cont">
          <ThemeChanger
            currentTheme={currentTheme || 'red'}
            showSelector={true}
            onChangeTheme={handleThemeChange}
            onSelectTheme={handleThemeSelect}
          />
          <span className="text-colour">William Westwood | 2025</span>
          <div>
            <a href="https://design.williamwestwood.com" className="text-colour">
              design work
              <Icon icon="material-symbols:arrow-outward" width="1rem" className="text-colour" />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
