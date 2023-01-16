import { HashRouter as Router } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ContextProvider from "./ContextProvider";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ContextProvider>
          <MainLayout>
            <AnimatedRoutes />
          </MainLayout>
        </ContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
