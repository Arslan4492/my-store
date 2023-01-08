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
// import MensCollection from "../containers/men/MensCollection";
import UnStitchMenCollection from "../containers/men/UnstitchCollection";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/men-collections" element={<Men />} />

          <Route
            path="/unstitch-collections/unstitch"
            element={<UnStitchMenCollection />}
          />
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
