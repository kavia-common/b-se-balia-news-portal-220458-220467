import React from 'react';
import { fetchTrendingArticles } from '../../api/endpoints';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../shared/Loader';
import ErrorState from '../shared/ErrorState';
import ArticleGrid from '../articles/ArticleGrid';

export default function Trending() {
  const { data, loading, error } = useFetch(async () => {
    const res = await fetchTrendingArticles();
    return res;
  }, [], { retries: 1, initial: [] });

  return (
    <section>
      <h2 style={{margin:'8px 0 16px'}}>Trending</h2>
      {loading ? <Loader /> : error ? <ErrorState message={error.message}/> : <ArticleGrid items={data} />}
    </section>
  );
}
