import React, { useEffect } from 'react';
import { fetchArticles, fetchFeaturedArticles, fetchTrendingArticles } from '../../api/endpoints';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../shared/Loader';
import ErrorState from '../shared/ErrorState';
import FeaturedCarousel from '../home/FeaturedCarousel';
import TrendingBanner from '../home/TrendingBanner';
import ArticleGrid from '../articles/ArticleGrid';
import { useApp } from '../../store/appContext';

export default function Home() {
  const { trending, setTrending } = useApp();

  const { data: featured, loading: loadingFeatured, error: errorFeatured } = useFetch(async () => {
    const res = await fetchFeaturedArticles();
    return res;
  }, [], { retries: 1, initial: [] });

  const { data: trendData, loading: loadingTrend, error: errorTrend } = useFetch(async () => {
    if (trending.length) return trending;
    const res = await fetchTrendingArticles();
    return res;
  }, [trending], { retries: 0, initial: [] });

  const { data: latest, loading: loadingLatest, error: errorLatest } = useFetch(async () => {
    const res = await fetchArticles();
    return res;
  }, [], { retries: 1, initial: [] });

  useEffect(() => {
    if (trendData?.length) setTrending(trendData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trendData]);

  return (
    <div className="grid" style={{gap:'var(--space-6)'}}>
      {loadingTrend ? <Loader /> : errorTrend ? <ErrorState message={errorTrend.message}/> : <TrendingBanner items={trendData} />}

      {loadingFeatured ? <Loader /> : errorFeatured ? <ErrorState message={errorFeatured.message}/> : <FeaturedCarousel items={featured} />}

      <section>
        <h2 style={{margin:'8px 0 16px'}}>Latest</h2>
        {loadingLatest ? <Loader /> : errorLatest ? <ErrorState message={errorLatest.message}/> : <ArticleGrid items={latest} />}
      </section>
    </div>
  );
}
