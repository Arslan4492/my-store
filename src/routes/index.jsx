import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import { Dashboard, Men } from "../containers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/men' element={<Men />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
