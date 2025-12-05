import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles } from '../../api/endpoints';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../shared/Loader';
import ErrorState from '../shared/ErrorState';
import ArticleGrid from '../articles/ArticleGrid';

export default function Category() {
  const { slug } = useParams();
  const { data, loading, error } = useFetch(async () => {
    const res = await fetchArticles({ category: slug });
    return res;
  }, [slug], { retries: 1, initial: [] });

  return (
    <section>
      <h2 style={{margin:'8px 0 16px', textTransform:'capitalize'}}>{slug}</h2>
      {loading ? <Loader /> : error ? <ErrorState message={error.message}/> : <ArticleGrid items={data} />}
    </section>
  );
}
