import React from 'react';
import ArticleCard from './ArticleCard';

/**
 * PUBLIC_INTERFACE
 * ArticleGrid renders a responsive grid of articles.
 */
export default function ArticleGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {items.map(a => <ArticleCard key={a.slug} article={a} />)}
    </div>
  );
}
