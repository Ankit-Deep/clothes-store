import React from "react";
import { Category } from "../Components/index";

function Explore() {
  return (
    <>
      <section
        id="explore"
        className="min-w-full h-full border-black text-black dark:text-white "
      >
        <h1 className="text-2xl px-2 font-semibold">Explore</h1>

        <div></div>
        <Category title={"Mens"} />
        <Category title={"Womens"} />
        <Category title={"Kids"} />
      </section>
    </>
  );
}

export default Explore;
