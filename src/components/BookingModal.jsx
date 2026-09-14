import { useEffect, useState } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

const endpoint = 'https://docs.google.com/forms/d/e/1FAIpQLSeCvIp66sDRzyDtD9-RFEYvsgOQjDEl3CccNdS3JPQeFJk1cQ/formResponse';
const entries = { name:'entry.1221809223', mobile:'entry.1199627195', email:'entry.930901229', car:'entry.1378982466', pickup:'entry.1988584529', returnDate:'entry.824216254', pickupLocation:'entry.725228533', dropLocation:'entry.804591596', passengers:'entry.98938553', requirements:'entry.814945555' };

export default function BookingModal({ car, cars, onClose }) {
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().slice(0, 10);
  useEffect(() => { setError(''); setSent(false); }, [car]);
  if (!car) return null;
  const submit = event => {
    const form = event.currentTarget;
    const data = new FormData(form);
    const mobile = String(data.get(entries.mobile) || '').trim();
    const pickup = String(data.get(entries.pickup) || '');
    const returnDate = String(data.get(entries.returnDate) || '');
    if (!/^[6-9]\d{9}$/.test(mobile)) { event.preventDefault(); setError('Enter a valid 10-digit Indian mobile number.'); return; }
    if (!pickup || !returnDate || returnDate < pickup) { event.preventDefault(); setError('Return date must be the same as or after pickup date.'); return; }
    setError('');
    window.setTimeout(() => { setSent(true); form.reset(); }, 700);
  };
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}><div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title"><button className="modal-close" onClick={onClose} aria-label="Close booking form"><X /></button><div className="booking-heading"><span className="section-kicker">SECURE YOUR RIDE</span><h2 id="booking-title">Start your <em>journey.</em></h2><p>Send us the details and our team will contact you shortly.</p></div><form className="booking-form" action={endpoint} method="post" target="bookingResponseFrame" onSubmit={submit}><div className="booking-fields"><label>Full Name<input name={entries.name} required autoComplete="name" /></label><label>Mobile<input name={entries.mobile} type="tel" inputMode="numeric" pattern="[6-9][0-9]{9}" placeholder="10-digit mobile number" required /></label><label>Email<input name={entries.email} type="email" required autoComplete="email" /></label><label>Selected Car<select name={entries.car} defaultValue={car.name} required>{cars.filter(item => item.available).map(item => <option key={item.name}>{item.name}</option>)}</select></label><label>Pickup Date<input name={entries.pickup} type="date" min={today} required /></label><label>Return Date<input name={entries.returnDate} type="date" min={today} required /></label><label>Pickup Location<input name={entries.pickupLocation} required /></label><label>Drop Location<input name={entries.dropLocation} required /></label><label>Passengers<input name={entries.passengers} type="number" min="1" max="50" required /></label><label className="field-wide">Additional Requirements<textarea name={entries.requirements} rows="3" /></label></div>{error && <p className="form-error" role="alert">{error}</p>}{sent && <div className="success-message" role="status"><ShieldCheck /><span><strong>Booking request submitted successfully.</strong><br />Our team will contact you shortly.</span></div>}<button className="button button-accent full-width" type="submit">Submit booking request <ArrowRight size={16} /></button></form></div></div>;
}
