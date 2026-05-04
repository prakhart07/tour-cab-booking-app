import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import TourPackages from "../pages/tourpackage";
import Admin from "../pages/Admin";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CancellationPolicy from "../pages/CancellationPolicy";
import RefundPolicy from "../pages/RefundPolicy";
import Terms from "../pages/Terms";
import Disclaimer from "../pages/Disclaimer";

const AppRoutes = () => {
    return (
        
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact-us" element={<ContactUs/>} />
                    <Route path="/tour-packages" element={<TourPackages/>} />
                     <Route path="/about" element={<About />} />
                     <Route path="/admin" element={<Admin />} />
                     <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
                        <Route path="/refund-policy" element={<RefundPolicy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/disclaimer" element={<Disclaimer />} />
                </Route>
            </Routes>
        
    )
}

export default AppRoutes;