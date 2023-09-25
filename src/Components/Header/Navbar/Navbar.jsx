import { NavLink, useLocation } from "react-router-dom";

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
  const loc = useLocation();
  console.log(loc);

  return (
    <div className="max-w-[310px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1320px] mx-auto mt-[50px] z-50 flex justify-center items-center">
      <div className="container flex items-center justify-between">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img className="w-[200px]" src="./Logo.png" alt="logo" />
        <div className="hidden lg:block">
          <ul className="flex text-[#0B0B0B] text-[18px] font-normal gap-[49px] items-center">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
