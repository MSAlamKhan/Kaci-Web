import React from "react";

const Page = ({ title, children }) => {
  return (
    <div className="font-poppins p-3 pt-12 md:pt-9 md:px-5">
      <header>
        <h1 className="font-semibold text-xl text-[#44403C]">{title}</h1>
        {children}
      </header>
    </div>
  );
};

export default Page;
