import React from "react";
import { useState } from "react";

const CustomPage = () => {
  const [formData, setFormData] = useState({
    height: "",
    heightUnit: "cm",
    weight: "",
    age: "",
    occasion: "",
    type: "",
    fabric: "",
    color: "",
    chestorbrast: "",
    gender: "",
    chestUnit: "cm",
    shoulders: "",
    shouldersUnit: "cm",
    sleeve: "",
    neck: "",
    waist: "",
    waistUnit: "cm",
    hips: "",
    hipsUnit: "cm",
    length: "",
    pocket: "No",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const setGender = (gender) => { setFormData((prevData) => ({ ...prevData, gender })); };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="flex-col lg:flex lg:flex-row">
        <div className="lg:w-[35vw] bg-white dark:bg-black  h-[450px] lg:h-screen">
          <div className="w-full h-[65px]">
            <ul className="flex w-full gap-4 p-3 text-center justify-center">
              <button
                className="justify-center items-center p-2 px-4 rounded-full border-[1px]"
                style={{ color: "gray", borderColor: "gray" }}
                onClick={() => setGender("male")}
              >
                Male
              </button>
              <button
                className="justify-center items-center p-2 px-4 rounded-full border-[1px]"
                style={{ color: "gray", borderColor: "gray" }}
                onClick={() => setGender("female")}
              >
                Female
              </button>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="w-full text-[29px] uppercase   text-black  dark:text-white justify-center text-center">
              Build Your Perfect Fit
            </h1>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full mt-4">
                <ul className="flex w-full justify-center gap-4 px-4">
                  <li
                    className="text-center border-2 w-[32%]"
                    style={{ borderColor: "gray" }}
                  >
                    <label
                      htmlFor="height"
                      className="uppercase"
                      style={{ color: "gray" }}
                    >
                      Height
                    </label>
                    <div className="flex bg-none">
                      <input
                        type="text"
                        id="height"
                        name="height"
                        placeholder="Height"
                        className="w-full p-2 outline-none"
                        value={formData.height}
                        onChange={handleChange}
                      />
                      <select
                        name="heightUnit"
                        className="outline-none text-right"
                        value={formData.heightUnit}
                        onChange={handleChange}
                      >
                        <option value="cm">cm</option>
                        <option value="inches">inches</option>
                        <option value="feet">feet</option>
                      </select>
                    </div>
                  </li>
                  <li
                    className="text-center border-2 w-[32%]"
                    style={{ borderColor: "gray" }}
                  >
                    <label
                      htmlFor="weight"
                      className="uppercase"
                      style={{ color: "gray" }}
                    >
                      Weight
                    </label>
                    <div className="flex bg-none">
                      <input
                        type="text"
                        id="weight"
                        name="weight"
                        placeholder="Weight in(Kg)"
                        className="w-full p-2 outline-none"
                        value={formData.weight}
                        onChange={handleChange}
                      />
                    </div>
                  </li>
                  <li
                    className="text-center border-2 w-[32%]"
                    style={{ borderColor: "gray" }}
                  >
                    <label
                      htmlFor="age"
                      className="uppercase"
                      style={{ color: "gray" }}
                    >
                      Age
                    </label>
                    <div className="flex bg-none">
                      <input
                        type="text"
                        id="age"
                        name="age"
                        placeholder="Age(years)"
                        className="w-full p-2 outline-none"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>
                  </li>
                </ul>
                <ul className="mt-4">
                  <li className="flex w-full text-center gap-2">
                    <label
                      htmlFor="occasion"
                      className="uppercase w-[30%]"
                      style={{ color: "gray" }}
                    >
                      Occasion
                    </label>
                    <select
                      name="occasion"
                      id="occasion"
                      className="p-1 outline-none w-[65%] border-2"
                      value={formData.occasion}
                      onChange={handleChange}
                    >
                      <option value="none">Select Occasion</option>
                      <option value="Casual">Casual</option>
                      <option value="Formal">Formal</option>
                      <option value="Party">Party</option>
                      <option value="Wedding">Wedding</option>
                    </select>
                  </li>
                  <li className="flex w-full text-center gap-2 mt-4">
                    <label
                      htmlFor="type"
                      className="uppercase w-[30%]"
                      style={{ color: "gray" }}
                    >
                      Type
                    </label>
                    <select
                      name="type"
                      id="type"
                      className="p-1 outline-none w-[65%] border-2"
                      value={formData.type}
                      onChange={handleChange}
                    >
                        <option value="">Select</option>
                      <option value="Shirt">Shirt</option>
                      <option value="T-Shirt">T-shirt</option>
                      <option value="Jeans">Jeans</option>
                      <option value="Pants">Pants</option>
                      <option value="Shorts">Shorts</option>
                      <option value="Skirt">Skirt</option>
                      <option value="Blazer">Blazer</option>
                      <option value="Coat">Coat</option>
                      <option value="Suit">Suit</option>
                      <option value="Tracksuit">Tracksuit</option>
                    </select>
                  </li>
                  <li className="flex w-full text-center gap-2 mt-4">
                    <label
                      htmlFor="fabric"
                      className="uppercase w-[30%]"
                      style={{ color: "gray" }}
                    >
                      Fabric
                    </label>
                    <select
                      name="fabric"
                      id="fabric"
                      className="p-1 outline-none w-[65%] border-2"
                      value={formData.fabric}
                      onChange={handleChange}
                    >
                      <option value="none">Select Fabric</option>
                      <option value="Cotton">Cotton</option>
                      <option value="Silk">Silk</option>
                      <option value="Denim">Denim</option>
                      <option value="Wool">Wool</option>
                    </select>
                  </li>
                  <li className="flex w-full text-center gap-2 mt-4">
                    <label
                      htmlFor="color"
                      className="uppercase w-[30%]"
                      style={{ color: "gray" }}
                    >
                      Color
                    </label>
                    <select
                      name="color"
                      id="color"
                      className="p-1 outline-none w-[65%] border-2"
                      value={formData.color}
                      onChange={handleChange}
                    >
                      <option value="none">Select Color</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Green">Green</option>
                      <option value="Yellow">Yellow</option>
                    </select>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div
          className="lg:w-[65vw] w-full h-[650px] lg:h-screen flex flex-col"
          style={{ backgroundColor: "#f5f4f3" }}
        >
          <div className="text-[29px] uppercase  text-black dark:text-white justify-center text-left p-4">
            Body Measurements
          </div>
          <ol className="flex-grow">
          {["","Shirt", "T-Shirt","Blazer","Suit","Tracksuit", "Coat"].includes(formData.type) ? ( 
            <ul>
              <div className="text-[20px] uppercase  text-black dark:text-white justify-center text-left px-4">
                Upper Body
              </div>
              <li className="flex w-full text-center mt-4">
                <label
                  htmlFor="chest"
                  className="uppercase w-[30%] lg:w-[20%]"
                  style={{ color: "gray" }}
                >
                 {formData.gender === "male" ? "Chest" : "Breast"}
                </label>
                <div
                  className="border-2 w-[68%] lg:w-[20%]"
                  style={{ borderColor: "gray" }}
                >
                  <input
                    type="text"
                    id="chest"
                    name="chest"
                    className="p-1 outline-none w-[60%]"
                    value={formData.chest}
                    onChange={handleChange}
                  />
                  <select
                    name="chest"
                    id="chest"
                    className="p-1 outline-none w-[40%] text-right"
                    value={formData.chestUnit}
                    onChange={handleChange}
                  >
                    <option value="cm">cm</option>
                    <option value="inches">inches</option>
                  </select>
                </div>
              </li>
              <li className="flex w-full text-center mt-4">
                <label
                  htmlFor="shoulders"
                  className="uppercase w-[30%] lg:w-[20%]"
                  style={{ color: "gray" }}
                >
                  Shoulders
                </label>
                <div
                  className="border-2 w-[68%] lg:w-[20%]"
                  style={{ borderColor: "gray" }}
                >
                  <input
                    type="text"
                    id="shoulders"
                    name="shoulders"
                    className="p-1 outline-none w-[60%]"
                    value={formData.shoulders}
                    onChange={handleChange}
                  />
                  <select
                    name="shoulderUnit"
                    id="shoulderUnit"
                    className="p-1 outline-none w-[40%] text-right"
                    value={formData.shouldersUnit}
                    onChange={handleChange}
                  >
                    <option value="cm">cm</option>
                    <option value="inches">inches</option>
                  </select>
                </div>
              </li>

              <li className="flex w-full text-center mt-4">
                <label
                  htmlFor="sleeve"
                  className="uppercase w-[30%] lg:w-[20%]"
                  style={{ color: "gray" }}
                >
                  Sle.Length
                </label>
                <div
                  className="border-2 w-[68%] lg:w-[20%]"
                  style={{ borderColor: "gray" }}
                >
                  <select
                    name="sleeve"
                    id="sleeve"
                    className="p-1 outline-none w-[100%] text-left"
                    value={formData.sleeve}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Without">Without Sleeves</option>
                    <option value="Cap">Cap</option>
                    <option value="Short">Short</option>
                    <option value="Elbow">Elbow</option>
                    <option value="3/4">3/4</option>
                    <option value="Long">Long</option>
                    <option value="Bell">Bell</option>
                  </select>
                </div>
              </li>
              <li className="flex w-full text-center mt-4">
                <label
                  htmlFor="neck"
                  className="uppercase w-[30%] lg:w-[20%]"
                  style={{ color: "gray" }}
                >
                  NeckLines
                </label>
                <div
                  className="border-2 w-[68%] lg:w-[20%]"
                  style={{ borderColor: "gray" }}
                >
                  <select
                    name="neck"
                    id="neck"
                    className="p-1 outline-none w-[100%] text-left px-2"
                    value={formData.neck}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Crew">Crew</option>
                    <option value="Boat">Boat</option>
                    <option value="round">Round</option>
                    <option value="VNeck">V Neck</option>
                    <option value="VNeckMiddle">V Neck Middle</option>
                    <option value="VNeckDeep">V Neck Deep</option>
                    <option value="Uneck">U Neck</option>
                    <option value="Halter">Halter</option>
                  </select>
                </div>
              </li>
            </ul>
            ) : ( 
            <ul >
              <div className="text-[20px] uppercase  text-black dark:text-white justify-center text-left px-4">
                Lower Body
              </div>
              <li className="flex w-full text-center mt-4">
                <label
                  htmlFor="waist"
                  className="uppercase w-[30%] lg:w-[20%]"
                  style={{ color: "gray" }}
                >
                  Waist
                </label>
                <div
                  className="border-2 w-[68%] lg:w-[20%]"
                  style={{ borderColor: "gray" }}
                >
                  <input
                    type="text"
                    id="waist"
                    name="waist"
                    className="p-1 outline-none w-[60%]"
                    value={formData.waist}
                    onChange={handleChange}
                  />
                  <select
                    name="waist"
                    id="waist"
                    className="p-1 outline-none w-[40%] text-right"
                    value={formData.waistUnit}
                    onChange={handleChange}
                  >
                    <option value="cm">cm</option>
                    <option value="inches">inches</option>
                  </select>
                </div>
              </li>
              <li className="flex w-full text-center mt-4">
                <label
                  htmlFor="hips"
                  className="uppercase w-[30%] lg:w-[20%]"
                  style={{ color: "gray" }}
                >
                  Hips
                </label>
                <div
                  className="border-2 w-[68%] lg:w-[20%]"
                  style={{ borderColor: "gray" }}
                >
                  <input
                    type="text"
                    id="hips"
                    name="hips"
                    className="p-1 outline-none w-[60%]"
                    value={formData.hips}
                    onChange={handleChange}
                  />
                  <select
                    name="hips"
                    id="hips"
                    className="p-1 outline-none w-[40%] text-right"
                    value={formData.hipsUnit}
                    onChange={handleChange}
                  >
                    <option value="cm">cm</option>
                    <option value="inches">inches</option>
                  </select>
                </div>
              </li>
              <li className="flex w-full text-center mt-4">
                <label
                  htmlFor="length"
                  className="uppercase w-[30%] lg:w-[20%]"
                  style={{ color: "gray" }}
                >
                  Length
                </label>
                <div
                  className="border-2 w-[68%] lg:w-[20%]"
                  style={{ borderColor: "gray" }}
                >
                  <select
                    name="length"
                    id="length"
                    className="p-1 outline-none w-[100%] text-left"
                    value={formData.length}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="SHORT">Short</option>
                    <option value="KNEE">Knee</option>
                    <option value="MIDI">Midi</option>
                  </select>
                </div>
              </li>
              <li className="flex w-full text-center mt-4">
                <label
                  htmlFor="pocket"
                  className="uppercase w-[30%] lg:w-[20%]"
                  style={{ color: "gray" }}
                >
                  Pocket
                </label>
                <div
                  className="border-2 w-[68%] lg:w-[20%]"
                  style={{ borderColor: "gray" }}
                >
                  <select
                    name="pocket"
                    id="pocket"
                    className="p-1 outline-none w-[100%] text-left"
                    value={formData.pocket}
                    onChange={handleChange}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </li>
            </ul>
            )}
          </ol>
          <div className="mt-auto  p-4  h-[250px] flex flex-col lg:justify-end items-center lg:items-end">
            <div className="flex flex-col text-left w-full lg:text-right "style={{ lineHeight: "0.9" }}>
            <h1 className="text-[50px] font-semibold ">{formData.occasion} {formData.type}</h1>
            <h1 className="text-[50px] font-semibold">Rs</h1>
            </div>
            <button
              className="m-1 text-white dark:text-black p-2 px-4 rounded-full w-[200px] h-[50px] border-[1px] border-black text-xl"
              style={{ backgroundColor: "#e8448a" }}
              onClick={handleSubmit}
            >
              Add to Cart
            </button>
            <button
              className="m-1  text-black dark:text-white p-2 px-4 rounded-full w-[200px] h-[50px] border-[1px] border-black text-xl"
              style={{ backgroundColor: "#de7921" }}
            >
              Buy Now
            </button>
            <p className="m-1 uppercase text-xs">
              Order today, receive in 2 weeks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPage;
