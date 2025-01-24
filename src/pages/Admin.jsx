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

  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-[95%] mx-auto my-6 rounded-xl sm:h-4/5 bg-slate-300 flex ">
          {/* left / aside section for nav options */}
          <aside className="border-r w-2/12">
            <ul className="my-5 mx-4 flex flex-col gap-5 text-lg">
              <li className="">
                <NavLink
                  to="/admin/add-product"
                  className="w-full duration-200"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? "underline" : "none",
                    fontSize: isActive ? "20px" : "18px",
                  })}
                >
                  Add
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/update-product"
                  className="w-full duration-200"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? "underline" : "none",
                    fontSize: isActive ? "20px" : "18px",
                  })}
                >
                  Update
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/delete-product"
                  className="w-full duration-200"
                  style={({ isActive }) => ({
                    textDecoration: isActive ? "underline" : "none",
                    fontSize: isActive ? "20px" : "18px",
                  })}
                >
                  Delete
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/add-more-admins"
                  className="w-full duration-200 "
                  style={({ isActive }) => ({
                    textDecoration: isActive ? "underline" : "none",
                    fontSize: isActive ? "20px" : "18px",
                  })}
                >
                  Add more Admins
                </NavLink>
              </li>
            </ul>
          </aside>

          {/* Right section */}
          <section className="w-full p-4">
            <Routes>
              {/* <Route path="/admin/"> */}
              <Route path="" element={<AddProduct />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="update-product" element={<UpdateProduct />} />
              <Route path="delete-product" element={<DeleteProduct />} />
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
