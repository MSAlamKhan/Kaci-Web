import React from "react";
import KaciHelp from "../assets/images/Kaci Logo Send copy.png";
import Fb from "../assets/images/fb.png";
import Twitter from "../assets/images/twitter.png";
import Insta from "../assets/images/insta.svg";
import LinkedIn from "../assets/images/linkedin.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-6 bg-[#050505] text-white space-y-5 md:space-y-5">
      <img className="w-48" src={KaciHelp} alt="KaciHelp" />
      <ul className="flex items-center gap-4">
        <li>
          <img className="w-6" src={Fb} alt="Fb icon" />
        </li>
        <li>
          <img className="w-6" src={Twitter} alt="Twitter icon" />
        </li>
        <li>
          <img className="w-7 " src={Insta} alt="Instagram icon" />
        </li>
        <li>
          <img
            className="w-6 rounded-full"
            src={LinkedIn}
            alt="LinkedIn icon"
          />
        </li>
      </ul>
      <ul className="flex text-xs font-medium">
        <li className="px-2 border-r-2 border-white">Help</li>
        <li className="px-2 border-r-2 border-white">Download Kaci</li>
        <li className="px-2">Chat Kaci</li>
      </ul>
      <ul className="flex text-xs">
        <li className="px-2 border-r-2 border-white">
          Made in Najia &#128154;
        </li>
        <li className="px-2">Powered by FactCheck initiative</li>
      </ul>
    </footer>
  );
};

export default Footer;
