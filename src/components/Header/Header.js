import React from "react";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div className="bg-[#1C2B35] font-lora">
      <div className="flex justify-between items-center w-9/12 mx-auto h-20">
        <img src={logo} alt="" />
        <div className="space-x-8 text-white">
          <a href="/order">Order</a>
          <a href="/order review">Order Review</a>
          <a href="/manage inventory">Manage Inventory</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
