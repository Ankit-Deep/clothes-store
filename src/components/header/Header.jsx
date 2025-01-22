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
      active: !authStatus || authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "About Us",
      slug: "/about-us",
      active: !authStatus || authStatus,
    },
    {
      name: "Contact Us",
      slug: "/contact-us",
      active: !authStatus || authStatus,
    },
    {
      name: "Customize",
      slug: "/customize",
      active: !authStatus || authStatus,
    },
  ];

  return (
    <>
      <header className="fixed top-0 z-50 px-10 bg-gray-800 w-full py-5">
        <div className=" flex text-white justify-between items-center">
          <h1 className="text-xl">Logo</h1>

          <div className="w-2/6">
            <input
              type="search"
              placeholder="search..."
              name=""
              id=""

              className="border-none px-5 text-black bg-gray-200 w-full rounded-full h-8"
            />
          </div>

          <ul className="hidden md:flex justify-end">
            {navItems.map((item) => {
              item.active ? (
                <li key={item.name} className="">
                  <button
                    //   onClick={() => navigate(item.slug)}
                    className={`text-lg px-6 py-2 rounded-full text-white hover:bg-blue-200 hover:text-black hover:font-medium hover:px-7 mx-1 duration-200`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null;
            })}
          </ul>

          <ThemeBtn />
        </div>
      </header>
    </>
  );
}

export default Header;
