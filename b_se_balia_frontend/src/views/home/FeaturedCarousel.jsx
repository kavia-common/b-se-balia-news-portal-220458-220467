import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * FeaturedCarousel shows a simple manual carousel for featured articles.
 */
export default function FeaturedCarousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const active = items[index] || null;
  const count = items.length;
  const next = () => setIndex((i)=> (i+1) % Math.max(count, 1));
  const prev = () => setIndex((i)=> (i-1+Math.max(count,1)) % Math.max(count,1));

  const dots = useMemo(() => new Array(count).fill(0), [count]);

  if (!active) return null;

  return (
    <div className="bg-surface rounded shadow-lg">
      <div style={{position:'relative'}}>
        <img src={active.image} alt="" style={{width:'100%', height:360, objectFit:'cover', borderTopLeftRadius:12, borderTopRightRadius:12}} />
        <button onClick={prev} aria-label="Previous" className="rounded" style={{position:'absolute', top:'50%', left:12, transform:'translateY(-50%)', background:'rgba(0,0,0,0.4)', color:'#fff', border:'none', padding:'8px 10px'}}>‹</button>
        <button onClick={next} aria-label="Next" className="rounded" style={{position:'absolute', top:'50%', right:12, transform:'translateY(-50%)', background:'rgba(0,0,0,0.4)', color:'#fff', border:'none', padding:'8px 10px'}}>›</button>
      </div>
      <div className="p-4">
        <Link to={`/article/${active.slug}`} style={{textDecoration:'none', color:'inherit'}}>
          <div className="badge" style={{marginBottom:8, display:'inline-block'}}>{active.category}</div>
          <h3 style={{margin:'4px 0', fontSize:22}}>{active.title}</h3>
          <p style={{margin:0, color:'var(--text-700)'}}>{active.excerpt}</p>
        </Link>
      </div>
      <div style={{display:'flex', gap:6, justifyContent:'center', padding:'8px 0 12px'}}>
        {dots.map((_, i)=>(
          <button key={i} onClick={()=>setIndex(i)} aria-label={`Go to slide ${i+1}`} style={{
            width:8, height:8, borderRadius:'50%', border:'none',
            background: i===index ? 'var(--primary-600)' : 'var(--border)'
          }}/>
        ))}
      </div>
    </div>
  );
}
