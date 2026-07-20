import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import GoogleMap from "../components/contact/GoogleMap";
import FAQ from "../components/contact/FAQ";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>

<Helmet>
  <title>Contact Us | Mathura Vrindavan Tour</title>

  <meta
    name="description"
    content="Contact us to book your Mathura and Vrindavan spiritual tour."
  />
</Helmet>

      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <GoogleMap />
      <FAQ />
    </>
  );
};

export default Contact;