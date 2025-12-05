import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * TrendingBanner shows top trending headlines in a horizontal scroller.
 */
export default function TrendingBanner({ items = [] }) {
  return (
    <div className="bg-subtle-gradient rounded p-4 shadow-sm" style={{overflowX:'auto', whiteSpace:'nowrap'}}>
      <span className="badge" style={{marginRight:12}}>Trending</span>
      {items.map((a, idx) => (
        <Link key={a.slug} to={`/article/${a.slug}`} style={{marginRight:16, color:'inherit', textDecoration:'none'}}>
          {a.title}{idx < items.length-1 ? ' • ' : ''}
        </Link>
      ))}
    </div>
  );
}
