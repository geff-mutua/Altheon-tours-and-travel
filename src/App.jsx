import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import JournalIndex from "./pages/JournalIndex";
import JournalPost from "./pages/JournalPost";
import PlanYourJourney from "./pages/PlanYourJourney";
import ServicesIndex from "./pages/ServicesIndex";
import ServiceDetail from "./pages/ServiceDetail";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import SafariCategory from "./pages/SafariCategory";
import SafariTour from "./pages/SafariTour";
import Analytics from "./components/Analytics";
import Seo from "./components/Seo";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // wait a tick for the target route's content to mount
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <Seo />
      <Analytics />
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<JournalIndex />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/plan-your-journey" element={<PlanYourJourney />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/safari-wildlife" element={<Navigate to="/services/tours-safaris" replace />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/safaris/:category" element={<SafariCategory />} />
          <Route path="/safaris/:category/:slug" element={<SafariTour />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
