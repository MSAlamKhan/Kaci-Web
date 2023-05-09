import React, { useState } from "react";
import Logo from "../assets/images/logo_white.png";
import { Link, NavLink } from "react-router-dom";
import { mainNavlinks, moreNavLinks } from "../constants/data";
import { GoChevronRight } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="w-full h-full max-w-[250px] pb-6 bg-[#222222] text-white">
      {/* Logo */}
      <Link
        to="/travel-safe"
        className="flex flex-col justify-center items-center mx-auto py-4"
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
  );
};

const NavItem = ({ title, type, icon, path, list, chevron }) => {
  const [toggle, setToggle] = useState(false);

  if (type === "dropdown") {
    return (
      <>
        <div
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
        </div>
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
