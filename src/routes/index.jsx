<<<<<<< HEAD
=======

>>>>>>> 21e48be3c00090171824d1efd0de68a19aaad016
import AppLayout from "../layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Men,
  SummerCollections,
  Cart,
  WinterCollections,
  ChildrenCollections,
  WomenDetails,
  Women,
} from "../containers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/men-collections" element={<Men />} />
          <Route path="/summer-collections" element={<SummerCollections />} />
          <Route
            path="/children-collections"
            element={<ChildrenCollections />}
          />
          <Route path="/winter-Collections" element={<WinterCollections />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/women-collections" element={<Women />} />
          <Route path="/WomenDetails" element={<WomenDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
