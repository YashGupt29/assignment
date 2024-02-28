import React from "react";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <img src={logo} alt="logo" className="w-[250px]" />
    </div>
  );
};

export default Header;
