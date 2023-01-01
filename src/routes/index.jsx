import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../containers";
import Men from "../containers/men";
import AppLayout from "../layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/MenCollection" element={<Men />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
