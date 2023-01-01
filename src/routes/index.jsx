import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import { Dashboard, Men, SummerCollections, Cart,WinterCollection } from "../containers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/men' element={<Men />} />
          <Route path='/summer-collections' element={<SummerCollections />} />
          <Route path="/winterCollection" element={<WinterCollection />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
