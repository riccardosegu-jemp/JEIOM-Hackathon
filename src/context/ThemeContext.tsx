import React, { createContext, useContext, useState, useEffect } from 'react';

export type GraphicTheme = 'coach' | 'linear' | 'stripe' | 'editorial';
export type ViewMode = 'full-landing' | 'pitch-mode' | 'gtm-hub';

interface ThemeContextType {
  theme: GraphicTheme;
  setTheme: (theme: GraphicTheme) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  toggleDark: () => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<GraphicTheme>('coach');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<ViewMode>('full-landing');

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    root.classList.remove('theme-coach', 'theme-linear', 'theme-stripe', 'theme-editorial');
    root.classList.add(`theme-${theme}`);
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, setIsDark, toggleDark, viewMode, setViewMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
