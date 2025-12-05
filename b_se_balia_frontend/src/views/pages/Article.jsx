import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchArticleBySlug, fetchArticles } from '../../api/endpoints';
import { useFetch } from '../../hooks/useFetch';
import Loader from '../shared/Loader';
import ErrorState from '../shared/ErrorState';
import ArticleGrid from '../articles/ArticleGrid';

export default function Article() {
  const { slug } = useParams();

  const { data: article, loading, error } = useFetch(async () => {
    const res = await fetchArticleBySlug(slug);
    return res;
  }, [slug], { retries: 1, initial: null });

  const { data: related } = useFetch(async () => {
    if (!article) return [];
    const res = await fetchArticles({ category: article.category });
    return res.filter(a => a.slug !== article.slug).slice(0, 4);
  }, [article], { retries: 0, initial: [] });

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error.message} />;
  if (!article) return <ErrorState message="Not found" />;

  return (
    <article className="bg-surface rounded shadow-md">
      <img src={article.image} alt="" style={{width:'100%', height:420, objectFit:'cover', borderTopLeftRadius:12, borderTopRightRadius:12}} />
      <div className="p-4">
        <div className="badge" style={{marginBottom:8}}>{article.category}</div>
        <h1 style={{margin: '6px 0 8px'}}>{article.title}</h1>
        <div style={{color:'var(--text-700)', fontSize:14, marginBottom:12}}>
          By {article.author} • {new Date(article.date).toLocaleDateString()}
        </div>
        <p style={{lineHeight:1.7}}>{article.content}</p>
        <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:12}}>
          {article.tags?.map(t => <span key={t} className="badge">#{t}</span>)}
        </div>
        <div className="mt-4">
          <Link to={`/category/${article.category}`} className="badge">More in {article.category}</Link>
        </div>
      </div>

      {related?.length ? (
        <div className="p-4">
          <h3 style={{margin:'8px 0 16px'}}>Related</h3>
          <ArticleGrid items={related} />
        </div>
      ) : null}
    </article>
  );
}
