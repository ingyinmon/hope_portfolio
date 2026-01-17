import logo from "../assets/logo1.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-[70px] flex justify-center items-center">
        <nav className="fixed w-full  h-[70px]  flex justify-around items-center bg-black/60 backdrop-blur-sm text-white z-50">
          <img src={logo} alt="Logo" className="w-30 h-30" />
          <button
            onClick={toggleMenu}
            className="cursor-pointer text-5xl lg:hidden z-50"
          >
            &#8801;
          </button>
          <div
            className={`fixed  inset-0 lg:hidden flex transform items-center justify-center bg-black/50 opacity-80 transition-all duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col items-center  text-lg pt-[170px]">
              {[
                { to: "/", label: "Home" },
                { to: "/contact", label: "Contact" },
                { to: "/design", label: "Design" },
                { to: "/motion", label: "Motion" },
                { to: "/video", label: "Video" },
              ].map(({ to, label }) => (
                <li key={to} className="w-full px-10">
                  <NavLink
                    to={to}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block w-full rounded-md px-2 py-2 text-center
           transition-all duration-300 ease-out
           transform font-bold bg-black
           ${
             isActive
               ? " text-[#fc0053] scale-105"
               : "text-white hover:bg-[#fc0053]/80 hover:scale-105"
           }
           active:scale-95`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <ul className="hidden lg:flex justify-between gap-20 text-lg">
            <li>
              <NavLink to="/" className="hover:text-[#fc0053]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[#fc0053]">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/design" className="hover:text-[#fc0053]">
                Design
              </NavLink>
            </li>
            <li>
              <NavLink to="/motion" className="hover:text-[#fc0053]">
                Motion
              </NavLink>
            </li>
            <li>
              <NavLink to="/video" className="hover:text-[#fc0053]">
                Video
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
