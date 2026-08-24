import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Home from "./pages/Home";
import JournalIndex from "./pages/JournalIndex";
import JournalPost from "./pages/JournalPost";
import PlanYourJourney from "./pages/PlanYourJourney";

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
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<JournalIndex />} />
          <Route path="/journal/:slug" element={<JournalPost />} />
          <Route path="/plan-your-journey" element={<PlanYourJourney />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
