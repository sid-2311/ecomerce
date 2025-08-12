"use client";

import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <nav className="flex w-full h-16 justify-between items-center px-6">
      {/* Left Side - Logo & Links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight">SHOP.CO</h1>

        {/* Menu */}
        <div className="flex items-center gap-6 text-sm">
          {/* Shop dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <span className="flex items-center gap-1">
              Shop
              <span>▼</span>
            </span>
            {shopOpen && (
              <div className="absolute top-6 left-0 bg-white border rounded shadow p-3 w-40">
                <p className="hover:bg-gray-100 p-1">Men</p>
                <p className="hover:bg-gray-100 p-1">Women</p>
                <p className="hover:bg-gray-100 p-1">Kids</p>
              </div>
            )}
          </div>

          <span className="cursor-pointer">On Sale</span>
          <span className="cursor-pointer">New Arrivals</span>
          <span className="cursor-pointer">Brands</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center gap-4 text-xl">
        <FiShoppingCart className="cursor-pointer" />
        <FiUser className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
