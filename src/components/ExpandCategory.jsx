// Expand each category when clicked on see all
import React, { useState, useEffect } from "react";
import { Container, Product } from "../components/index";
import service from "../Backend/appwrite/config";
import { Query } from "appwrite";

function ExpandCategory({ category }) {
  const [allProucts, setAllProducts] = useState([]);

  useEffect(() => {
    service
      .getAllProducts([Query.equal("category", category)])
      .then((products) => {
        products ? setAllProducts(products.documents) : null;
      });
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-red-50 dark:bg-black dark:text-white">
        <Container>
          <div className="border border-black  h-screen py-5 px-2 sm:px-0">
            <div className="border">
              <h1 className="text-2xl font-semibold"> {category}</h1>
            </div>

            {/* All Products of this category */}
            <section className="w-full h-full border bg-red-200 my-5 flex flex-wrap">
              {allProucts.map((product) => {
                <div
                  className="sm:w-1/4 w-2/4 h-2/4 border-black rounded-xl p-2"
                  key={product.$id}
                >
                  <Product {...productData} />
                </div>;
              })}
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ExpandCategory;
