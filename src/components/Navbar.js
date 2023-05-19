import React, { useLayoutEffect, useState } from "react";
import Logo from "../assets/images/logo_white.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { mainNavlinks, moreNavLinks } from "../constants/data";
import { GoChevronRight } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useLayoutEffect(() => {
    setToggle(false);
  }, [location]);

  return (
    <>
      {/* Menu btn (bars icon) */}
      <button
        onClick={() => setToggle(true)}
        className={`md:hidden absolute lg:hidden top-3 left-3 text-[#222222]`}
      >
        <FaBars />
      </button>

      {/* Backdrop (when menu opens) */}
      <div
        onClick={() => setToggle(false)}
        className={`${
          toggle ? "" : "hidden"
        } md:hidden fixed inset-0 bg-black/40 z-[2]`}
      />

      {/* Navbar */}
      <nav
        id="navbar"
        className={`h-auto md:h-auto absolute md:static top-0 left-0 ${
          toggle ? "" : "-translate-x-full md:-translate-x-0"
        } max-md:transition-all max-md:duration-300 w-full max-w-[250px] pb-6 bg-[#222222] text-white z-[3]`}
      >
        {/* close btn (inside navbar) */}
        <button
          onClick={() => setToggle(false)}
          className="md:hidden text-white mt-3 ml-3 text-lg"
        >
          <VscClose />
        </button>

        {/* Logo */}
        <Link
          to="/travel-safe"
          className="flex flex-col justify-center items-center mx-auto pb-4 md:py-4"
        >
          <img className="w-1/2" src={Logo} alt="Kaci" />
          <h2 className="relative -top-1 left-4 text-[8px] font-medium">
            Administrator
          </h2>
        </Link>

        {/* Navbar links */}
        <div className="font-poppins">
          {mainNavlinks.map((link) => (
            <NavItem key={link.title} {...link} />
          ))}

          <h3 className="mt-5 ml-5">More</h3>
          {moreNavLinks.map((link) => (
            <NavItem key={link.title} {...link} />
          ))}
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ title, type, icon, path, list, chevron }) => {
  const [toggle, setToggle] = useState(false);

  if (type === "dropdown") {
    return (
      <>
        <NavLink
          onClick={() => setToggle(!toggle)}
          className={`flex items-center p-1 py-1.5 pl-5 pr-2 text-white font-medium text-xs hover:bg-[#e14146] cursor-pointer`}
        >
          {icon}
          <span className="pl-3">{title}</span>
          {chevron && (
            <GoChevronRight
              className={`${toggle ? "rotate-90" : ""} ml-auto`}
            />
          )}
        </NavLink>
        {toggle && (
          <ul className="text-white marker:text-white list-outside list-disc pl-14 ml-3">
            {list.map(({ title, path }) => (
              <li key={title}>
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-[#e14146]" : "text-white"
                    } p-1.5 text-xs font-medium`;
                  }}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${
          isActive ? "bg-[#e14146]" : ""
        } flex items-center p-1 py-1.5 pl-5 pr-2 text-white font-medium text-xs hover:bg-[#e14146]`
      }
    >
      {icon}
      <span className="pl-3">{title}</span>
      {chevron && <GoChevronRight className="ml-auto" />}
    </NavLink>
  );
};

export default Navbar;
