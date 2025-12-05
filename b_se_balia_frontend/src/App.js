import React from 'react';
import AppRouter from './routes/AppRouter';
import { UIThemeProvider } from './store/uiThemeContext';
import { AppProvider } from './store/appContext';

/**
 * PUBLIC_INTERFACE
 * App entry rendering the router and application providers.
 */
function App() {
  return (
    <UIThemeProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </UIThemeProvider>
  );
}

export default App;
