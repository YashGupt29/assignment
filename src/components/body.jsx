import React from "react";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";

const Body = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-10">
        <div className="ml-[200px]">
          <img src={img1} alt="award" className="h-[450px] w-[400px]" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-[80%]">
            <h2 className="font-bold">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h2>
            <ul className="ml-4 mt-2 list-disc">
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <img src={img2} alt="ad" className="h-[50%] w-[80%] rounded-3xl" />
            <p>
              Government of India has awarded the
              <span className="font-bold">
                "National Energy Conservation Award 2018"
              </span>{" "}
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-11 font-semibold">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={img3} alt="tools" className="w-[70%] mt-[50px]" />
        <p className="w-[50%] font-normal">
          Valves - Pumps - Pipes - IOT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr className="w-[95%] border-t-2 border-red-600 mt-3 mb-3" />
        <h3 className="font-bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h3>
        <div className="w-[70%]">
          <p className="text-center">
            CHEMICALS & PROCESS <span className="text-[#f15f53]"> | </span>{" "}
            POWER
            <span className="text-[#f7a37d]"> | </span>
            WATER & WASTE WATER <span className="text-[#f15f53]"> | </span>OILS
            & GAS <span className="text-[#f7a37d]"> | </span> PHARMA{" "}
            <span className="text-[#f15f53]"> | </span> SUGARS & DISTILLERIES{" "}
            <span className="text-[#f7a37d]"> | </span>
            PAPER & PULP <span className="text-[#f15f53]"> | </span> MARINE &
            DEFENCE <span className="text-[#f15f53]"> | </span> METAL & MINING{" "}
            <span className="text-[#f15f53]"> | </span>
            FOOD & BEVERAGE <span className="text-[#f7a37d]"> | </span>{" "}
            PETROCHEMICAL & REFINERIES SOLAR{" "}
            <span className="text-[#f15f53]"> | </span> BUILDING{" "}
            <span className="text-[#f15f53]"> | </span> HVAC{" "}
            <span className="text-[#f7a37d]"> | </span>FIRE FIGHTING{" "}
            <span className="text-[#f7a37d]"> | </span>AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
