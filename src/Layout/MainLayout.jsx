import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  const loc = useLocation();
  console.log(loc);
  return (
    <div>
      <div className={loc.pathname === "/" ? "hidden" : ""}>
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
