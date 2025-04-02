import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import themes from '../data/themes';
import type { ThemeVariant } from '../types/theme';

interface ThemeContextType {
  activeTheme: ThemeVariant;
  setActiveTheme: (theme: ThemeVariant) => void;
  currentTheme: typeof themes.umbra;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ThemeVariant>('umbra');

  const currentTheme = themes[activeTheme];

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
