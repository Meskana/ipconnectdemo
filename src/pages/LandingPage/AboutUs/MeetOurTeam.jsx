import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const members = [
  {
    name: "MICHEAL JAMES",
    role: "Community Lead",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "michael.james@example.com",
    linkedin: "https://linkedin.com/in/michaeljames",
  },
  {
    name: "MARIA STEPHEN",
    role: "Brand Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "maria.stephen@example.com",
    linkedin: "https://linkedin.com/in/mariastephen",
  },
  {
    name: "NELLY JAMES",
    role: "Outreach Consultant",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "nelly.james@example.com",
    linkedin: "https://linkedin.com/in/nellyjames",
  },
  {
    name: "JESSICA JAMES",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "jessica.james@example.com",
    linkedin: "https://linkedin.com/in/jessicajames",
  },
  {
    name: "MICHEAL JAMES",
    role: "Mentee Lead",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "mentee.michael@example.com",
    linkedin: "https://linkedin.com/in/mentee-michael",
  },
  {
    name: "CHUKWUDI ILONUBA",
    role: "Frontend Lead",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "mentee.michael@example.com",
    linkedin: "https://linkedin.com/in/mentee-michael",
  },
  {
    name: "MICHEAL JAMES",
    role: "Mentee Lead",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    email: "mentee.michael@example.com",
    linkedin: "https://linkedin.com/in/mentee-michael",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="w-[100%] mx-auto  ">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center mb-6"
      >
        Meet Our Team
      </motion.h3>
      <div className="flex flex-col  items-center md:flex-row md:items-start abosult text-white">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="  "
        >
          <img
            src="images/landing page/Founder image.jpg"
            alt="Grace Yusuf"
            className="  border-4 relative h-75 w-75 md:h-75 md:w-75 lg:h-80 lg:w-80 rounded-full  border-[#0051Cd] lg:ml-30 md:ml-30 -mt-2"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full  bg-[#0051Cd] md:pl-32 md:py-2 md:pr-2 p-6 mt-2"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-1">Grace Yusuf</h2>
          <p className="text-sm md:text-base font-medium">
            Founder & Visionary at TMW Inc.
          </p>
          <p className="text-sm mb-2 text-gray-100">grace1234@gmail.com</p>

          {/* Icons */}
          <div className="flex gap-5 text-xl mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:grace1234@gmail.com"
              className="hover:text-gray-300"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Description */}
          <p className="text-[14px] leading-relaxed text-gray-100">
            Grace Yusuf is a Phenomenal Leader who you'll always find at the
            center of Global Economic Development Projects and Initiatives. She
            believes that no economy develops outside the individuals living in
            it; hence, she is well-rounded in people-focused and
            prosperity-centered activities on a global scale. As a believer of
            God's Word, she has worked with several organizations across
            continents, with several projects kick-started by her visionary
            strategies...
            <br />
            <br />
            She founded TWM Inc. to transform global talent and strategic
            economic development by equipping individuals with the mindset,
            skills, and networks to solve humanity’s greatest challenges...
          </p>
        </motion.div>
      </div>

      {/* Team Members Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 w-[90%] mx-auto mt-10"
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg text-center p-2 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full mx-auto object-cover mb-3"
            />
            <h4 className="text-sm font-semibold text-gray-900">
              {member.name}
            </h4>
            <p className="text-xs text-gray-600">{member.role}</p>
            <div className="flex justify-center items-center gap-3 mt-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-600 hover:text-blue-800 text-lg" />
              </a>
              <a href={`mailto:${member.email}`}>
                <FaEnvelope className="text-gray-700 hover:text-gray-900 text-lg" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
