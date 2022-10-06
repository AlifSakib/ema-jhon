import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div className="bg-[#1C2B35] font-lora">
      <div className="flex justify-between items-center w-9/12 mx-auto h-20">
        <img src={logo} alt="" />
        <div className="space-x-8 text-white">
          <Link to="/">Shop</Link>
          <Link to="/orders">Order Review</Link>
          <Link to="/inventory">Manage Inventory</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
