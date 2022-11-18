import { ProductPage } from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BasketPage from "./pages/BasketPage";
import OrderListPage from "./pages/OrderListPage";
import FinalizePage from "./pages/FinalizePage";
import MainLayout from "./components/layout/MainLayout";
import ContextProvider from "./ContextProvider";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ContextProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<ProductPage />} />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="/order-list" element={<OrderListPage />} />
              <Route path="/finalize" element={<FinalizePage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </MainLayout>
        </ContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
