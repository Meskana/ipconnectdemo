import React, { useState } from "react";

const faqs = [
  {
    question: "How do I purchase airtime?",
    answer:
      "Go to the Airtime tab, select your network, enter your number and amount, then confirm with your PIN.",
  },
  {
    question: "Can I view past transactions?",
    answer: "Yes, recent transactions appear under the Transactions tab.",
  },
  {
    question: "How do I reset my PIN?",
    answer: "Go to Settings > Reset PIN and follow the instructions.",
  },
  {
    question: "How do I purchase airtime?",
    answer:
      "Go to the Airtime tab, select your network, enter your number and amount, then confirm with your PIN.",
  },
  {
    question: "Can I view past transactions?",
    answer: "Yes, recent transactions appear under the Transactions tab.",
  },
  {
    question: "How do I reset my PIN?",
    answer: "Go to Settings > Reset PIN and follow the instructions.",
  },
];

const PAGE_SIZE = 5;

export default function Frequentlyask() {
  const [active, setActive] = useState(null); // Track which FAQ is open
  const [page, setPage] = useState(0); // Track current page

  const startIdx = page * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const visibleFaqs = faqs.slice(startIdx, endIdx);

  const toggle = (index) => {
    // Make index unique across pages
    const absoluteIndex = startIdx + index;
    setActive(active === absoluteIndex ? null : absoluteIndex);
  };

  const hasPrev = page > 0;
  const hasNext = endIdx < faqs.length;

  return (
    <section id="contact" className="bg-[#f6faff] py-12 px-6 md:px-16 mx-auto">
      <h3
        className="text-2xl font-semibold text-center mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        FREQUENTLY ASK QUESTIONS.
      </h3>
      <div className="gap-10 md:w[70%] lg:w-[70%] mx-auto ">
        <div className="space-y-4">
          {visibleFaqs.map((faq, i) => (
            <div
              key={startIdx + i}
              className="border border-gray-300 rounded-md p-4 shadow-sm transition duration-300 ease-in-out hover:shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left font-medium text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                {active === startIdx + i ? (
                  <i className="bi bi-dash text-[#0051cd]"></i>
                ) : (
                  <i className="bi bi-plus text-[#0051cd]"></i>
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  active === startIdx + i
                    ? "max-h-40 mt-2 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-end mt-6">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={!hasPrev}
            className={`px-4  mr-4 py-2 rounded-full ${
              hasPrev
                ? "bg-[#0051cd] text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <i class="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!hasNext}
            className={`px-4 py-2 rounded-full ${
              hasNext
                ? "bg-[#0051cd] text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
