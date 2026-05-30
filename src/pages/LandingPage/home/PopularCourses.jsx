// FeaturedDeals.jsx
// Premium Featured Deals Slider for IP-Connect
// Dependencies:
// npm install framer-motion react-icons

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaTruck,
  FaTags,
  FaHeadset,
} from "react-icons/fa";

const deals = [
  {
    id: 1,
    badge: "Luxury",
    title: "Limited Offers",
    subtitle: "smartphones",
    price: "$1,299",
    image: "/images/smartphons/Samsung_galaxy_ultra_S24.png", // Place image in public/images/
    countdown: {
      days: "02",
      hours: "15",
      mins: "30",
    },
  },
  {
    id: 2,
    badge: "Gaming",
    title: "Gaming Deals",
    subtitle: "Consoles and accessories",
    price: "$799",
    image: "/images/Games devices/Sony_PlayStation_5_-_Pro.png",
    countdown: {
      days: "01",
      hours: "08",
      mins: "45",
    },
  },
  {
    id: 3,
    badge: "Audio",
    title: "Crystal Clear Sound",
    subtitle: "earbuds and speakers",
    price: "$299",
    image: "/images/Accessories/Apple_AirPods_Pro_3.png",
    countdown: {
      days: "03",
      hours: "10",
      mins: "12",
    },
  },
];

export default function FeaturedDeals() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const extendedDeals = [...deals, deals[0]];

  // Auto slide every 2 minutes (120,000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => {
    // When we reach the duplicated last slide,
    // instantly reset to the real first slide with no animation
    if (current === deals.length) {
      setIsAnimating(false);
      setCurrent(0);

      // Re-enable animation on the next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }
  };

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(deals.length - 1);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  const deal = deals[current];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-3">
          Featured{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
            Deals
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-lg">
          Luxury promo on top gadgets without limits
        </p>
      </div>

      {/* Slider Card */}
      <div className="relative max-w-5xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white items-center justify-center hover:bg-emerald-500/20 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white items-center justify-center hover:bg-emerald-500/20 transition"
        >
          <FaChevronRight />
        </button>

        <div className="relative h-[200px] sm:h-[300px] md:h-[300px] lg:h-[380px]  overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-500 shadow-[0_0_80px_rgba(16,185,129,0.25)]">
          <motion.div
            className="flex h-full"
            animate={{ x: `-${current * 100}%` }}
            transition={
              isAnimating
                ? {
                    type: "spring",
                    stiffness: 70,
                    damping: 20,
                    mass: 1,
                  }
                : { duration: 0 }
            }
            onAnimationComplete={handleAnimationComplete}
          >
            {extendedDeals.map((deal, index) => (
              <div
                key={`${deal.id}-${index}`}
                className="w-full h-full flex-shrink-0"
              >
                <div className="grid grid-cols-[0.9fr_1.1fr] gap-2 sm:gap-2 lg:gap-4 items-center h-full p-2 sm:p-2 sm:pb-2 lg:p-8 pb-2">
                  {/* LEFT SIDE - PRODUCT IMAGE */}
                  <div className="relative flex justify-center items-center h-full min-w-0">
                    <div className="absolute top-0 left-0 bg-yellow-300 text-black font-semibold px-2.5 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg z-10 text-[10px] sm:text-sm">
                      {deal.badge}
                    </div>

                    <div className="absolute w-28 h-28 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white/20 blur-3xl rounded-full"></div>

                    <motion.img
                      src={deal.image}
                      alt={deal.title}
                      className="relative w-28 sm:w-44 md:w-56 lg:w-72 xl:w-80 max-h-[300px]  object-contain drop-shadow-2xl"
                      animate={{ y: [0, -12, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* RIGHT SIDE - OFFER DETAILS */}
                  <div className="min-w-0 bg-black/35 backdrop-blur-xl rounded-[1.25rem] sm:rounded-[1.5rem] border border-white/10 p-3 sm:p-5 lg:p-4 text-white">
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-5">
                      <span className="text-emerald-300 font-semibold tracking-wide text-[9px] sm:text-[16px] lg:text-[16px]">
                        ENDS IN:
                      </span>

                      <div className="flex gap-1 sm:gap-1">
                        {[
                          { label: "DAYS", value: deal.countdown.days },
                          { label: "HRS", value: deal.countdown.hours },
                          { label: "MINS", value: deal.countdown.mins },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-white/10 border border-white/10 rounded-lg px-1 sm:px-3 py-.5 sm:py-2 text-center min-w-[32px] sm:min-w-[60px]"
                          >
                            <div className="text-sm sm:text-xl font-bold">
                              {item.value}
                            </div>
                            <div className="text-[8px] sm:text-[12px] text-gray-300">
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-white/10 mb-3 sm:mb-5"></div>

                    <h3 className="text-sm sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-1 sm:mb-4">
                      {deal.title}
                    </h3>

                    <p className="text-gray-200 text-xs sm:text-sm lg:text-base mb-2 sm:mb-5 line-clamp-2">
                      {deal.subtitle}
                    </p>

                    <div className="flex items-center justify-between gap-2">
                      <div className="text-sm sm:text-3xl lg:text-4xl font-extrabold">
                        {deal.price}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-emerald-400 hover:bg-emerald-300 text-black font-bold px-2 sm:px-6 py-1 sm:py-3 rounded-full shadow-xl transition text-xs sm:text-base whitespace-nowrap"
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pagination Dots - inside box */}
          <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-3">
            {deals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 lg:h-3 md:h-3 sm:h-3 rounded-full transition-all ${
                  current % deals.length === index
                    ? "bg-emerald-300 w-8"
                    : "bg-white/40 hover:bg-white/60 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trust Features */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: <FaShieldAlt />,
            title: "100% Authentic",
            subtitle: "Original Products",
          },
          {
            icon: <FaTruck />,
            title: "Fast Delivery",
            subtitle: "1–3 Business Days",
          },
          {
            icon: <FaTags />,
            title: "Best Price",
            subtitle: "Guaranteed",
          },
          {
            icon: <FaHeadset />,
            title: "24/7 Support",
            subtitle: "We're Here to Help",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center"
          >
            <div className="text-emerald-400 text-2xl mb-3 flex justify-center">
              {feature.icon}
            </div>
            <h4 className="text-white font-semibold">{feature.title}</h4>
            <p className="text-gray-400 text-sm mt-1">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
