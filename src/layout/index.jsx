import { Outlet } from "react-router-dom";
import Navbar from "./nav-bar";
import Childproduct from "../containers/Products/index";
const AppLayout = () => {
  return (
    <div>
      <div className="content-container h-full col-span-5">
        <Navbar />
        <div className="flex flex-col p-3 m-0 w-full h-full">
          <div className="flex-fill">
            <Childproduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
