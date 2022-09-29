import React, { useEffect, useState } from "react";
import { ProductPage } from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import OrderListPage from "./pages/OrderListPage";
import FinalizePage from "./pages/FinalizePage";
import MainLayout from "./components/layout/MainLayout";
import "@fontsource/red-rose";
import ContextProvider from "./ContextProvider";

function App() {
  return (
    <Router>
      <ContextProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/order-list" element={<OrderListPage />} />
            <Route path="/finalize" element={<FinalizePage />} />
          </Routes>
        </MainLayout>
      </ContextProvider>
    </Router>
  );
}

export default App;
