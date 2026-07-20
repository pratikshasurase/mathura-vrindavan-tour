import { useEffect, useState } from "react";
import AOS from "aos";

import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/common/Loader";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import WhatsAppButton from "./components/common/WhatsAppButton";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AppRoutes />
      <ScrollToTopButton />
      <WhatsAppButton />

      <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    theme="light"
  />
    </>
  );
}

export default App;