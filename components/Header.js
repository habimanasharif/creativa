"use client";

import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["For Families", "/for-families"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">♥</span>
          <span><strong>CREATIVA CARE</strong><small>Home Care • Compassion • Independence</small></span>
        </Link>
        <nav className={open ? "desktop-nav mobile-open" : "desktop-nav"}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <a className="phone-link" href="tel:+16135837320"><Phone size={15}/> 613-583-7320</a>
          <Link className="btn btn-small" href="/contact" onClick={() => setOpen(false)}>Get Started</Link>
        </nav>
        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
      </div>
    </header>
  );
}
