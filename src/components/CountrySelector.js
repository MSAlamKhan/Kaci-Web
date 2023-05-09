import React, { useState } from "react";
import { countries } from "../constants/data";
import { GoChevronDown } from "react-icons/go";
import { DropdownContainer } from "./helpers";

const CountrySelector = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    title: "Nigeria",
    flag: null,
  });

  const handleSelect = (data) => {
    return setSelectedCountry(data);
  };

  return (
    <button
      onClick={() => setToggle(!toggle)}
      className="relative flex items-center text-xs bg-[#F7F7F7] p-2 py-1.5 rounded-[6px] cursor-pointer"
    >
      <span>{selectedCountry.flag}</span>
      <span className="pl-1.5 pr-1">{selectedCountry.title}</span>
      <span className={toggle ? "rotate-180" : ""}>
        <GoChevronDown />
      </span>

      {/* Dropdown */}
      {toggle && (
        <DropdownContainer extraStyles="text-left">
          {countries.map((data, idx) => (
            <div
              onClick={() => handleSelect(data)}
              className={`p-1 pr-8 cursor-pointer hover:text-gray-500 ${
                idx !== countries.length ? "border-b border-[#E7E7E7]" : ""
              }`}
              role="option"
            >
              <span>{data.flag}</span>
              <span className="pl-2 text-[10px]">{data.title}</span>
            </div>
          ))}
        </DropdownContainer>
      )}
    </button>
  );
};

export default CountrySelector;
