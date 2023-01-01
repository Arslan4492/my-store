import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import { Dashboard } from "../containers";
import Footer from "../layout/footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
