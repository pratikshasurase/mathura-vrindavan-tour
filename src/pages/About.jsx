import AboutHero from "../components/about/AboutHero";
import AboutSection from "../components/about/AboutSection";
import WhyChooseUs from "../components/about/WhyChooseUs";
import TourHighlights from "../components/about/TourHighlights";
import Statistics from "../components/about/Statistics";
import CTASection from "../components/about/CTASection";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>

<Helmet>
  <title>About Us | Mathura Vrindavan Tour</title>

  <meta
    name="description"
    content="Know more about our spiritual travel services and experienced team."
  />
</Helmet>

      <AboutHero />
      <AboutSection />
      <WhyChooseUs />
      <TourHighlights />
      <Statistics />
      <CTASection />
    </>
  );
};

export default About;