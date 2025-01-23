import React from "react";
import { useForm } from "react-hook-form";

function ProductForm({ product }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        productName: product.productName || "",
        description: product.description || "",
        category: product.category || "",
        image: product.image || "",
        stock: product.stock || 0,
        price: product.price || 0,
      },
    });

  const onSubmit = (data) => {
    console.log("Data : ", data);
  };

  return (
    <>
      <div className="w-full h-full bg-gray-300 rounded-lg">
        <form
          className="w-full h-full  flex md:flex-row flex-col justify-around rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
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
              accept="image/png,  image/jpg"
              {...register("image", { required: true })}
            />
          </div>
           
          
            
          
          
          {/* right div for product info */}
        </form>
      </div>
    </>
  );
}

export default ProductForm;
