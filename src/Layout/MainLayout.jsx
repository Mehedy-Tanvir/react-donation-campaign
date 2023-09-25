import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  const loc = useLocation();
  return (
    <div className="font-inter">
      <div className={loc.pathname === "/" ? "hidden" : ""}>
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
