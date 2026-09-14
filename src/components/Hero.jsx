import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return <section className="hero" id="home"><div className="hero-glow" /><div className="shell hero-inner">
    <div className="hero-copy"><p className="eyebrow light"><span /> YOUR ROAD, YOUR WAY</p><h1>Rent your <em>dream car.</em></h1><p className="hero-lede">Clean, capable cars for the moments that matter. Browse a considered fleet and make your next journey feel effortless.</p><div className="hero-actions"><a className="button button-accent" href="#cars">Explore the fleet <ArrowDown size={17} /></a><a className="button button-ghost" href="#how-it-works">How it works <ArrowUpRight size={16} /></a></div><div className="hero-proof"><span><CheckCircle2 size={16} /> Verified vehicles</span><span><CheckCircle2 size={16} /> Flexible plans</span><span><CheckCircle2 size={16} /> Human support</span></div></div>
    <div className="hero-side"><span className="hero-side-label">THE OPEN ROAD</span><strong>01</strong><span>RideRent<br />since 2017</span></div>
  </div><a className="hero-scroll" href="#cars">Scroll to explore <ArrowDown size={14} /></a></section>;
}
