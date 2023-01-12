import BasketPage from "../pages/BasketPage";
import OrderListPage from "../pages/OrderListPage";
import FinalizePage from "../pages/FinalizePage";
import ProfilePage from "../pages/ProfilePage";
import { ProductPage } from "../pages/ProductPage";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/order-list" element={<OrderListPage />} />
        <Route path="/finalize" element={<FinalizePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
