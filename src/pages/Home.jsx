import Hero from "../components/home/Hero";
import TourOverview from "../components/home/TourOverview";
import TourHighlights from "../components/home/TourHighlights";
import Itinerary from "../components/home/Itinerary";
import HotelSection from "../components/home/HotelSection";
import TempoTraveller from "../components/home/TempoTraveller";
import PackageInclusions from "../components/home/PackageInclusions";
import PackageExclusions from "../components/home/PackageExclusions";
import GalleryPreview from "../components/home/GalleryPreview";
import FAQSection from "../components/home/FaqSection";

const Home = () => {
  return (
    <>
      <Hero />
      <TourOverview />
      <TourHighlights />
      <Itinerary />
      <HotelSection />
      <TempoTraveller />
      <PackageInclusions />
      <PackageExclusions />
      <GalleryPreview />
      <FAQSection />
    </>
  );
};

export default Home;