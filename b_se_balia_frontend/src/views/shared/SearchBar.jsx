import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * SearchBar with debounce; emits value via onChange after delay.
 */
export default function SearchBar({ onChange, delay = 300, placeholder = 'Search news...' }) {
  const [value, setValue] = useState('');
  const timer = useRef(null);

  const debouncedChange = useMemo(() => (val) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      onChange && onChange(val);
    }, delay);
  }, [onChange, delay]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return (
    <div className="rounded" style={{display:'flex', alignItems:'center', gap:8, padding:'8px 12px', border:'1px solid var(--border)', background:'var(--surface)'}}>
      <span role="img" aria-label="search">🔎</span>
      <input
        value={value}
        onChange={(e)=>{ setValue(e.target.value); debouncedChange(e.target.value); }}
        placeholder={placeholder}
        style={{border:'none', outline:'none', background:'transparent', color:'var(--text-900)'}}
      />
    </div>
  );
}
