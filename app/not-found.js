import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 style={{ fontFamily: "Playfair Display", fontSize: 55 }}>
          Page not found
        </h1>
        <p className="muted">The page you're looking for doesn't exist.</p>
        <Link className="btn" href="/">
          Back Home
        </Link>
      </div>
    </div>
  );
}
