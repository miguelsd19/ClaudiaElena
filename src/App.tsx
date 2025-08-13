import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BRAND } from "./data/brand";

export default function App() {
  useEffect(() => { document.title = `${BRAND.name} – Portafolio`; }, []);
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
