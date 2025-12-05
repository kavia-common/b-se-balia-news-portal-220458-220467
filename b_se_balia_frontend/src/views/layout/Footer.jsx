import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="bg-subtle-gradient" style={{height:4}} />
      <div className="container py-4" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:16}}>
        <div style={{color:'var(--text-700)'}}>© {new Date().getFullYear()} B se Balia</div>
        <div style={{display:'flex', gap:12}}>
          <a href="#" aria-label="Privacy">Privacy</a>
          <a href="#" aria-label="Terms">Terms</a>
          <a href="#" aria-label="Contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
