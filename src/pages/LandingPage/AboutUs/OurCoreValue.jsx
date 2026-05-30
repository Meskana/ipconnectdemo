import React from "react";
import { motion } from "framer-motion";
const courses = [
  {
    title: "Personalized Mentorship",
    desc: "One-on-one guidence from global experts who've walked the path.",
    image: "/images/landing%20page/Rectangle%2024.png",
  },

  {
    title: "Real-World Execution Support",
    desc: "From ideas to real ventures - with you every step of the way.",
    image: "/images/landing%20page/Rectangle%2025.png",
  },
  {
    title: "Global Impact Community",
    desc: "Join a vibrant network of builder, dreamers, and doers.",
    image: "/images/landing%20page/Rectangle%2023.png",
  },
  {
    title: "PurPose-Driven Learning",
    desc: "Everything is aligned with solving global challenges(SDGs).",
    image: "/images/landing%20page/Rectangle%2027.png",
  },
];

export default function OurCoreValue() {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12 md:w-[90%]">
        <h2 className="text-xl font-bold text-[#307d6b]  mb-4">
          Our Core Values.
        </h2>
        <p className="text-sm text-gray-600">
          We go beyond Eduction. We help you build, launch and lead
        </p>
      </div>

      <div className="max-w-7xl mx-auto md:w-[95%] ">
        <div className="grid grid-cols-1 md:gap-13 gap-5 lg:gap-15 md:grid-cols-2 lg:grid-cols-4 ">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border p-2.5 border-gray-300"
            >
              {/* Course Image */}
              <div className="h-40overflow-hidden">
                <div
                  className="h-40 w-full  rounded-md bg-cover bg-center"
                  style={{ backgroundImage: `url(${course.image})` }}
                ></div>
              </div>

              {/* Course Content */}
              <div className="">
                <h3 className="text-sm font-bold text-[#0051cd] mb-2 mt-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm ">{course.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
