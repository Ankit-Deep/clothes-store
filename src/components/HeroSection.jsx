import React from "react";
// import { Button } from "../Components/index";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function HeroSection() {
    // const navigate = useNavigate();

     const scrollToExplore = () => {
       document
         .getElementById("explore")
         .scrollIntoView({ behavior: "smooth" });
     };

    return (
      <section className="h-[65%] min-w-full mt-5">
        <div className="w-full h-full flex flex-col md:flex-row ">
          {/* Left Div */}
          <div className="relative w-full h-full md:h-auto rounded-md opacity-95 hover:opacity-100 ">
            <img
              src="/assets/hero1.jpg"
              alt=""
              className="w-full h-full rounded-xl"
            />

            <div className="absolute bottom-4 left-4 w-full">
              <Link to={`/explore`}>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 sm:text-base px-5 sm:py-2 py-1 text-white rounded-full"
                  onClick={scrollToExplore}
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>

          {/* Right Div */}
          <div className="relative w-full h-full md:h-auto rounded-md mt-4 md:mt-0 md:ml-4 opacity-95 hover:opacity-100 ">
            {/* Content for right */}
            <img
              src="/assets/hero2.jpg"
              alt=""
              className="w-full h-full rounded-xl"
            />

            <div className="absolute bottom-4 left-4 w-full ">
              <Link to={`/customize`}>
                <button
                  type="submit"
                  name="Customize"
                  className="bg-orange-500 hover:bg-orange-600 sm:text-base  px-5 sm:py-2 py-1 text-white rounded-full"
                >
                  Customize
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeroSection;
