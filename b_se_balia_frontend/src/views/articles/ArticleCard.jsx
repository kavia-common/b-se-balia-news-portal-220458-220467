import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../shared/Badge';

/**
 * PUBLIC_INTERFACE
 * ArticleCard displays a single article in a card layout.
 */
export default function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.slug}`} className="bg-surface rounded shadow-sm" style={{textDecoration:'none', color:'inherit', display:'block'}}>
      <div style={{position:'relative'}}>
        <img src={article.image} alt="" style={{width:'100%', height:180, objectFit:'cover', borderTopLeftRadius:12, borderTopRightRadius:12}} />
        <div style={{position:'absolute', top:8, left:8}}><Badge>{article.category}</Badge></div>
      </div>
      <div className="p-4">
        <div style={{fontWeight:700, marginBottom:8}}>{article.title}</div>
        <div style={{color:'var(--text-700)', fontSize:14}}>{article.excerpt}</div>
      </div>
    </Link>
  );
}
