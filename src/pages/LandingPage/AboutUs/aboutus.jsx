import React from "react";
import { motion } from "framer-motion"; // <-- Added
import Curve from "./curve";
import OurStorySection from "./story";
import MissionVision from "./MissionVision";
import MeetOurTeam from "./MeetOurTeam";
import OurCoreValue from "./OurCoreValue";
import JoinOurJourney from "./JoinOurJourney";

import Navbar from "./navbar";

export default function AboutUs() {
  return (
    <>
      <section className=" bg-blue-700 min-h-50 text-white">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Animated heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            About Us
          </motion.h2>

          {/* Animated subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/90 mb-6"
          >
            We exist to help people build real assets that position them for
            global relevance.
          </motion.p>

          {/* Avatars and Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
          >
            <div className="flex -space-x-2">
              {[
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/women/42.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg",
                "https://randomuser.me/api/portraits/women/74.jpg",
              ].map((src, idx) => (
                <motion.img
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * idx, duration: 0.5 }}
                  viewport={{ once: true }}
                  src={src}
                  alt={`Avatar ${idx + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-white text-sm text-center">
              <span className="font-semibold">Trusted by 10k+ Students</span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="text-[#ffc857] text-lg flex">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
                <span className="font-bold text-white px-6">4.5</span>
                <span className="text-white/70">Ratings</span>
              </div>
            </div>
          </motion.div>

          {/* Tag Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute z-10 left-1/2 -translate-x-1/2 flex justify-center mt-10 px-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-300 rounded-[40px] h-[200px] w-[120px] p-3 text-sm shadow-md font-medium"
              >
                <i className="bi bi-star-fill text-white"></i>
                <p className="text-left text-blue-800">
                  We take growth <br />
                  seriously. <br />
                  Real work. <br />
                  Real Results.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-[#ffc857] rounded-[40px] h-[200px] w-[120px] text-sm shadow-md font-medium rotate-[-17deg]"
              >
                <i className="bi bi-star-fill text-white"></i>
                <p className=" text-black pt-2">
                  No matter your <br />
                  background, <br />
                  we’ll help you <br />
                  find clarity, <br />
                  relevance, and <br />
                  boldness to <br />
                  take up space.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-green-800 rounded-[40px] h-[200px] w-[120px] text-sm p-3 shadow-lg font-medium"
              >
                <i className="bi bi-star-fill"></i>
                <p className="text-white text-right pt-2">
                  Courses. <br />
                  Community. <br />
                  Mentorship. <br />
                  All embedded <br />
                  into one <br />
                  powerful <br />
                  journey.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <Curve />
        {/* Wave Divider */}
      </section>

      <OurStorySection />
      <MissionVision />
      <MeetOurTeam />
      <OurCoreValue />
      <JoinOurJourney />
    </>
  );
}
