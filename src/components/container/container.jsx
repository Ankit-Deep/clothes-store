import React from "react";

function Container({ children }) {
  return (
    <section className=" w-screen md:w-[90%] mx-auto sm:px-4">{children}</section>
  );
}

export default Container;
