import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from '../shared/SearchBar';
import { useUITheme } from '../../store/uiThemeContext';
import logo from '../../assets/logo.svg';

export default function Header() {
  const { theme, toggleTheme } = useUITheme();

  return (
    <header className="bg-surface shadow-md">
      <div className="container py-4">
        <div className="header-top" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:16}}>
          <Link to="/" className="brand" style={{display:'flex', alignItems:'center', gap:12, color:'inherit', textDecoration:'none'}}>
            <img src={logo} alt="B se Balia" width="40" height="40" />
            <div>
              <div style={{fontSize:22, fontWeight:800}}>B se Balia</div>
              <div style={{fontSize:12, color:'var(--text-700)'}}>Desi, contemporary, and truly local</div>
            </div>
          </Link>
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <SearchBar />
            <button
              onClick={toggleTheme}
              className="rounded px-4 py-4"
              style={{background:'rgba(245,158,11,0.12)', color:'var(--secondary-500)', border:'1px solid var(--border)'}}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>

        <nav className="mt-4" style={{display:'flex', gap:16, flexWrap:'wrap'}}>
          <NavLink to="/" end
            style={({isActive})=>({ padding:'8px 12px', borderRadius:8, textDecoration:'none', color:isActive?'#fff':'var(--text-900)', background:isActive?'var(--primary-600)':'transparent'})}>
            Home
          </NavLink>
          <NavLink to="/trending"
            style={({isActive})=>({ padding:'8px 12px', borderRadius:8, textDecoration:'none', color:isActive?'#fff':'var(--text-900)', background:isActive?'var(--primary-600)':'transparent'})}>
            Trending
          </NavLink>
          <NavLink to="/about"
            style={({isActive})=>({ padding:'8px 12px', borderRadius:8, textDecoration:'none', color:isActive?'#fff':'var(--text-900)', background:isActive?'var(--primary-600)':'transparent'})}>
            About
          </NavLink>
        </nav>
      </div>
      <div className="bg-subtle-gradient" style={{height:4}} />
    </header>
  );
}
