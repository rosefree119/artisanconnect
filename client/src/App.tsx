import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ProductDetail from "./components/products/ProductDetail";
import ProductList from "./components/products/ProductList";
import UserHome from "./components/home/UserHome";
import AdminDashboard from "./components/admin/AdminDashboard";
import ArtisanLogin from "./components/auth/ArtisansLogin";
import ArtisanRegister from "./components/auth/ArtisansRegistration";
import DeliveryAgentLogin from "./components/auth/DeliveryAgentLogin";
import DeliveryAgentRegistration from "./components/auth/DeliveryAgentRegistration";
import ContactPage from "./components/Landing/ContactPage";
import AboutPage from "./components/Landing/AboutPage";
import AdminLogin from "./components/auth/AdminLogin";
import BuyerProfile from "./components/Buyer/BuyerProfile";
import BuyerForgotpswd from "./components/Buyer/BuyerForgotpswd";
import Artisanforget from "./components/Artisan/Artisanforget";
import Deliveryforget from "./components/DeliveryAgent/Deliveryforget";
import DeliveryAgentHome from "./components/DeliveryAgent/DeliveryAgentHome";
import ArtisanHome from "./components/Artisan/ArtisanHome";
import ArtrisanProfile from "./components/Artisan/ArtrisanProfile";
import Deliveryprofile from "./components/DeliveryAgent/Deliveryprofile";

// #5046f4
function App() {
  const imageBaseUrl = "http://localhost:4004";

  return (
    <BrowserRouter>
      <Routes>
        {/* landing */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* buyer */}
        <Route path="/buyer/login" element={<LoginForm />} />
        <Route path="/buyer/register" element={<RegisterForm />} />
        <Route path="/buyer/homepage" element={<UserHome />} />
        <Route
          path="/buyer/profile"
          element={<BuyerProfile url={imageBaseUrl} />}
        />
        <Route path="/buyer/viewproductlist" element={<ProductList />} />
        <Route path="/buyer/forgetpassword" element={<BuyerForgotpswd />} />
        <Route
          path="/buyer/viewproductdetails/:productid"
          element={<ProductDetail />}
        />

        {/* artisan */}
           <Route path="/artisan/login" element={<ArtisanLogin />} />
        <Route path="/artisan/register" element={<ArtisanRegister />} />
        <Route path="/artisan/forgetpassword" element={<Artisanforget />} />
        <Route path="/artisan/homepage" element={<ArtisanHome />} />
        <Route
          path="/artisan/profile"
          element={<ArtrisanProfile url={imageBaseUrl} />}
        />

        {/* delivery agent */}
        <Route path="/deliveryagent/login" element={<DeliveryAgentLogin />} />
        <Route
          path="/deliveryagent/register"
          element={<DeliveryAgentRegistration />}
        />
        <Route
          path="/deliveryagent/forgetpassword"
          element={<Deliveryforget />}
        />
        <Route path="/deliveryagent/homepage" element={<DeliveryAgentHome />} />
        <Route
          path="/deliveryagent/profile"
          element={<Deliveryprofile url={imageBaseUrl} />}
        />
        {/* admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/homepage" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
