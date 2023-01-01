import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import { Dashboard } from "../containers";
import Women from "../containers/Details/Women";
import WomenDetails from "../containers/Details/WomenDetails";
import AppCard from "../components/card/card";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/WomenDetails" element={<WomenDetails />} />
          <Route path="/AppCard" element={<AppCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
