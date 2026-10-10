import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://creativacare.ca"),
  title: {
    default: "Creativa Care | Home Care in Kingston, Ontario",
    template: "%s | Creativa Care",
  },
  description:
    "Compassionate non-medical home care in Kingston, Ontario. Explore personal care, companionship, respite support and light housekeeping tailored to your needs.",
  applicationName: "Creativa Care",
  category: "health",
  keywords: [
    "home care Kingston Ontario",
    "non-medical home care Kingston",
    "senior care Kingston",
    "personal care at home",
    "elderly companionship",
    "respite care Kingston",
    "light housekeeping for seniors",
    "in-home support Kingston",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Creativa Care",
    title: "Creativa Care | Compassionate Home Care in Kingston",
    description:
      "Personalized non-medical home care, companionship and household support in Kingston, Ontario.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creativa Care | Home Care in Kingston, Ontario",
    description:
      "Personalized non-medical home care, companionship and household support in Kingston, Ontario.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
