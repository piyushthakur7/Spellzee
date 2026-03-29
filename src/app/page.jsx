import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureRibbon from '../components/FeatureRibbon';
import TrustSection from '../components/TrustSection';
import DifferenceSection from '../components/DifferenceSection';
import CurriculumSection from '../components/CurriculumSection';
import TeachingSection from '../components/TeachingSection';
import ResultsSection from '../components/ResultsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import ReviewsSection from '../components/ReviewsSection';
import PricingCard from '../components/PricingCard';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureRibbon />
      <TrustSection />
      <DifferenceSection />
      <CurriculumSection />
      <TeachingSection />
      <ResultsSection />
      <ActivitiesSection />
      <ReviewsSection />
      
      <section className="pricing-new-section section-padding">
        <div className="container">
          <PricingCard />
          <FaqSection />
        </div>
      </section>

      <Footer />
    </>
  );
}
