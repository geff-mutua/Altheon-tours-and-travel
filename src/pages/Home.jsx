import Hero from "../components/Hero";
import Intro from "../components/Intro";
import JourneysInMotion from "../components/JourneysInMotion";
import Destinations from "../components/Destinations";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import Journal from "../components/Journal";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <JourneysInMotion />
      <Destinations />
      <WhyUs />
      <Testimonials />
      <Journal />
      <FAQ />
      <Contact />
    </>
  );
}
