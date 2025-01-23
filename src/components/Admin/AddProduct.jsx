import React, { useState } from "react";

function AddProduct() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    stock: 0,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Product Data : ", productData);
  };

  return (
    <>
      <div className="w-full h-full bg-gray-300 rounded-lg">
        <form
          className="w-full h-full  flex md:flex-row flex-col justify-around rounded-lg"
          onSubmit={handleSubmit}
        >
          {/* left div for image */}
          <div className="h-full w-2/5  rounded-lg">
            <h2 className="my-2 mx-10 text-lg  w-full">
              Upload Product Image :{" "}
            </h2>
            <input
              type="file"
              src=""
              alt=""
              className="w-4/5 mx-10 px-14 py-20 my-2 h-4/5 bg-slate-200 rounded-lg"
              accept="image/png,  image/jpg, image/jpeg"
              value={productData.image}
              onChange={handleChange}
              required
            />
          </div>

          {/* right div for product info */}
          <div className=" px-4 w-3/5 flex flex-col  gap-5">
            <div className="mt-4">
              <label htmlFor="productName" className="text-lg">
                1. Product Name :
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Enter Product name"
                className="w-[95%] h-8 rounded-md my-2 px-3"
                onChange={handleChange}
                value={productData.name}
              />
            </div>

            <div className="">
              <label htmlFor="description" className="text-lg">
                2. Product Description :{" "}
              </label>

              <textarea
                name="description"
                id="description"
                placeholder="Enter a short description"
                className="w-[95%] min-h-28 max-h-28  rounded-lg px-3 py-1"
                onChange={handleChange}
                value={productData.description}
              ></textarea>
            </div>

            <div className="flex gap-3">
              <label htmlFor="category" className="text-lg">
                3. Category :{" "}
              </label>
              <select
                name="categoryOptions"
                id="categoryOptions"
                className="border w-28 text-black rounded-lg h-8"
                value={productData.category}
                onChange={handleChange}
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="text-lg">
                4. Price :{" "}
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="rounded-lg h-8 w-28 ml-10 px-2"
                value={productData.price}
                onChange={handleChange}
              />{" "}
              Rs.
            </div>

            <div>
              <label htmlFor="inStock" className="text-lg">
                5. In Stock :{" "}
              </label>
              <input
                type="number"
                id="inStock"
                name="inStock"
                className="rounded-lg h-8 w-28 ml-5 px-2"
                value={productData.stock}
                onChange={handleChange}
              />{" "}
            </div>

            <div className="w-full text-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-lg text-white mx-28 rounded-lg"
                onClick={handleSubmit}
              >
                Upload
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
