import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const UIThemeContext = createContext({
  theme: 'light',
  // PUBLIC_INTERFACE
  toggleTheme: () => {},
});

/**
 * PUBLIC_INTERFACE
 * UIThemeProvider manages light/dark theme state and persists preference.
 */
export function UIThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
  }), [theme]);

  return (
    <UIThemeContext.Provider value={value}>
      {children}
    </UIThemeContext.Provider>
  );
}

/**
 * PUBLIC_INTERFACE
 * useUITheme returns current theme and toggle.
 */
export function useUITheme() {
  return useContext(UIThemeContext);
}
