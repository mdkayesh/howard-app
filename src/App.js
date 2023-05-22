import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Service from "./components/pages/Service/Service_page/Service";
import "./Global.css";
import Brand from "./components/Brand/Brand";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import ServiceDetails from "./components/pages/Service/Service_details/Service_details";
import Blog from "./components/pages/News/Blog/Blog";
import BlogSidebar from "./components/pages/News/BlogSidebar/BlogSIdebar";
import ScrollToTop from "./components/ScrollToTop";
import BlogDetails from "./components/pages/News/BlogDetails/BlogDetails";
import AboutUs from "./components/pages/Pages/AboutUs";
import AboutBitcoin from "./components/pages/Pages/AboutBitcoin/AboutBitcoin";
import Marchants from "./components/pages/Marchants/Marchants";
import Team from "./components/pages/Team/Team";
import Wallet from "./components/pages/Wallet/Wallet";
import Login from "./components/pages/Login/Login";
import Contact from "./components/pages/Contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="service-details" element={<ServiceDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-sidebar" element={<BlogSidebar />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="about-bitcoin" element={<AboutBitcoin />} />
          <Route path="marchants" element={<Marchants />} />
          <Route path="team" element={<Team />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="login-register" element={<Login />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Brand />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
