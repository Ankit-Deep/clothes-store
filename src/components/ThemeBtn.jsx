import React, { useState } from "react";
import useTheme from "./Context/theme";

function ThemeBtn() {
  const [themeImage, setThemeImage] = useState(
    "/assets/lightTheme.png"
  );

  const { themeMode, darkTheme, lightTheme } = useTheme();

  const changeTheme = () => {
    console.log("clicked");

    if (themeMode === "light") {
      setThemeImage("/assets/darkTheme.png");

      darkTheme();
    } else {
      setThemeImage("/assets/lightTheme.png");

      lightTheme();
    }
  };

  return (
    <>
      <div>
        <img
          src={themeImage}
          alt="theme"
          className=" rounded-3xl w-8 h-8 cursor-pointer"
          onClick={changeTheme} 
        />
      </div>
    </>
  );
}

export default ThemeBtn;
