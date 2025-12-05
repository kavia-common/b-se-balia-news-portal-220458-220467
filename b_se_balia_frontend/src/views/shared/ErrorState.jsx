import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ErrorState shows an error banner with message.
 */
export default function ErrorState({ message = 'Something went wrong.' }) {
  return (
    <div className="rounded px-4 py-4" style={{background:'rgba(239,68,68,0.12)', color:'var(--error-500)', border:'1px solid var(--border)'}}>
      ⚠️ {message}
    </div>
  );
}
