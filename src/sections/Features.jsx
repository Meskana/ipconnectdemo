import React from "react";

const features = [
  {
    title: "Real-World Learning",
    desc: "Go beyond theory with practical programs aligned with the UN SDGs.",
  },
  {
    title: "Expert Mentorship",
    desc: "Work closely with mentors and get real-world guidance.",
  },
  {
    title: "Career Acceleration",
    desc: "Receive support every step to grow your career.",
  },
  {
    title: "Global Community",
    desc: "Join a diverse network of changemakers.",
  },
  {
    title: "Tailored Courses",
    desc: "Access customized courses for leaders, founders, and innovators.",
  },
  {
    title: "Safe Space to Grow",
    desc: "We nurture your growth in a supportive environment.",
  },
];

const Features = () => {
  return (
    <div className="relative">
      {/* Background blocks */}
      <div className="absolute bottom-0 grid grid-cols-1 md:grid-cols-2 h-[80%] md:h-[50%] w-full z-0">
        <div className="w-full h-full bg-[radial-gradient(circle,_#bfdbfe,_white,_white)]"></div>
        <div className="w-full h-full bg-[radial-gradient(circle,_#a1f0a7,_white,_white)]"></div>
      </div>

      {/* Foreground content */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-green-500 font-bold text-sm mb-2">
            WHAT YOU GAIN BY JOINING TMW
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
            TMW equips you with the tools, mentorship, and opportunities to grow
            as a purpose-driven leader.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="border p-6 rounded-xl shadow-sm bg-white text-left"
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
