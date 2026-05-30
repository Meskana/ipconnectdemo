import React from "react";
import { motion } from "framer-motion";
import { FaBullseye } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";

export default function MissionVision() {
  return (
    <section className="py-12 px-4 md:px-16 w-[85%] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-50">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="shadow-sm border-r-2 border-b-2 border-gray-300 p-6 w-full"
        >
          <div className="flex flex-col mb-4">
            <FaBullseye className="text-[#307d6b] text-3xl mb-2" />
            <h2 className="text-xl font-semibold text-[#307d6b]">
              Our Mission
            </h2>
          </div>
          <h3 className="text-base font-medium mb-2 text-center md:text-left">
            Solving Global Gaps, One Asset at a Time
          </h3>
          <p className="text-sm text-gray-700 text-center md:text-left">
            We build individuals to become invaluable economic assets by
            equipping them with practical wisdom, strategic mentorship, and
            execution support to create scalable solutions aligned with the
            United Nations' Sustainable Development Goals (SDGs).
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="shadow-sm border-l-2 border-b-2 border-gray-300 p-6 w-full"
        >
          <div className="flex flex-col items-center mb-4">
            <TbBulb className="text-[#307d6b] text-3xl mb-2" />
            <h2 className="text-xl font-semibold text-[#307d6b]">Our Vision</h2>
          </div>
          <h3 className="text-base font-medium mb-2 text-center md:text-left">
            A World Where Everyone is a Changemaker
          </h3>
          <p className="text-sm text-gray-700 text-center md:text-left">
            Our Vision is to build a global ecosystem where individuals are no
            longer passive job-seekers but active wealth creators and
            problem-solvers. In doing so, we position TWM as the world's premier
            platform for impact-driven talent development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
