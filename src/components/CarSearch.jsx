import { Search, SlidersHorizontal, X } from 'lucide-react';

export default function CarSearch({ filters, setFilters, onReset }) {
  const update = (key, value) => setFilters(current => ({ ...current, [key]: value }));
  return <section className="search-wrap"><div className="shell search-panel"><div className="search-head"><div className="section-kicker"><SlidersHorizontal size={15} /> FILTER THE FLEET</div><h2>Find the right <em>ride.</em></h2><button className="clear-button" onClick={onReset}><X size={14} /> Reset</button></div><div className="search-grid">
    <label className="search-field search-wide"><Search size={17} /><input value={filters.query} onChange={e => update('query', e.target.value)} placeholder="Search by car name..." /></label>
    <label>Car type<select value={filters.type} onChange={e => update('type', e.target.value)}><option value="all">All types</option><option>SUV</option><option>Sedan</option><option>Hatchback</option><option>MUV</option></select></label>
    <label>Seats<select value={filters.seats} onChange={e => update('seats', e.target.value)}><option value="all">Any capacity</option><option value="5">5+ seats</option><option value="7">7 seats</option></select></label>
    <label>Fuel<select value={filters.fuel} onChange={e => update('fuel', e.target.value)}><option value="all">Any fuel</option><option>Petrol</option><option>Diesel</option></select></label>
    <label>Transmission<select value={filters.transmission} onChange={e => update('transmission', e.target.value)}><option value="all">Any transmission</option><option>Manual</option><option>Automatic</option></select></label>
    <label>Price<select value={filters.price} onChange={e => update('price', e.target.value)}><option value="all">Any price</option><option value="2000">Under ₹2,000</option><option value="3000">Under ₹3,000</option><option value="4000">Under ₹4,000</option></select></label>
    <label>Sort<select value={filters.sort} onChange={e => update('sort', e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label>
  </div></div></section>;
}
