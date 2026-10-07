import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Creativa Care | Compassionate Care. Comfort at Home.",
  description: "Personalized non-medical home care, companionship and light household support in Kingston, Ontario.",
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
