# B se Balia – Frontend

Modern React frontend for the B se Balia news portal. Built with Create React App, plain CSS, and a small component set. Ocean Professional theme (blue/amber accents), subtle gradients, rounded corners, and minimal shadows.

## Quick Start

1) Install
- npm install

2) Configure environment
- Copy .env.example to .env and adjust vars (Create React App requires REACT_APP_ prefix)
- For mock data (no backend): leave REACT_APP_API_BASE empty or set REACT_APP_FEATURE_FLAGS=mockApi=true

3) Run
- npm start
- Open http://localhost:3000

## Routes

- / – Home (featured carousel, trending banner, latest grid)
- /article/:slug – Article details with related items
- /category/:slug – Filtered list by category
- /trending – Trending articles list
- /about – About page

## Theme

- Palette: primary #2563EB, secondary/success #F59E0B, error #EF4444
- Background #f9fafb, Surface #ffffff, Text #111827
- Subtle gradient utility: from blue-500/10 to gray-50
- Light/dark mode toggle in header

CSS variables defined in src/styles/theme.css, utilities in src/styles/utilities.css.

## Data Layer

- Axios client configured in src/api/client.js (timeout, headers, error normalization)
- Endpoints in src/api/endpoints.js
- useFetch hook with cancellation and retry in src/hooks/useFetch.js
- Feature flags in src/hooks/useFeatureFlags.js
- Contexts: UIThemeProvider (theme) and AppProvider (cache: categories/trending)

### Mock Fallback
If REACT_APP_API_BASE is empty or REACT_APP_FEATURE_FLAGS includes mockApi=true,
src/api/mock.js serves featured, trending, categories, and articles.

## Environment Variables

See .env.example for all supported REACT_APP_* variables:
- REACT_APP_API_BASE, REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL, REACT_APP_WS_URL,
  REACT_APP_NODE_ENV, REACT_APP_NEXT_TELEMETRY_DISABLED, REACT_APP_ENABLE_SOURCE_MAPS,
  REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL, REACT_APP_FEATURE_FLAGS,
  REACT_APP_EXPERIMENTS_ENABLED

## Notes

- No UI framework; components are accessible and keyboard-friendly.
- Minimal dependencies: react-router-dom, axios.
