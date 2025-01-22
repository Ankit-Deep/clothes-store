import React from "react";

function Container({ children }) {
  return (
    <section className=" border-2 border-black w-screen md:w-[90%] mx-auto px-4">{children}</section>
  );
}

export default Container;
