import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/pages/Home';
import Article from '../views/pages/Article';
import Category from '../views/pages/Category';
import Trending from '../views/pages/Trending';
import About from '../views/pages/About';
import Header from '../views/layout/Header';
import Footer from '../views/layout/Footer';
import Sidebar from '../views/layout/Sidebar';
import '../styles/theme.css';
import '../styles/utilities.css';
import './router.css';

/**
 * PUBLIC_INTERFACE
 * AppRouter is the main routing component defining all application routes.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app-root bg-app text-app">
        <Header />
        <main className="container app-grid">
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:slug" element={<Article />} />
              <Route path="/category/:slug" element={<Category />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <aside className="sidebar-area">
            <Sidebar />
          </aside>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
