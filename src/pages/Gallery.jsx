import GalleryHero from "../components/gallery/GalleryHero";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { Helmet } from "react-helmet-async";

const Gallery = () => {
  return (
    <>

      <Helmet>
        <title>Gallery | Mathura Vrindavan Tour</title>

        <meta
          name="description"
          content="Explore beautiful photos of Mathura, Vrindavan, Prem Mandir, Banke Bihari Temple and more."
        />
      </Helmet>

      <GalleryHero />
      <GalleryGrid />
    </>
  );
};

export default Gallery;