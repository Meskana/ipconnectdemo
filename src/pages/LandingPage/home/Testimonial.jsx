// Testimonials.jsx
// npm install framer-motion react-icons

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Femi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Amazing service! IP-Connect always delivers 100% original gadgets.",
  },
  {
    id: 2,
    name: "Sarah",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Fast delivery and premium customer support. Highly recommended.",
  },
  {
    id: 3,
    name: "Daniel",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    text: "Bought my iPhone here and everything was smooth and authentic.",
  },
  {
    id: 4,
    name: "Grace",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The best gadget store experience I’ve had in a long time.",
  },
  {
    id: 5,
    name: "Michael",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Premium gadgets with trusted service and quick delivery.",
  },
];

export default function Testimonial() {
  // Duplicate cards for smooth infinite movement
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-black py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          Testimonials
        </h2>

        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Trusted by gadget lovers across the country
        </p>
      </div>

      {/* Moving Slider */}
      <div className="relative">
        <motion.div
          className="flex gap-4 w-max cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loopTestimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateY: 8,
                rotateX: -6,
                scale: 1.03,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="
    w-[60vw]
    sm:w-[38vw]
    lg:w-[21vw]
    max-w-[420px]
    min-h-[200px]
    flex flex-col
    flex-shrink-0
    rounded-[2rem]
    border border-white/10
    bg-gradient-to-br
    from-white/10
    via-white/5
    to-emerald-500/20
    backdrop-blur-2xl
    p-6
    shadow-[0_10px_40px_rgba(16,185,129,0.15)]
    relative
    overflow-visible
    transform-gpu
  "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* User */}

              {/* Testimonial */}
              <p className="min-w-0 max-w-full text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                {item.text}
              </p>
              <div className="flex text-yellow-400 text-xs mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-emerald-400 object-cover shadow-lg"
                />

                <h4 className="mt-2 text-white font-semibold text-sm">
                  {item.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fade Effect Left */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* Fade Effect Right */}
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  );
}
