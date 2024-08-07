import React from "react";

export const NavBar = () => {
  return (
    <div>
      <div className="drawer z-50">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle  "  />
        <div className="drawer-content flex flex-col ">
          {/* Navbarstyle={{background: `rgb(2,0,36)`,backgroundColor: `linear-gradient(137deg, rgba(2,0,36,1) 6%, rgba(44,44,70,1) 75%, rgba(36,154,145,0.8323704481792717) 100%)`}} */}
          <div className="navbar fixed top-0 opacity-90  w-full bg-slate-950 " >
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">logo</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal ">
                {/* Navbar menu content here */}
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Prudacts</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu bg-base-200 min-h-full p-4 w-1/3">
            {/* Sidebar content here */}
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Prudacts</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
