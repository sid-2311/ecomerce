"use client";
import React from "react";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "$59.99",
    image: "https://via.placeholder.com/300x200?text=Headphones"
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "$129.99",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch"
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: "$39.99",
    image: "https://via.placeholder.com/300x200?text=Gaming+Mouse"
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: "$79.99",
    image: "https://via.placeholder.com/300x200?text=Speaker"
  },
  {
    id: 5,
    title: "Smartphone",
    price: "$699.99",
    image: "https://via.placeholder.com/300x200?text=Smartphone"
  },
  {
    id: 6,
    title: "Laptop",
    price: "$999.99",
    image: "https://via.placeholder.com/300x200?text=Laptop"
  }
];

const LatestArrival = () => {
  return (
    <section className="p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8">Latest Arrival</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-green-600 font-semibold">{product.price}</p>
            </div>
            <div className="p-4 pt-0">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArrival;
