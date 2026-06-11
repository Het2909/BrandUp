import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import CRMSection from '../components/sections/CRMSection';
import AboutSection from '../components/sections/AboutSection';
import useGsapScroll from '../hooks/useGsapScroll';

const Home = () => {
  useGsapScroll();

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CRMSection />
      <AboutSection />
    </main>
  );
};

export default Home;
