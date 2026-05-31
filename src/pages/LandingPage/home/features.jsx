import React, { useState } from "react";

import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";

// Update the features array:

const Smartphones = [
  {
    image: "/images/smartphons/iphone_17_pro_max.png",
    name: "iphone 17 pro max",
    sales: {
      label: "hot",
      style: "bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold",
    },
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/smartphons/iPhone_17_Air.png",
    name: "iPhone_17_Air",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/smartphons/iPhone_16_Plus.png",
    name: "iPhone_16_Plus",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/smartphons/Samsung_galaxy_ultra_S24.png",
    name: "Samsung galaxy ultra S24",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/smartphons/Samsung_Galaxy_Z_Flip7.png",
    name: "Samsung_Galaxy_Z_Flip7",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/smartphons/Samsung_Galaxy_Z_Fold7.png",
    name: "Samsung_Galaxy_Z_Fold7",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/smartphons/Google_Pixel_10_Pro_XL.png",
    name: "Google_Pixel_10_Pro",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/smartphons/Google_Pixel.png",
    name: "Google_Pixel 9",
    dile: "new",
    price: "#400,000",
  },
];

const Accessories = [
  {
    image: "/images/Accessories/Watchband.png",
    name: "Watchband",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/Accessories/Apple_Airpod.png",
    name: "Apple_Airpod",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/Accessories/Apple_AirPods_Pro_3.png",
    name: "Apple_AirPods_Pro_3",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/Accessories/Apple_Chargers_Cables.png",
    name: "Apple_Chargers_Cables",
    dile: "new",
    price: "#400,000",
  },
];

const Gamming = [
  {
    image: "/images/Games devices/Sony_PlayStation_5_-_Pro.png",
    name: "PlayStation_5_-_Pro",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/Games devices/PlayStation_5.png",
    name: "PlayStation_5",
    dile: "new",
    price: "#400,000",
  },
  {
    image: "/images/Games devices/Console_PS4_Slim_1TB.png",
    name: "Console_PS4_Slim_1TB",
    dile: "new",
    price: "#400,000",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("Smartphones");
  const product =
    activeTab === "Smartphones"
      ? Smartphones
      : activeTab === "Gaming"
        ? Gamming
        : Accessories;
  return (
    <div
      id="service"
      className="  bg-gradient-to-b from-gray-800 via-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center mb-12 w-full md:w-[45%] px-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          /* Changed flex-col for mobile, flex-row for desktop */
          /* Added overflow-x-auto to handle very small screens gracefully */
          className="text-sm md:text-xl font-medium text-white bg-gray-900 tracking-wider flex flex-row gap-1 md:gap-4 justify-between rounded-2xl p-1 border border-white/5 shadow-xl"
        >
          {["Smartphones", "Gaming", "Accessories"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 text-xs md:text-sm transition-all duration-300 rounded-xl whitespace-nowrap ${
                activeTab === tab
                  ? "bg-emerald-800 text-white shadow-inner opacity-100"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto md:w-[90%]">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 ">
          {product.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="  "
            >
              <div className="relative group bg-gradient-to-br from-[#454847] from-[2%] via-[#111312] via-[30%] to-[#0a0b0b] rounded-[2rem] p-3 h-full border border-white/10 shadow-2xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-emerald-500/10">
                {/* SALES BADGE - Properly positioned */}
                {item.sales && (
                  <span
                    className={`absolute top-5 right-5 z-20 uppercase tracking-widest px-3 py-1 rounded-full shadow-lg ${item.sales.style}`}
                  >
                    {item.sales.label}
                  </span>
                )}

                {/* IMAGE CONTAINER - Forces same height and width, centers perfectly */}
                <div className="relative aspect-square w-full mb-6  overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="flex flex-col space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-white tracking-tight leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-emerald-400 font-mono text-lg font-bold">
                      {item.price}
                    </p>
                  </div>

                  {/* BOTTOM ROW: Deal Badge and Add to Cart */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest font-medium">
                      {item.dile}
                    </span>

                    {/* Decorative Plus Icon for a 'Pro' feel */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
