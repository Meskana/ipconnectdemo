import React from "react";
import { motion } from "framer-motion";
import Navbarr from "./navbar";
export default function ContactUs() {
  return (
    <>
      <Navbarr />
      <section className=" py-16 md:px-16" id="contact">
        <h3 className="text-3xl text-center text-gray-900 font-bold mb-8">
          Contact Us
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2 pt-4 xl md:text-3xl font-bold text-gray-900 mb-4 px-3">
              We are here to help
            </h2>
            <p className="text-gray-600 text-base leading-relaxed px-3">
              Let us know how we can best serve you. Use the contact form to
              email us. It is an honor to support you in your journey toward
              global relevance.
            </p>
          </motion.div>

          {/* Right contact form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className=" p-6 md:p-8"
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-[#d8e8ff] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#d8e8ff] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-[#d8e8ff] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <textarea
                rows="4"
                placeholder="Comment"
                className="w-full border border-[#d8e8ff] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
              <div className="flex justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.78 }}
                  className="bg-[#0f9d58]  text-white  py-2 px-12 rounded-md transition"
                  type="submit"
                >
                  SEND MESSAGE
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
