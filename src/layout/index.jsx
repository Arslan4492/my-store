import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./nav-bar";

const AppLayout = () => {
  return (
    <div>
      <div className='content-container h-full col-span-5'>
        <Navbar />
        <div className='flex flex-col p-3 m-0 w-full h-full'>
          <div className='flex-fill'>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
