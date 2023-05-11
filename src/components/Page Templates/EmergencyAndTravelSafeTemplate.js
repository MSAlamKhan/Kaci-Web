import React from "react";
import Logo from "../assets/images/Logo.png";
import TSMap from "../assets/images/travel-safe-map.png";
import { FaFileAudio, FaUser } from "react-icons/fa";
import { Footer } from "../components";

const EmergencyAndTravelSafeTemplate = ({
  data,
  pageName,
  title,
  pageType = "Trip",
}) => {
  return (
    <div className="text-white font-poppins">
      {/* Header */}
      <header className="flex items-center py-3 px-3 sm:px-6">
        <img className="w-24" src={Logo} alt="Kaci logo" />
        <h1 className="text-base font-bold text-black pr-2 ml-auto sm:pr-28 sm:mx-auto">
          {pageName}
        </h1>
      </header>

      {/* Body */}
      <div className="relative">
        <div className="absolute top-0 w-full h-96 bg-gradient-to-bl from-[#AE2F34] to-[#E14146] -z-[1]" />
        <div className="absolute top-0 w-full h-full bg-[#F0F0F0] -z-[2]" />

        <main className="max-w-2xl text-center mx-auto px-4">
          <h2 className="pt-8 text-2xl sm:text-3xl font-bold">{title}</h2>
          <div className="max-w-xs flex justify-around text-xs bg-[#9B292D] p-3 mt-3 mx-auto rounded-lg">
            <span>
              Country: &nbsp; <b>{data.country}</b>
            </span>
            <b>|</b>
            <span>
              Status: &nbsp; <b>{data.status}</b>
            </span>
          </div>

          <div className="py-3 w-full flex flex-col xs:flex-row justify-between font-extralight text-xs">
            <span>
              Reference Code: &nbsp;
              <span className="font-medium">{data.refereceCode}</span>
            </span>
            <br className="xs:hidden" />
            <span className="font-medium">{data.date}</span>
          </div>

          <section className="w-full bg-white p-8 px-10 xs:p-10 xs:px-14 text-xs">
            {/* Users Details */}
            <div className="flex flex-col items-center border-b border-[#E5E5E5]">
              <h2 className="p-1.5 px-4 rounded-lg bg-[#DC3F44]">
                Users Details
              </h2>

              <div className="w-16 h-16 flex justify-center items-center rounded-full text-black text-4xl p-2 border border-gray-400 mt-2.5">
                <FaUser />
              </div>

              <Details arr={data.userDetails} />
              <br />
              <br />
            </div>

            {/* Dependant Details */}
            <div className="flex flex-col items-center py-4 border-b border-[#E5E5E5]">
              <h2 className="p-1.5 px-4 rounded-lg bg-[#DC3F44]">
                Dependant Details
              </h2>

              {/* Mapping on dependants */}
              {data.dependantDetails.map((item, idx) => (
                <div
                  className={`w-full max-w-xs flex flex-col py-2.5 ${
                    data.dependantDetails.length - 1 !== idx
                      ? "border-b border-[#E5E5E5]"
                      : ""
                  }`}
                >
                  <span className="text-xs font-medium text-[#DC3F44]">
                    {item.title}
                  </span>

                  {/* Mapping on each dependant's details */}
                  <Details arr={item.details} />
                </div>
              ))}
            </div>

            {/* Trip || Emergency Details */}
            <div className="flex flex-col items-center py-4">
              <h2 className="p-1.5 px-4 rounded-lg bg-[#DC3F44]">
                {pageType === "Trip" ? "Trip Details" : "Emergency Details"}
              </h2>

              {/* Mapping on details */}
              <Details arr={data?.tripDetails || data?.emergencyDetails} />

              <br />

              <img width="100%" src={TSMap} alt="Map" />
            </div>

            {/* Other Details */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-400">Comment</span>
              <span className="text-xs font-semibold text-black">
                {data.comment}
              </span>

              <br />
              <br />
              <br />

              <span className="text-[10px] text-gray-400">Media Files</span>
              <div className="grid grid-cols-2 xs:grid-cols-4 gap-3 text-[10px] font-medium text-white text-center mt-1">
                {data.mediaFiles.map((item, idx) => (
                  <div
                    key={item.mediaType + idx}
                    className={`flex items-center justify-center min-h-[150px] overflow-hidden ${
                      item.mediaType === "audio"
                        ? "bg-[#E14146]"
                        : "bg-gray-300"
                    }`}
                  >
                    {item.mediaType === "image" ? (
                      <img
                        className="object-cover w-full h-full"
                        src={item.file}
                        alt="media"
                      />
                    ) : item.mediaType === "audio" ? (
                      <div className="flex flex-col justify-center items-center">
                        <FaFileAudio className="text-xl" />
                        <span>{item.fileName}</span>
                      </div>
                    ) : (
                      <video src={item.file}></video>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <br />
          <br />
          <br />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Details = ({ arr }) => {
  return arr.map((elem, idx) => (
    <>
      <br />
      <span key={elem.title + idx} className="text-[10px] text-gray-400">
        {elem.title}
      </span>
      <span key={elem.value + idx} className="text-xs font-semibold text-black">
        {elem.value}
      </span>
    </>
  ));
};

export default EmergencyAndTravelSafeTemplate;
