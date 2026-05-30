import React from "react";
import { motion } from "framer-motion";

// Replace with actual imported images or require() if using local assets
const testimonials = [
  {
    text: `I joined the Elite plan and received step-by-step support that took my idea from concept to reality. TWM is the real deal.`,
    name: "Rahul M.",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    highlight: false,
  },
  {
    text: `TWM helped me go from a jobless graduate to launching a sustainable business that now employs 4 people. The mentorship was life-changing.`,
    name: "Grace A.",
    location: "Lagos, Nigeria",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    highlight: true,
  },
  {
    text: `What I love about TWM is the community. You're never alone. The energy, the events, the network—it's next level.`,
    name: "Nadia B.",
    location: "Nairobi, Kenya",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    highlight: false,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7fafc] py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-[#307d6b] text-2xl font-semibold tracking-wide mb-1">
          TESTIMONIALS
        </h2>
        <p className="text-gray-700 text-lg font-medium">
          Hear From the People We Empower
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[90%] mx-auto ">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2  hover:bg-[#0051cd] hover:text-white  shadow-lg bg-white text-gray-800 border-gray-200
        flex flex-col items-center p-8 transition-all mb-6 mt-4"
          >
            <div className="text-3xl mb-4">
              <i class="bi bi-dash-lg"></i>
              <i class="bi bi-quote"></i>
              <i class="bi bi-dash-lg"></i>
            </div>
            <p className="mb-6 text-base min-h-[84px]">{t.text}</p>
            <div className="font-semibold mt-auto">
              {t.name}
              <span className="font-normal text-sm  ml-1">{t.location}</span>
            </div>
            <img
              src={t.image}
              alt={t.name}
              className="w-25 h-25 rounded-full border-4 border-white -mb-20 mt-6 object-cover shadow-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
