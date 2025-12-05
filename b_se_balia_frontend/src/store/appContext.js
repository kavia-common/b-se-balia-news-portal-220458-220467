import React, { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext({
  categories: [],
  trending: [],
  setCategories: () => {},
  setTrending: () => {},
});

/**
 * PUBLIC_INTERFACE
 * AppProvider provides lightweight client cache for categories and trending.
 */
export function AppProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [trending, setTrending] = useState([]);

  const value = useMemo(() => ({
    categories,
    trending,
    setCategories,
    setTrending,
  }), [categories, trending]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * PUBLIC_INTERFACE
 * useApp exposes cached lists for consumption.
 */
export function useApp() {
  return useContext(AppContext);
}
