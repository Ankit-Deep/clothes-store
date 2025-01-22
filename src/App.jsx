import { useState, useEffect } from "react";
import { Header, Footer, HeroSection } from "./components";
import { ThemeProvider } from "./components/context/theme";
import { Outlet } from "react-router";
import Home from "./pages/Home";
// import "./App.css";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className=" bg-white dark:bg-black min-h-screen items-center">
            <Header />

            {/* <Outlet/> */}
            <main className="pt-20">
              <Home/>  

            </main> 

            <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
