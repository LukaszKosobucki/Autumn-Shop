import React from "react";
import { ProductPage } from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import OrderListPage from "./pages/OrderListPage";
import FinalizePage from "./pages/FinalizePage";
import MainLayout from "./components/layout/MainLayout";
import "@fontsource/red-rose";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/order-list" element={<OrderListPage />} />
          {/* think through about dynamic pathing */}
          <Route path="/finalize" element={<FinalizePage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
