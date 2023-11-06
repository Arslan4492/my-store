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
  JustBrowsing,
  PageNotFound,
} from "../containers";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/just-browsing" element={<JustBrowsing />} />
          <Route path="/men-collection" element={<Men />} />
          <Route path="/women-collection" element={<Women />} />
          <Route path="/summer-collection" element={<SummerCollections />} />
          <Route
            path="/children-collections"
            element={<ChildrenCollections />}
          />
          <Route path="/winter-Collections" element={<WinterCollections />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/womenetails" element={<WomenDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
