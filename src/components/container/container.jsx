import React from "react";

function Container({ children }) {
  return (
    <section className="w-screen max-w-7xl mx-auto px-4">{children}</section>
  );
}

export default Container;
