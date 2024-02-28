import React from "react";
import { Globe } from "lucide-react";
import { Phone } from "lucide-react";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#ec3237] h-[100px] mt-8 ml-2 mr-2 flex  pt-4 justify-center rounded-md">
      <div className="flex  justify-center gap-1 w-[30%]">
        <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
          {" "}
          <Phone className="fill-[#ec3237] text-white  h-[40px] w-[20px]" />
        </div>
        <p className="mt-2 text-white text-sm">Toll free 1800 200 1234</p>
      </div>
      <div className="flex gap-1 w-[30%] justify-center ">
        <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
          <Facebook className="fill-[#ec3237] text-white  h-[50px] w-[90px]" />
        </div>
        <p className="mt-2 text-white text-sm">www.facebook.com/cripumps</p>
      </div>
      <div className="flex gap-1 w-[30%] justify-center ">
        <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
          <Globe className="fill-[#ec3237] text-white  h-[50px] w-[90px]" />
        </div>
        <p className="mt-2 text-white text-sm">www.crigroups.com</p>
      </div>
    </div>
  );
};

export default Footer;
