import Hero from "../components/Hero";
import Intro from "../components/Intro";
import CompanyServices from "../components/CompanyServices";
import CorporateSolutions from "../components/CorporateSolutions";
import JourneysInMotion from "../components/JourneysInMotion";
import Destinations from "../components/Destinations";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <CompanyServices />
      <CorporateSolutions />
      <JourneysInMotion />
      <Destinations />
      <Process />
      <WhyUs />
      <FAQ />
      <Contact />
    </>
  );
}
