import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import AppContextProvider from "./contexts/AppContextProvider";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
