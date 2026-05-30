import React from "react";
import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="bg-[#f6faff] w-[90%] mx-auto justify-center items-center text-center py-12 px-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold text-[#2a715c] mb-4"
      >
        Our Story
      </motion.h2>

      {/* Paragraphs */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-4 text-gray-800"
      >
        The WealthyMan was born from a simple but urgent realization: many young
        people have the talent, drive, and dreams, but lack access to the
        guidance, structure, and resources that unlock their full potential.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-4 text-gray-800"
      >
        Our founder, Grace Yusuf, experienced this firsthand. After years of
        navigating the uncertain path from ambition to impact, she envisioned a
        platform where young people wouldn't just survive the early stages of
        their career journeys, they’d thrive. Not by accident, but by design.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-6 text-gray-800"
      >
        TMW is that space. A platform built for the underrepresented and the
        underestimated, where mentorship meets action, and learning leads to
        lasting results. Today, we’re proud to walk with hundreds of emerging
        leaders, helping them build assets that don’t expire: skills,
        confidence, networks, and global relevance.
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#0051cd] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition self-start"
      >
        Join Our Journey
      </motion.button>
    </section>
  );
}
