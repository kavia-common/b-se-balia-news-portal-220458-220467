import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCategories, fetchTrendingArticles } from '../../api/endpoints';
import { useApp } from '../../store/appContext';
import Loader from '../shared/Loader';
import ErrorState from '../shared/ErrorState';
import { useFetch } from '../../hooks/useFetch';

export default function Sidebar() {
  const { categories, setCategories, trending, setTrending } = useApp();

  const { data: catData, error: catError, loading: catLoading } = useFetch(async () => {
    if (categories.length) return categories;
    const res = await fetchCategories();
    return res;
  }, [categories], { retries: 0, initial: [] });

  const { data: trendData, error: trendError, loading: trendLoading } = useFetch(async () => {
    if (trending.length) return trending;
    const res = await fetchTrendingArticles();
    return res;
  }, [trending], { retries: 0, initial: [] });

  useEffect(() => {
    if (catData?.length) setCategories(catData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catData]);

  useEffect(() => {
    if (trendData?.length) setTrending(trendData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trendData]);

  return (
    <div className="bg-surface rounded shadow-sm p-4">
      <div style={{fontWeight:700, marginBottom:12}}>Categories</div>
      {catLoading ? <Loader /> : catError ? <ErrorState message={catError.message}/> : (
        <ul style={{listStyle:'none', padding:0, margin:0, display:'grid', gap:8}}>
          {catData?.map(cat => (
            <li key={cat.slug}>
              <Link to={`/category/${cat.slug}`} className="badge">{cat.name}</Link>
            </li>
          ))}
        </ul>
      )}

      <div style={{fontWeight:700, marginTop:24, marginBottom:12}}>Trending</div>
      {trendLoading ? <Loader /> : trendError ? <ErrorState message={trendError.message}/> : (
        <div style={{display:'grid', gap:12}}>
          {trendData?.slice(0,3).map(a => (
            <Link key={a.slug} to={`/article/${a.slug}`} style={{display:'flex', gap:12, textDecoration:'none', color:'inherit'}}>
              <img src={a.image} alt="" width="72" height="48" style={{objectFit:'cover', borderRadius:8}} />
              <div style={{fontSize:14, fontWeight:600}}>{a.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
