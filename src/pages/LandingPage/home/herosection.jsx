import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

export default function Herosection() {
  return (
    <div className="  sm:mt-4 lg:mt-0 min-h-[90vh]">
      <section className="  bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center overflow-hidden">
        <div className="container mx-auto px-4  sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mt-18 lg:mt-2"
          >
            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              cd
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Stop The Waste <br />
              <span className="text-[#0f9d58]">& Buy With Confidence</span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 mb-6 text-base sm:text-lg"
            >
              At IP-Connect, we sell, buy, and swap devices — bringing you the
              latest smartphones, unbeatable deals, and fast delivery all in one
              trusted place.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold w-full sm:w-auto text-center"
              >
                Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* TRUST BADGES */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-8 text-sm text-gray-400 items-center md:items-start"
            >
              <span>✔ 1000+ Happy Customers</span>
              <span>✔ Fast Nationwide Delivery</span>
              <span>✔ 100% Original Devices</span>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-[#0f9d58] blur-3xl opacity-20 rounded-full"></div>

            <motion.img
              src="/iphone.png"
              alt="IP-Connect Phones"
              className="relative w-3/4 sm:w-full max-w-xs sm:max-w-md drop-shadow-2xl"
              //animate={{ scale: 1, opacity: 1 }}
              //transition={{ delay: 0.5, duration: 0.8 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,

                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* FLOATING WHATSAPP CTA 
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className=" fixed bottom-6 right-6 z-50 sm:bottom-6 sm:right-6"
        >
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          >
            <FaWhatsapp className="text-2xl sm:text-3xl" />
          </a>
        </motion.div>
        */}
      </section>

      <div className="backdrop-blur-lg bg-gray-900   px-4 sm:px-6 lg:px-10 py-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
        {/* LEFT (takes MORE space) */}
        <div className="md:w-1/2">
          <strong className="text-gray-100 block mb-3">
            Trusted by 10k+ Customers
          </strong>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            {/* AVATARS */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex -space-x-2"
            >
              {["32", "44", "53", "26"].map((id, i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${id}.jpg`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </motion.div>

            {/* RATINGS */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-gray-300"
            >
              <span className="font-semibold">4.5 Ratings</span>
              <br />
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT STATS */}
        <div className="md:w-1/2 flex justify-between text-center">
          {/* ITEM */}
          <div className="flex-1">
            <p className="text-2xl sm:text-3xl font-bold text-white">15k+</p>
            <p className="text-gray-400 text-sm">Devices Sold</p>
          </div>

          {/* DIVIDER */}
          <div className="relative p-[1px] bg-gradient-to-b from-transparent via-white to-transparent rounded-lg"></div>

          {/* ITEM */}
          <div className="flex-1">
            <p className="text-2xl sm:text-3xl font-bold text-white">5+</p>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>

          {/* DIVIDER */}
          <div className="relative p-[1px] bg-gradient-to-b from-transparent via-white to-transparent rounded-lg"></div>

          {/* ITEM */}
          <div className="flex-1">
            <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
            <p className="text-gray-400 text-sm">Authentic Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
