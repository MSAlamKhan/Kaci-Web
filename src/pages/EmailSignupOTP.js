import React from "react";
import Logo from "../assets/images/Logo.png";
import KaciHelp from "../assets/images/Kaci Logo Send copy.png";
import Fb from "../assets/images/fb.png";
import Twitter from "../assets/images/twitter.png";
import Insta from "../assets/images/insta.svg";
import LinkedIn from "../assets/images/linkedin.png";
import PcLockIllustration from "../assets/images/folder_illustration.svg";
import Bg from "../assets/images/background.png";

function EmailSignupOTP() {
  return (
    <div className="h-screen text-sm">
      <main
        className={
          "flex flex-col items-center mx-16 px-20 mb-12 border-l-[32px] border-[#e53e45] space-y-3 md:space-y-3 "
        }
      >
        <img className="w-64 my-20" src={Logo} alt="Kaci" />
        <img className="w-[28rem] my-6" src={PcLockIllustration} alt="Kaci" />
        <div className="space-y-4 md:space-y-4 opacity-70">
          <h1 className="text-2xl my-2 ">
            Hello <b>Aisha John</b>,
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            rhoncus metus quis iaculis. In luctus tempor nulla eget maximus.
            Aliquam erat volutpat. Nulla efficitur fringilla magna non
            tincidunt. Aenean venenatis lacinia mauris ut bibendum. Vivamus
            sollicitudin lectus ac enim ullamcorper accumsan vitae non ex. Nulla
            vel felis et metus pharetra sollicitudin. Quisque vulputate turpis
            pretium viverra ornare.
          </p>
          <p className="">
            Please enter this verification code to get started on Kaci:
          </p>
          <p className="text-5xl my-2 font-semibold tracking-[.5rem]">8259</p>
          <p className="">
            Note: This code should not be shared and will expire after 60
            minutes.
          </p>
          <p className="font-bold capitalize">The watchful assistant!</p>
        </div>
      </main>
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
    </div>
  );
}

export default EmailSignupOTP;
