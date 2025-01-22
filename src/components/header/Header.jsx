import React from "react";
import ThemeBtn from "../ThemeBtn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Header() {
  //   const authStatus = useSelector((state) => state.auth.status);
  const authStatus = true;

  //   const navigate = useNavigate();

  const navItems = [
    {
      // slug means the end part of URL that comes after backslash /
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: true,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: true,
    },
    {
      name: "About Us",
      slug: "/about-us",
      active: true,
    },
    {
      name: "Contact Us",
      slug: "/contact-us",
      active: true,
    },
    {
      name: "Customize",
      slug: "/customize",
      active: true,
    },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 sm:px-10 px-5 bg-gray-800 w-full py-5">
        <div className=" flex text-white justify-between items-center gap-2">
          <h1 className="text-xl">Logo</h1>

          <div className="sm:w-1/4">
            <input
              type="search"
              placeholder="search..."
              className="border-none px-5 text-black bg-gray-200 w-full rounded-2xl h-8"
            />
          </div>

          <ul className="hidden md:flex justify-end text-white w-fit h-10">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="text-white visible text-lg">
                  <button
                    //   onClick={() => navigate(item.slug)}

                    className={`text-lg px-6 py-2 rounded-full text-white mx-1 hover:underline decoration-slate-400 duration-1000`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>

          <ThemeBtn />

          {/* Dropdown navbar */}
          <button
            className="md:hidden  text-white w-10 h-10 text-center px-1"
            id="dropdown"
            onClick={() => {
              if (showNav === "hidden") {
                setShowNav("visible");
              } else {
                setShowNav("hidden");
              }
            }}
          >
            <svg
              className="w-6 h-6 text-xl"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
