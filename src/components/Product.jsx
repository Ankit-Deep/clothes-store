import React from "react";
import { Link } from "react-router";

function Product({
    image="",
    name="T-Shirt",
    price="1,000",
}) {
  return (
    <>
      <div className="w-full h-full">
        
        <div className="relative">
            <img src="/assets/t-shirt.jpg" alt="" className="w-full h-[50%] rounded-xl" />
            
            {/* <Link to={`/`}> */}
                <img src="/assets/expand.png" alt="" className="absolute top-3 right-3 w-5 cursor-pointer" />
            {/* </Link> */}
        </div>

        {/* Info. about Product */}
        <div className="w-full text-center py-1">
            {/* Name of the product */}
            <h3 className="text-lg font-semibold text-black dark:text-black">{name}</h3>

            {/* Price of the product */}
            <h4 className="text-black dark:text-black" >Rs.{price}</h4>
        </div>
      </div>
    </>
  );
}

export default Product;
