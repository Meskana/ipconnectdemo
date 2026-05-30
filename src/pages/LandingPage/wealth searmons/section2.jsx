import React from "react";
import { motion } from "framer-motion";
import { PiEarThin } from "react-icons/pi";

const resources = [
  {
    title: "You Don’t Need a Job to Start Acting Like a Professional",
    desc: "Dress the part. Show up early. Build your narrative.",
    duration: "1 - min read",
    author: "By Money Banks",
    linkText: "Read",
  },
  {
    title: "Money Moves That Actually Build Your Confidence",
    desc: "It's not just budgeting, it's about control and clarity.",
    duration: "5 - min play",
    author: "By TMW Inc.",
    linkText: "Listen",
  },
  {
    title: "You Are the Asset",
    desc: "Before the offer letter, before the bag, invest in you!",
    duration: "5 - min read",
    author: "By TMW Founder",
    linkText: "Read",
  },
  {
    title: "Relevance is the new Rich",
    desc: "Learn how to build leverage through visibility and skill stacking.",
    duration: "5 - min Video",
    author: "By TMW Inc.",
    linkText: "Watch",
  },
];

export default function ResourceSection() {
  return (
    <section className="bg-[#f6faff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#e7effd] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <div className="text-sm text-gray-500 mb-2 flex items-center space-x-2">
                <span>{item.duration}</span>
                <span>•</span>
                <span>{item.author}</span>
              </div>
              <a
                href="#"
                className="text-[#0051cd] font-semibold hover:underline"
              >
                {item.linkText}
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#e7effd] p-6 rounded-lg shadow-sm mt-8 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-row">
            <PiEarThin className="text-green-600 bg-green-100 text-3xl p-1 rounded-sm" />
            <h3 className="text-sm text-gray-900 ml-6 ">Today's Nuggets</h3>
          </div>
          <ul className="">
            <li className="flex items-center">
              <i className="bi bi-dot text-[#0051cd] text-4xl"></i>
              <span className="">
                Being early is a soft skill, Practice it!
              </span>
            </li>
            <li className="flex items-center">
              <i className="bi bi-dot text-[#0051cd] text-4xl"></i>
              <span className="">
                What's one skill you've been avoiding? Give it 15 minutes today.
              </span>
            </li>
            <li className="flex items-center">
              <i className="bi bi-dot text-[#0051cd] text-4xl"></i>
              <span className="">
                Update your Linkedin headline. Make it tell your current story.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
