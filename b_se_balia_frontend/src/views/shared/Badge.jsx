import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Badge renders a pill style label.
 */
export default function Badge({ children }) {
  return <span className="badge">{children}</span>;
}
