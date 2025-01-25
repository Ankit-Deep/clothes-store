import React, { useEffect, useState } from "react";
import { Product } from "../components/index";
import { NavLink } from "react-router-dom"; // Corrected import statement
import service from "../Backend/Appwrite/config";
import { Query } from "appwrite";

function Category({ title, ...props }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    service
      .getAllProducts([Query.equal("category", title)])
      .then((products) => {
        products ? setAllProducts(products.documents) : null;
      });
  }, [title]); // Added title as a dependency

  return (
    <>
      <div className="w-full my-2 ">
        <div className="flex items-center justify-between px-2 py-5 ">
          <h2 className="text-lg  text-black dark:text-white font-medium">
            {title}
          </h2>

          {/* TODO: navigate to view all the items in this category */}
          <NavLink to={`/full-category/${title}`}>
            <button>See All </button>
          </NavLink>
        </div>

        <div className="rounded-xl border-black bg-gray-200 dark:bg-gray-400 w-full ">
          <ul className="w-full flex sm:flex-row flex-wrap p-2">
            {allProducts.slice(0, 4).map((product) => (
              <li
                className="sm:w-1/4 w-2/4 h-2/4 border-black rounded-xl p-2"
                key={product.$id}
              >
                <Product {...product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Category;