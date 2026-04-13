import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import HowItWorks from "./components/HowItWorks";
import FeatureGrid from "./components/FeatureGrid";
import BuiltFor from "./components/BuiltFor";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <HowItWorks />
        <FeatureGrid />
        <BuiltFor />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
