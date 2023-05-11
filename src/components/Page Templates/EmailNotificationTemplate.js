import React from "react";
import Logo from "../assets/images/Logo.png";
import { Footer } from "..";
import PcLockIllustration from "../assets/images/folder_illustration.svg";

function EmailSignupOTP({ data }) {
  return (
    <div className="h-screen text-xs xs:text-sm email-notification-bg">
      <main
        className={
          "flex flex-col items-center mx-6 xs:mx-12 px-8 xs:px-10 mb-12 border-l-[12px] xs:border-l-[18px] sm:border-l-[32px] border-[#e53e45] space-y-3 md:space-y-3 bg-transparent"
        }
      >
        <img className="w-64 my-20" src={Logo} alt="Kaci" />
        <img className="w-[28rem] my-6" src={PcLockIllustration} alt="Kaci" />
        <div className="space-y-4 md:space-y-4 opacity-70">
          <h1 className="text-xl my-2 ">
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
          <p className="text-4xl my-2 font-semibold tracking-[.5rem]">8259</p>
          <p className="">
            <em>
              Note: This code should not be shared and will expire after 60
              minutes.
            </em>
          </p>
          <p className="font-bold capitalize">The watchful assistant!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EmailSignupOTP;
