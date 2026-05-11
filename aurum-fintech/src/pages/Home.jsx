import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <TrustSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}
