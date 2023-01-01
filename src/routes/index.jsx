import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../layout";
import { Dashboard, Men, SummerCollections, Cart, WinterCollections } from "../containers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/men-collections' element={<Men />} />
          <Route path='/summer-collections' element={<SummerCollections />} />
          <Route path='/winter-Collections' element={<WinterCollections />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
