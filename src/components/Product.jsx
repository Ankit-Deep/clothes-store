import React from "react";
import { Link } from "react-router";
import fileService from "../../backend/appwrite/file";

function Product({
  $id,
  productName,
  category,
  description,
  image,
  stock,
  price,
}) {
  // const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <Link to={`/product/${$id}`}>
        <div className="w-full h-full">
          <div className="relative">
            {image ? (
              <img 
              src={fileService.getImagePreview(image)}
              alt={productName}
              className="w-full h-[50%] rounded-xl"
              
              />
            ) : null }

            {/* before */}
            {/* <img
              src="/assets/t-shirt.jpg"
              alt=""
              className="w-full h-[50%] rounded-xl"
            /> */}

            <img
              src="/assets/expand.png"
              alt=""
              className="absolute top-3 right-3 w-5 cursor-pointer"
            />
          </div>

          {/* Info. about Product */}
          <div className="w-full text-center py-1">
            {/* Name of the product */}
            <h3 className="text-lg font-semibold text-black dark:text-black">
              {productName}
            </h3>

            {/* Price of the product */}
            <h4 className="text-black dark:text-black">Rs.{price}</h4>
            <h3>Description : {description} </h3>

            <h3>Stock : {stock}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;
