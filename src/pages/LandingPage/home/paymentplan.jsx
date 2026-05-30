import React from "react";

import { motion } from "framer-motion";

const plans = [
  {
    id: 1,
    title: "Offer #1 – The Elite Boost",
    description: "Buy 4 Elite Courses and get:",
    benefits: [
      "1 Premium Course and 1 paid Foundational Course FREE",
      "A 30-min exclusive Q&A with the Founder",
      "20% discount on one exclusive paid event of choice organized by TWM within the next 1 year",
    ],
    note: "Limited slots for the founder session!",
    button: (
      <div className="mt-4 bg-white text-[#0051cd] py-2 px-4 rounded-lg transition">
        {" "}
        Unlock More. Pay Less. Learn Smarter.
      </div>
    ),
    color: "bg-[#0051cd]",
    textColor: "text-white",
    icon: <i className="bi bi-check2-circle"></i>,
  },
  {
    id: 2,
    title: "Offer #2 – Corporate Learning Bundle",
    description:
      "Want to train your team? Get 6 Elite Courses at-a-go and enjoy:",
    benefits: [
      "Private virtual team workshop with elite members of TWM",
      "A feature on our Corporate Partner Newsletter Release",
      "A one-time 30% discount on on-site staff training",
    ],
    button: (
      <div className="mt-4 bg-[#0051cd] text-white py-2 px-4 rounded-lg transition">
        Unlock More. Pay Less. Learn Smarter.
      </div>
    ),
    color: "bg-white",
    textColor: "text-[#0051cd]",
    icon: <i className="bi bi-check2-circle"></i>,
  },
  {
    id: 3,
    title: "Offer #3 – Full Access Pass",
    description: "Pay $1000 once. Learn forever.",
    benefits: [
      "Unlimited access to ALL courses for 1 year",
      "The High-Achievers Certificate, after completing at least 5 courses in each category",
      "VIP entry to exclusive sessions with Elite Members of TWM",
      "3× 30 minutes exclusive access to the Founder within 1 year",
      "70% off VIP access to one of TWM’s physical events of choice",
    ],
    color: "bg-[#307d6b]",
    textColor: "text-white",
    icon: <i className="bi bi-check2-circle"></i>,
  },
  {
    id: 4,
    title: "Offer #4 – Unlock Rewards As You Learn",
    description: "",
    benefits: [
      "Complete 6 Foundational Courses: Get 70% off one Premium Course of your choice",
      "Complete 4 Premium Courses: Get 50% off 1 Elite Course of your choice",
    ],
    button: (
      <div className="mt-4 bg-white text-[#307d6b] py-2 px-4 rounded-lg transition">
        Enroll today & claim your bonus
      </div>
    ),
    color: "bg-gradient-to-br from-[#ffc857] via-[#307d6b] to-[#0051cd]",
    textColor: "text-gray-900",
    icon: <i className="bi bi-check2-circle"></i>,
  },
];

export default function PaymentPlan() {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-[#307d6b] mb-4 uppercase tracking-wide">
          Payment Plan
        </h2>
        <p className="text-gray-700 mt-2 mb-10">
          Whether you’re just starting or ready to scale, there’s a Wealthy Man
          plan for you.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${plan.color} ${plan.textColor} rounded-xl shadow-lg p-6 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-lg font-bold mb-2">{plan.title}</h3>
                {plan.description && (
                  <p className="mb-4 text-sm">{plan.description}</p>
                )}
                <ul className="space-y-2 mb-4">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="pr-2">{plan.icon}</span>
                      <span className="text-start"> {benefit}</span>
                    </li>
                  ))}
                </ul>
                {plan.note && (
                  <p className="text-xs italic mb-4">{plan.note}</p>
                )}
              </div>
              {plan.button && <button className="">{plan.button}</button>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
