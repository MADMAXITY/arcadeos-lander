import Hero from '@/components/sections/Hero';
import FeaturesOverview from '@/components/sections/FeaturesOverview';
import BentoGrid from '@/components/sections/BentoGrid';
import GameShowcase from '@/components/sections/GameShowcase';
import ProductPreview from '@/components/sections/ProductPreview';
import Stats from '@/components/sections/Stats';
import ComingSoonCTA from '@/components/sections/ComingSoonCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FeaturesOverview />
      <BentoGrid />
      <GameShowcase />
      <ProductPreview />
      <Stats />
      <ComingSoonCTA />
      <Footer />
    </main>
  );
}
