import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const location = useLocation();
  console.log("location : ", location.pathname);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  return (
    <div>
      <motion.nav
        className="text-[1.4rem] py-5 flex justify-center align-middle border-b border-[#9F9F9F] leading-relaxed"
        data-aos="fade-down"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <motion.div
            className="cursor-pointer"
            data-aos-anchor-placement="bottom-bottom"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.1 }}
          >
            Gulhane Properties
          </motion.div>
          <div className="lg:hidden cursor-pointer" onClick={handleToggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <div
            className={`lg:flex lg:gap-32 gap-5 items-center justify-center ${
              menuOpen ? "flex" : "hidden"
            } flex-col lg:flex-row`}
          >
            <ul className="flex flex-col lg:flex-row lg:gap-12 gap-5">
              {["Home", "Services", "Project", "About Us"].map((item, index) => (
                <motion.li
                  key={item}
                  className={`cursor-pointer ${
                    location.pathname === `/${item.toLowerCase().replace(/ /g, "")}`
                      ? "text-white"
                      : "text-gray-300 hover:text-gray-100 duration-200"
                  }`}
                  onClick={() => {
                    navigate(`/${item.toLowerCase().replace(/ /g, "")}`);
                    setMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.div className="lg:mt-0">
              <button
                onClick={() => {
                  navigate("/contactUs");
                  setMenuOpen(false);
                }}
                className={`border border-[#9F9F9F] px-3 py-1 rounded-md ${
                  location.pathname === "/contactUs"
                    ? "text-white hover:text-gray-100"
                    : "text-gray-300 hover:text-gray-100 duration-200"
                }`}
              >
                Contact us
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
