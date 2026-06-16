import { Routes, Route } from "react-router-dom";

import LandingLayout from "../Pages/Landing/LandingLayout.jsx";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout.jsx";

import HomePage from "../Pages/Landing/Home/HomePage.jsx";
import AboutPage from "../Pages/Landing/About/AboutPage.jsx";
import ProductPage from "../Pages/Landing/Products/ProductPage.jsx";
import PricingPage from "../Pages/Landing/Pricing/PricingPage.jsx";
import SupportPage from "../Pages/Landing/Support/SupportPage.jsx";
import Signup from "../Pages/Landing/Signup/Signup.jsx";
import ErrorPage from "../Pages/Landing/ErrorPage.jsx";

import DashboardPage from "../Pages/Dashboard/DashboardPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Landing Website */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
};

export default AppRoutes;
