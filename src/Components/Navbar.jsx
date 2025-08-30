import { NavLink } from "react-router";

const Navbar = () => {
    const links = <>
            <li><NavLink to={'/'} className="mr-6 text-xl">Home</NavLink></li>
            <li><NavLink to={'/about'} className="mr-6 text-xl">About</NavLink></li>
            <li><NavLink to={'/projects'} className="mr-6 text-xl">Projects</NavLink></li>
            <li><NavLink to={'/contact'} className="mr-6 text-xl">Contact</NavLink></li>
    </>
  return (
    <div >
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden
             animate__animated animate__fadeInLeft animate__slower">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold md:ml-6 text-[#cc1150]
           animate__animated animate__fadeInLeft">Morshed.dev</h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
