import { Routes, Route } from "react-router-dom";

// ............ Pages
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/not-found/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
