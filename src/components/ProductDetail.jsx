import React, { useEffect, useState } from "react";
import { Container } from "../components/index";
import { useParams } from "react-router";
import service from "../../backend/appwrite/config";
import fileService from "../../backend/appwrite/file";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (productId) {
      service.getProduct(productId).then((product) => {
        if (product) {
          setProduct(product);
          const url = fileService.getImagePreview(product.image);

          setImgUrl(url);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [productId, navigate]);

  return (
    <>
      <div className="w-screen h-screen ">
        <Container>
          <div className="border border-black ">
            {/* Left Section: Product Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                src={product.image}
                alt={product.productName}
                className="w-64 h-64 object-cover rounded-lg"
              />
            </div>

            {/* Right Section: Product Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
              <p className="text-lg mb-2">
                <span className="font-semibold">Price:</span> {product.price}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Category:</span>{" "}
                {product.category}
              </p>
              <p
                className={`text-lg mb-4 ${
                  product.stock === "In Stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                <span className="font-semibold">Stock:</span> {product.stock}
              </p>

              <Link to={`/cart`}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductDetail;
