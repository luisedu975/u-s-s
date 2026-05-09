import HeroSection from "./components/HeroSection";
import PackSection from "./components/PackSection";
import FeaturesSection from "./components/FeaturesSection";
import YoutubeSection from "./components/YoutubeSection";
import Footer from "./components/Footer";
import AudioDemoSection from "./components/AudioDemoSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <PackSection />
      <AudioDemoSection />
      <FeaturesSection />
      <YoutubeSection />
      <Footer />
    </main>
  );
}