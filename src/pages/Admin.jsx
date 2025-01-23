// This file is only shown to the owner of the website so that he can post, update , delete products on his own

import React from "react";
import { NavLink, useParams, Routes, Route } from "react-router-dom";
import {
  AddAdmin,
  AddProduct,
  Container,
  UpdateProduct,
  DeleteProduct,
} from "../components";

function Admin() {
  // let {params} = useParams();
  // params.slug;

  // console.log("Params : ", params.slug);

  // params.slug;

  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-[95%] mx-7 my-6 rounded-xl h-4/5 bg-slate-300 flex ">
          {/* left / aside section for nav options */}
          <aside className="border-r w-2/12">
            <ul className="my-5 mx-2 flex flex-col gap-3 ">
              <li>
                <NavLink to="/admin/add-product">Add</NavLink>
              </li>
              <li>
                <NavLink to="/admin/update-product">Update</NavLink>
              </li>
              <li>
                <NavLink to="/admin/delete-product">Delete</NavLink>
              </li>

              <li>
                <NavLink to="/admin/add-more-admins">Add more Admins</NavLink>
              </li>
            </ul>
          </aside>

          {/* Right section */}
          <section className="w-full p-4">
            <Routes>
              {/* <Route path="/admin/"> */}
                <Route path="add-product" element={<AddProduct />} />
                <Route
                  path="update-product"
                  element={<UpdateProduct />}
                />
                <Route
                  path="delete-product"
                  element={<DeleteProduct />}
                />
                <Route path="add-more-admins" element={<AddAdmin />} />
              {/* </Route> */}
            </Routes>
          </section>
        </div>
      </div>
    </>
  );
}

export default Admin;
