import Hero from "../components/home/Hero";
import TourOverview from "../components/home/TourOverview";
import TourHighlights from "../components/home/TourHighlights";
import Itinerary from "../components/home/Itinerary";
import HotelSection from "../components/home/HotelSection";
import TempoTraveller from "../components/home/TempoTraveller";

const Home = () => {
  return (
    <>
      <Hero />
      <TourOverview />
      <TourHighlights />
      <Itinerary />
      <HotelSection />
      <TempoTraveller />
    </>
  );
};

export default Home;