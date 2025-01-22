import React, { useEffect } from "react";
import { useState } from "react";
import ThemeBtn from "../ThemeBtn";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  //   const authStatus = useSelector((state) => state.auth.status);
  const authStatus = true;

  const navigate = useNavigate();

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    {isAuthenticated && alert("You are Logged in !!!")}

  },[loginWithRedirect])

  const [showNav, setShowNav] = useState("hidden");


  // const navItems = [
  //   {
  //     // slug means the end part of URL that comes after backslash /
  //     name: "Home",
  //     slug: "/",
  //     active: true,
  //   },
  //   {
  //     name: "About Us",
  //     slug: "/about-us",
  //     active: true,
  //   },
  //   {
  //     name: "Contact Us",
  //     slug: "/contact-us",
  //     active: true,
  //   },
  //   {
  //     name: "Customize",
  //     slug: "/customize", 
  //     active: true,
  //   },
  //   // {
  //   //   name: "Login",
  //   //   slug: "/login",
  //   //   active: true,
  //   // },
  // ];

  return (
    <>
      <header className="fixed top-0 z-50 sm:px-10 px-5 bg-gray-800 w-full py-5">
        <div className="relative flex text-white justify-around items-center gap-5">
          <h1 className="text-xl">Logo</h1>

          <div className="sm:w-1/4">
            <input
              type="search"
              placeholder="search..."
              className="border-none px-5 text-black bg-gray-100 w-full rounded-full h-10"
            />
          </div>

          <ul className="hidden w-fit px-10 md:flex justify-end gap-20 items-center text-white h-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {/* <li>
              <NavLink to="about-us">About Us</NavLink>
            </li>
            
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li> */}

            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>

            <li>
              <NavLink to="/customize">Customize</NavLink>
            </li>

            {isAuthenticated ? (
              <li>
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log out
                </button>
              </li>
            ) : (
              <li>
                <button onClick={() => loginWithRedirect()}>Log In</button>
              </li>
            )}
          </ul>

          <ThemeBtn />

          {/* Dropdown navbar used for showing nav options in small screens */}
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

        {/* Nav options shown on small screens */}
        <div
          id=""
          className={`md:hidden absolute top-0 right-0 z-50 w-2/5 h-screen bg-gray-900  ${showNav}`}
        >
          <aside className="h-2/4 text-lg my-5">
            <button
              className="md:hidden  float-right text-white w-10 h-10  pr-4"
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
                className="w-6"
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

            <ul className=" w-full h-full px-5 flex flex-col justify-around items-end text-white ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>

              <li>
                <NavLink to="/customize">Customize</NavLink>
              </li>

              <li>
                <NavLink to="about-us">About Us</NavLink>
              </li>

              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>



              {isAuthenticated ? (
                <li>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <li>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
            </ul>
          </aside>
        </div>
      </header>
    </>
  );
}

export default Header;
