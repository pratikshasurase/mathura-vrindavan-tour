import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    
      <Routes>
        {/* Main Layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    
  );
};

export default AppRoutes;
