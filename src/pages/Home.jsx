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
import CTASection from "../components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Home = () => {

  return (
    <>

<Helmet>
    <title>Mathura Vrindavan Tour | Home</title>

    <meta
      name="description"
      content="Explore Mathura, Vrindavan, Govardhan and Agra with our premium spiritual tour packages."
    />

    <meta
      name="keywords"
      content="Mathura Tour, Vrindavan Tour, Agra Tour, Travel, India"
    />
  </Helmet>

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
      <CTASection />
    </>
  );
};

export default Home;