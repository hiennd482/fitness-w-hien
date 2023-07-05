import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./index.css";
import Navbar from "@/scenes/navbar";
import Benefits from "@/scenes/benefits";
import { SelectedPage } from "@/Types/types";
import Home from "./scenes/home";
import ContactUs from "./scenes/contact";
import Ourclass from "./scenes/ourClasses";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.ContactUs
  );
  const [isTopOfPage, setTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage}></Home>
      <Benefits setSelectedPage={setSelectedPage}></Benefits>
      <ContactUs setSelectedPage={setSelectedPage}></ContactUs>
      <Ourclass setSelectedPage={setSelectedPage}></Ourclass>
      <Footer setSelectedPage={setSelectedPage}></Footer>
    </div>
  );
}

export default App;
