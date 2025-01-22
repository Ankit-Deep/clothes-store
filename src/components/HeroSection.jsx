import React from "react";
import { Button } from "../components/index";
function HeroSection() {
  return (
    <section className="h-[65%] min-w-full">
      <div className="w-full h-full flex flex-col md:flex-row ">
        {/* Left Div */}
        <div className="relative w-full h-full md:h-auto rounded-md opacity-95 hover:opacity-100 ">
          <img
            src="/assets/hero1.jpg"
            alt=""
            className="w-full h-full rounded-xl"
          />

          <div className="absolute bottom-5 w-full text-center">
            <Button
              type="submit"
              name="Explore"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-fit"
            ></Button>
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

          <div className="absolute bottom-5 w-full text-center">
            <Button
              type="submit"
              name="Customize"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full z-50"
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
