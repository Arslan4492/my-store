import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import { Dashboard } from "../containers";
import Men from "../containers/Men";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Men />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
