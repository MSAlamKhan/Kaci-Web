import React, { useEffect, useState } from "react";
import { countries } from "../constants/data";
import { GoChevronDown } from "react-icons/go";
import { DropdownContainer } from "./helpers";

const CountryFilter = ({ toggle, setToggle, curFilter, handleClick }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (data) => {
    handleClick(data);
    setSelectedCountry(data);
  };

  useEffect(() => {
    if (curFilter.filter !== "Country") {
      setSelectedCountry(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curFilter]);

  return (
    <button
      onClick={setToggle}
      className={`relative flex items-center text-xs ${
        curFilter.filter === "Country"
          ? "bg-red-100 hover:bg-red-200 dark:bg-red-200 dark:hover:bg-red-300"
          : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-500 dark:hover:bg-gray-600"
      }  p-2 py-1.5 rounded-[6px] cursor-pointer`}
    >
      {selectedCountry && (
        <img
          className="w-4 h-auto"
          src={selectedCountry.flag}
          alt={selectedCountry.title + " flag"}
        />
      )}
      <span className="pl-1.5 pr-1 text-xs">
        {!selectedCountry ? "All countries" : selectedCountry.title}
      </span>
      <span className={toggle ? "rotate-180" : ""}>
        <GoChevronDown />
      </span>

      {/* Dropdown */}
      {toggle && (
        <DropdownContainer extraStyles="text-left translate-x-[57%] xs:translate-x-0">
          <div
            onClick={() => handleSelect(null)}
            className={`flex items-center p-1 pt-1.5 pb-1 pr-8 border-b border-[#f2f2f2] cursor-pointer hover:text-gray-500`}
            role="option"
          >
            <span className="pl-8 text-[10px]">All countries</span>
          </div>
          {countries.map((data, idx) => (
            <div
              key={data.title + idx}
              onClick={() => handleSelect(data)}
              className={`flex items-center p-1 pr-8 cursor-pointer hover:text-gray-500 ${
                idx !== countries.length ? "border-b border-[#f2f2f2]" : ""
              }`}
              role="option"
            >
              <img
                className="w-4 h-auto"
                src={data.flag}
                alt={data.title + " flag"}
              />
              <span className="pl-4 text-[10px]">{data.title}</span>
            </div>
          ))}
        </DropdownContainer>
      )}
    </button>
  );
};

export default CountryFilter;
