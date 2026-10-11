import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div>
        <Link href="/" className="brand footer-brand"><span className="brand-mark">♥</span><span><strong>CREATIVA CARE</strong><small>Home Care • Compassion • Independence</small></span></Link>
        <p className="muted">Compassionate non-medical home care helping people live safely, comfortably and independently at home.</p>
      </div>
      <div><h4>Explore</h4><Link href="/about">About</Link><Link href="/services">Services</Link></div>
      <div><h4>Support</h4><Link href="/contact">Contact</Link><Link href="/contact">Request Care</Link></div>
      <div><h4>Contact</h4><p><MapPin size={15}/> 162 Briceland, Kingston, ON</p><p><Phone size={15}/> <a href="tel:+16135837320">613-583-7320</a></p><p><Mail size={15}/> <a href="mailto:info@creativacare.ca">info@creativacare.ca</a></p></div>
    </div>
    <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Creativa Care. All rights reserved.</span><span>Kingston, Ontario</span></div></div>
  </footer>;
}
