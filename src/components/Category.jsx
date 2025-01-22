import React from "react";
import { Product } from "../components/index";

function Category({ title, ...props }) {
  return (
    <>
      <div className="w-full my-2 ">
        <div className="flex items-center justify-between px-2 py-5 ">
          <h2 className="text-lg  text-black dark:text-white font-medium">
            {title}
          </h2>

          {/* TODO: navigate to view all the items in this category */}
          <button>See All</button>
        </div>

        <div className="rounded-xl border-black bg-gray-200 dark:bg-gray-400 w-full ">
          <ul className="w-full flex sm:flex-row flex-wrap p-2">
            <li className="sm:w-1/4 w-2/4 h-2/4 border-black rounded-xl p-2 ">
              <Product />
            </li>

            <li className=" sm:w-1/4 w-2/4 h-2/4 border-black rounded-xl p-2">
              <Product />
            </li>

            <li className="sm:w-1/4 w-2/4 h-2/4 border-black rounded-xl p-2 ">
              <Product />
            </li>

            <li className="sm:w-1/4 w-2/4 h-2/4 border-black rounded-xl p-2">
              <Product />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Category;
