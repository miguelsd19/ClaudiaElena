import { useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
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
