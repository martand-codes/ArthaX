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
import Orders from "../Pages/Components/Dashboard-Components/Orders.jsx";
import Holdings from "../Pages/Components/Dashboard-Components/Holdings.jsx";
import Positions from "../Pages/Components/Dashboard-Components/Positions.jsx";
import Funds from "../Pages/Components/Dashboard-Components/Funds.jsx";
import Report from "../Pages/Components/Dashboard-Components/Report.jsx";

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
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/holdings" element={<Holdings />} />
        <Route path="/dashboard/positions" element={<Positions />} />
        <Route path="/dashboard/funds" element={<Funds />} />
        <Route path="/dashboard/reports" element={<Report />} />

      </Route>

      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
};

export default AppRoutes;
