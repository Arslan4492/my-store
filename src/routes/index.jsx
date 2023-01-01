import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import { Dashboard } from "../containers";
import WinterCollection from "../containers/WinterCollection";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/winterCollection" element={<WinterCollection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
