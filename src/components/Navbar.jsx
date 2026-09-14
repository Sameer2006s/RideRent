import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['Cars', '#cars'], ['How It Works', '#how-it-works'], ['About', '#about'], ['Contact', '#contact']];
  return <>
    <div className="top-strip"><div className="shell top-strip-inner"><span><span className="status-dot" /> Serving journeys across India</span><a href="tel:+9175718056155"><Phone size={13} /> 75718056155</a></div></div>
    <header className="site-header"><nav className="shell navbar" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">R</span><span>Ride<span>Rent</span></span></a>
      <button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      <div className={`nav-links ${open ? 'open' : ''}`}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#cars" onClick={() => setOpen(false)}>Book a car <ArrowRight size={15} /></a></div>
    </nav></header>
  </>;
}
