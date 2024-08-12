import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
export default function AppRoutes() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us"element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
  )
}
