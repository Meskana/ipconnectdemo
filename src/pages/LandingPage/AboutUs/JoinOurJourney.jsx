import React from "react";
import { motion } from "framer-motion";

export default function JoinOurJourney() {
  return (
    <section className="bg-[#0051CD] text-white pt-5 px-6 md:px-12 mb-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 w-[90%]">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="images/about.png"
            alt="Join"
            className="w-full md:w-[90%] max-w-md"
          />
        </motion.div>

        {/* Right Side: Text & Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left pb-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg mb-6">Ready to innovate with us?</p>
          <a href="/SignUp">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0051CD] font-semibold py-3 px-6 rounded-md mb-8 transition"
            >
              Enroll Now
            </motion.button>
          </a>

          <p className="text-sm mb-2">
            Want to keep in touch with our newsletter and updates?
          </p>

          <div className="flex  items-center border border-white rounded-md overflow-hidden w-full max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-black outline-none w-full"
            />
            <motion.button
              whileHover={{ backgroundColor: "#e6e6e6" }}
              className="bg-white text-[#0051CD] font-semibold px-6 py-3  sm:w-auto transition"
            >
              Submit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
