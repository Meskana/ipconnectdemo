import React, { useState } from "react";

const individualPlans = {
  monthly: [
    {
      name: "Core Plan",
      price: "$0/Month",
      features: [
        "Access to foundational mindset courses",
        "Entry into the TWM community",
        "Monthly self-development challenges",
      ],
      tagline: "Start small, think big, grow daily.",
      buttonText: "Get Started Now",
    },
    {
      name: "Pro Plan",
      price: "$10/Month",
      features: [
        "Everything in basic",
        "Group membership",
        "Career + startup roadmap templates",
      ],
      tagline: "Guided steps toward your next breakthrough.",
      buttonText: "Upgrade Now",
    },
    {
      name: "Elite Plan",
      price: "$50/Month",
      features: [
        "Everything in Premium",
        "Personalized execution support",
        "VIP access to global TWM events",
        "Feature opportunities in our network",
      ],
      tagline: "For those ready to build and lead.",
      buttonText: "Join Elite",
    },
  ],
  yearly: [
    {
      name: "Core Plan",
      price: "$0/Year",
      features: [
        "Access to foundational mindset courses",
        "Entry into the TWM community",
        "Monthly self-development challenges",
      ],
      tagline: "Start small, think big, grow daily.",
      buttonText: "Get Started Now",
    },
    {
      name: "Pro Plan",
      price: "$100/Year",
      features: [
        "Everything in basic",
        "Group membership",
        "Career + startup roadmap templates",
      ],
      tagline: "Guided steps toward your next breakthrough.",
      buttonText: "Upgrade Now",
    },
    {
      name: "Elite Plan",
      price: "$500/Year",
      features: [
        "Everything in Premium",
        "Personalized execution support",
        "VIP access to global TWM events",
        "Feature opportunities in our network",
      ],
      tagline: "For those ready to build and lead.",
      buttonText: "Join Elite",
    },
  ],
};

// Company plans data
const getCompanyPlans = (billingCycle) => ({
  startup: [
    {
      name: "Core Plan",
      price: "$0/Month",
      features: [
        "For 0-20 Employees",
        "Access to all courses",
        "Group membership sessions",
        "Basic progress tracking",
      ],
      tagline: "Start small, think big, grow daily.",
      buttonText: "Start Monthly Plan",
    },
    {
      name: "Pro Plan",
      price: billingCycle === "monthly" ? "$199/Month" : "$1990/Year",
      features: [
        "1-50 employees",
        "Everything in Core",
        "Priority endeavors",
        "Advanced team analytics",
        "Dedicated support manager",
      ],
      tagline: "Start small, think big, grow daily.",
      buttonText:
        billingCycle === "monthly" ? "Start Monthly Plan" : "Start Yearly Plan",
    },
  ],
  medium: [
    {
      name: "Pro Plan",
      price: billingCycle === "monthly" ? "$499/Month" : "$4990/Year",
      features: [
        "1-50 employees",
        "Everything in Core",
        "Priority endeavors",
        "Advanced team analytics",
        "Dedicated support manager",
      ],
      tagline: "Start small, think big, grow daily.",
      buttonText:
        billingCycle === "monthly" ? "Start Monthly Plan" : "Start Yearly Plan",
    },
    {
      name: "Elite Plan",
      price: billingCycle === "monthly" ? "$999/Month" : "$9990/Year",
      features: [
        "Above 50 employees",
        "Everything in Pro",
        "Executive coaching sessions",
        "Custom analytics dashboard",
        "24/7 priority support",
      ],
      tagline: "Start small, think big, grow daily.",
      buttonText:
        billingCycle === "monthly" ? "Start Monthly Plan" : "Start Yearly Plan",
    },
  ],
  large: [
    {
      name: "Elite Plan",
      price: billingCycle === "monthly" ? "$1999/Month" : "$19990/Year",
      features: [
        "Above 50 employees",
        "Everything in Pro",
        "Executive coaching sessions",
        "Custom analytics dashboard",
        "24/7 priority support",
        "Custom training programs",
      ],
      tagline: "Start small, think big, grow daily.",
      buttonText:
        billingCycle === "monthly" ? "Start Monthly Plan" : "Start Yearly Plan",
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      features: [
        "100+ employees",
        "Everything in Elite",
        "Fully customized solutions",
        "On-site training",
        "Dedicated account team",
      ],
      tagline: "Start small, think big, grow daily.",
      buttonText: "Contact Sales",
    },
  ],
});

export default function PaymentPlans() {
  const [userType, setUserType] = useState("individual");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [companySize, setCompanySize] = useState("startup");

  // Helper to get plans
  const getPlans = () => {
    if (userType === "individual") {
      return individualPlans[billingCycle];
    } else {
      return getCompanyPlans(billingCycle)[companySize];
    }
  };

  return (
    <div className="bg-[#f7fafc] min-h-screen py-8 px-4 sm:px-6  lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            PAYMENT PLAN
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Whether you're just starting or ready to scale, there's a Wealthy
            Man plan for you.
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex flex-col justify-center items-center gap-6 ">
          <div className="flex  p-1">
            <button
              className={` rounded-xl font-medium px-4 -py-2  transition-colors ${
                userType === "individual"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700"
              }`}
              onClick={() => setUserType("individual")}
            >
              <i className="bi bi-person-fill font-medium "></i> For Individuals
            </button>
            <button
              className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                userType === "company"
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700"
              }`}
              onClick={() => setUserType("company")}
            >
              <i class="bi bi-buildings-fill font-medium"></i> For Companies
            </button>
          </div>

          <div className="flex gap-8">
            <button
              className={`  font-medium transition-colors ${
                billingCycle === "monthly"
                  ? " text-blue-600 border-b-1 mb-4 border-amber-500"
                  : "text-gray-700 mb-4"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly Plan
            </button>
            <button
              className={` font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "text-blue-600 border-b-1 mb-4 border-amber-500"
                  : "text-gray-700 mb-4"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly Plan
            </button>
          </div>
        </div>

        {/* Company size toggle (only shown for companies) */}
        {userType === "company" && (
          <div className="flex justify-start mb-2 ">
            <div className="flex gap-4">
              <button
                className={`mb-4 font-sm text-sm transition-colors ${
                  companySize === "startup"
                    ? "text-blue-600 border-b-1 mb-4 border-amber-500"
                    : "text-gray-700"
                }`}
                onClick={() => setCompanySize("startup")}
              >
                Startup company
              </button>
              <button
                className={`mb-4 font-sm text-sm transition-colors ${
                  companySize === "medium"
                    ? "text-blue-600 border-b-1 mb-4 border-amber-500"
                    : "text-gray-700"
                }`}
                onClick={() => setCompanySize("medium")}
              >
                Medium company
              </button>
              <button
                className={`mb-4 font-sm text-sm transition-colors ${
                  companySize === "large"
                    ? "text-blue-600 border-b-1 mb-4 border-amber-500"
                    : "text-gray-700"
                }`}
                onClick={() => setCompanySize("large")}
              >
                Large company
              </button>
            </div>
          </div>
        )}

        {/* Plans display */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto md:w-[90%]">
          {getPlans().map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl shadow-md flex flex-col bg-white  border-2 border-gray-200"
            >
              <h2 className="text-2xl font-semibold px-2 pt-2 text-center">
                {plan.name}
              </h2>
              <div className="text-xl font-bold text-gray-600 py-8  text-center">
                {plan.price}
              </div>
              <div className=" border-t-1  mr-4 ml-4 pb-3 border-gray-300"></div>
              <ul className="text-gray-700 px-2 mr-2 ml-2">
                {plan.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className="flex justify-start items-start gap-2 py-1.5"
                  >
                    <span className="text-green-500">
                      <i class="bi bi-check2-circle"></i>
                    </span>
                    <span className="text-start">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className=" text-gray-500 px-2 pb-4 text-start mr-2 ml-2 pt-4">
                {plan.tagline}
              </div>
              <button className="bg-blue-500 text-white  px-2 py-2 rounded-xl font-medium transition-colors hover:bg-blue-600 m-2">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
