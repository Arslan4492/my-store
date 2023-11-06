import { Outlet } from "react-router-dom";
import Header from "./header";
import ScrollToTop from "./scroll-to-top";
import Footer from "./footer";
import { useEffect } from "react";
import { checkAppTheme } from "@/utils/local-storage-items";

const AppLayout = () => {
  useEffect(() => {
    checkAppTheme();
  }, []);

  return (
    <div className="dark:bg-black">
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AppLayout;
