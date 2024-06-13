import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Navbar from "./Component/CommneComponet/Navbar";
import Footer from "./Component/CommneComponet/Footer";
import ContactUs from "./page/ContactUs";
import About from "./page/About";
import Services from "./page/Services";

function App() {
  return (
    <div className=" mx-auto text-white bg-[#1F2023] overflow-x-hidden font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
