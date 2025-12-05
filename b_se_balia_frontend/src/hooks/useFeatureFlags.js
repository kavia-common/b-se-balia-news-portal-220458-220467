const parseFlags = () => {
  const raw = (process.env.REACT_APP_FEATURE_FLAGS || '').trim();
  const flags = {};
  raw.split(',').map(s => s.trim()).filter(Boolean).forEach(pair => {
    const [k, v] = pair.split('=');
    flags[k] = (v ?? 'true').toLowerCase() === 'true';
  });
  return flags;
};

/**
 * PUBLIC_INTERFACE
 * useFeatureFlags exposes parsed flags and experiments enabled state.
 */
export function useFeatureFlags() {
  const flags = parseFlags();
  const experiments = (process.env.REACT_APP_EXPERIMENTS_ENABLED || 'false').toLowerCase() === 'true';
  return { flags, experiments };
}
