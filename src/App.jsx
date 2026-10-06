import { Routes, Route } from "react-router-dom";
import TravelGlassNavbar from "./components/TravelGlassNavbar";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";

export default function App() {
  return (
    <div className="relative">
      <TravelGlassNavbar />

      <ScrollToTop /> 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:slug" element={<TourDetails />} />
      </Routes>
    </div>
  );
}