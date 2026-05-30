import { motion } from "framer-motion";
import React from "react";

export default function MeetTheFounder() {
  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto w-[95%] md:w-[90%]">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-[#307d6b] mb-4">
            MEET THE FOUNDER OF IP-CONNECT
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Behind every bold vision is someone who choose to start and stay
            committed. Meet the founder of The IP-connect communication.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="flex flex-col md:flex-row gap-8  items-stretch w-[95%] md:w-[85%] mx-auto">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full md:w-1/3 lg:w-1/4 "
          >
            <img
              src="images/landing page/ip-connect.jpg"
              alt="ip-connect"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </motion.div>

          {/* Founder Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-full md:w-2/3 lg:w-3/4"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-100">Prince Ebuka</h3>
              <p className="text-lg font-semibold text-gray-100">
                Founder & Visionary at IP-Connect Com.
              </p>
            </div>

            <div className="space-y-4 text-gray-400 text-[14px]">
              <p>
                Grace Yusuf is a Phenomenal Leader who you'll always find at the
                center of Global Economic Development Projects and Initiatives.
                She believes that no economy develops outside of the individuals
                living in it; hence, she is well-rounded in people-focused and
                prosperity-centered activities on a global scale. As a believer
                of God's Word, she has worked with several organizations across
                continents, with several projects kick-started by her visionary
                strategies. Over the years, she has climbed up the ladder of
                leadership, holding several executive positions that have fueled
                her strategic insights for global growth and expansion.
              </p>
              <p>
                {" "}
                She founded TWM Inc. to transform global talent and strategic
                economic development by equipping individuals with the mindset,
                skills, and networks to solve humanity’s greatest challenges.
                She is transforming underutilized potential into economic
                powerhouses—driving the United Nations' SDGs 1, 8, 9, 12, and 17
                through actionable frameworks. This trillion-dollar economic
                blind spot is being addressed in a systemic ecosystem she
                developed, merging entrepreneurship education, elite mentorship,
                and venture incubation to accelerate progress on UN SDGs—proving
                profit and purpose aren’t opposites.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
