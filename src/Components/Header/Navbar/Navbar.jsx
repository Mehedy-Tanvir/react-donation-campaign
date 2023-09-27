import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] underline font-bold"
              : ""
          }
        >
          Donation
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] underline font-bold"
              : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="px-2 md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1320px] mx-auto mt-[50px] z-50 flex justify-center items-center">
      <div className="container flex items-center justify-between">
        <img className="w-[200px]" src="/Logo.png" alt="logo" />
        <div className="hidden lg:block">
          <ul className="flex text-[#0B0B0B] text-[18px] font-normal gap-[49px] items-center">
            {links}
          </ul>
        </div>
        <div className="dropdown dropdown-left lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <AiOutlineMenu className="text-[36px]" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
