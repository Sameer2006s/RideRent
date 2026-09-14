import { useMemo, useState } from 'react';
import { cars } from './data/cars.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CarSearch from './components/CarSearch.jsx';
import CarCard from './components/CarCard.jsx';
import CarDetailsModal from './components/Modal.jsx';
import BookingModal from './components/BookingModal.jsx';
import { About, Benefits, Contact, Footer, HowItWorks } from './components/Sections.jsx';
import { ArrowRight, CarFront } from 'lucide-react';

const initialFilters = { query: '', type: 'all', seats: 'all', fuel: 'all', transmission: 'all', price: 'all', sort: 'featured' };

export default function App() {
  const [filters, setFilters] = useState(initialFilters);
  const [detailsCar, setDetailsCar] = useState(null);
  const [bookingCar, setBookingCar] = useState(null);
  const visibleCars = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const result = cars.filter(car => {
      const matchQuery = !query || `${car.name} ${car.category}`.toLowerCase().includes(query);
      const matchType = filters.type === 'all' || car.category === filters.type;
      const matchSeats = filters.seats === 'all' || car.seats >= Number(filters.seats);
      const matchFuel = filters.fuel === 'all' || car.fuel === filters.fuel;
      const matchTransmission = filters.transmission === 'all' || car.transmission === filters.transmission;
      const matchPrice = filters.price === 'all' || car.price <= Number(filters.price);
      return matchQuery && matchType && matchSeats && matchFuel && matchTransmission && matchPrice;
    });
    if (filters.sort === 'low') return [...result].sort((a, b) => a.price - b.price);
    if (filters.sort === 'high') return [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [filters]);
  const openBooking = car => { setDetailsCar(null); setBookingCar(car); };
  return <>
    <Navbar />
    <main>
      <Hero />
      <CarSearch filters={filters} setFilters={setFilters} onReset={() => setFilters(initialFilters)} />
      <section className="section fleet-section" id="cars"><div className="shell"><div className="section-heading fleet-heading"><div><span className="section-kicker">THE RIDERENT FLEET</span><h2>Find a car for <em>every journey.</em></h2></div><div className="fleet-count"><strong>{visibleCars.length}</strong><span>of {cars.length}<br />cars shown</span></div></div>{visibleCars.length ? <div className="cars-grid">{visibleCars.map((car, index) => <CarCard key={car.name} car={car} index={index} onDetails={setDetailsCar} onBook={openBooking} />)}</div> : <div className="empty-state"><CarFront size={32} /><h3>No cars match those filters</h3><p>Try widening your search and we’ll get you moving.</p><button className="button button-outline" onClick={() => setFilters(initialFilters)}>Reset filters <ArrowRight size={15} /></button></div>}</div></section>
      <HowItWorks /><Benefits /><About /><Contact />
    </main>
    <Footer />
    <CarDetailsModal car={detailsCar} onClose={() => setDetailsCar(null)} onBook={openBooking} />
    <BookingModal car={bookingCar} cars={cars} onClose={() => setBookingCar(null)} />
    <iframe name="bookingResponseFrame" title="Google Form response" className="hidden-frame" />
  </>;
}
