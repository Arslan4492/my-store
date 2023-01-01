import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "../containers/men";
import AppLayout from "../layout";

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
