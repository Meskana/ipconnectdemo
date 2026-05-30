import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";

export default function WealthSermonTop() {
  return (
    <section className="bg-[#f6faff] py-12 px-4 sm:px-4 lg:px-6">
      {/* Section heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Wealth Creation Sermons
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Not just about money, these are mindset drops, skill building truths,
          and career gems that help you build yourself as an asset of global
          relevance.
        </motion.p>
        <motion.p
          className="text-[#ffc857] font-medium text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          “Think of it as your weekly reminder that you were made for more”
        </motion.p>
      </div>

      {/* Sermon Card */}
      <motion.div
        className="max-w-[90%] lg:max-w-[45%] md:max-w-[50%] mx-auto bg-[#307d6b] rounded-2xl shadow-lg p-6 text-white flex flex-row justify-between"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="flex justify-center items-center px-4">
          <PiGooglePodcastsLogoBold className="lg:text-8xl md:text-6xl text-6xl" />
        </div>
        <div>
          {/* Content */}
          <div>
            <h3 className="text-2xl sm:text-2xl  mb-2 font-['Rubik_Wet_Paint']">
              You Can’t Save Your Way Into Wealth
            </h3>
            <p className="text-sm sm:text-base mb-4">
              Shift from scarcity to strategy, learn why mindset and value are
              your biggest assets.
            </p>
            <p className="text-xs sm:text-sm">
              3 – min read &nbsp; • &nbsp; By TMW Founder
            </p>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link href="#">
              <motion.button
                className="bg-[#ffc857] hover:bg-[#ffc840] text-white px-8 py-2 rounded-lg font-medium transition"
                whileTap={{ scale: 0.95 }}
              >
                Read Now
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
