import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Loader shows a subtle animated spinner.
 */
export default function Loader() {
  return (
    <div style={{display:'flex', alignItems:'center', gap:8}}>
      <span className="spinner" style={{
        width:16, height:16, border:'2px solid var(--border)', borderTopColor:'var(--primary-600)',
        borderRadius:'50%', display:'inline-block', animation:'spin 1s linear infinite'
      }}/>
      <span>Loading...</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
