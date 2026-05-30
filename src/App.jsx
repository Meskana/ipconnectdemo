import React, { Suspense, lazy } from "react";
// import HeroLayout from "./layouts/HeroLayout";
// import Features from "./sections/Features";
import { Routes, Route } from "react-router-dom";

import LandingMainLayout from "./layouts/Landingpages/mainlayout";

// import page from ".pages";
const Home = lazy(() => import("./pages/LandingPage/home/homepage"));
const AboutUs = lazy(() => import("./pages/LandingPage/AboutUs/aboutus"));
const ContactUs = lazy(() => import("./pages/LandingPage/ContactUs/contactus"));
const WealthSearmons = lazy(
  () => import("./pages/LandingPage/wealth searmons/wealthSearmons"),
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="flex flex-col items-center gap-4">
            <svg
              className="animate-spin h-10 w-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <p className="text-gray-700 text-lg font-medium">
              Loading, please wait...
            </p>
          </div>
        </div>
      }
    >
      <Routes>
        {/* Public Pages */}
        <Route element={<LandingMainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/WealthSearmons" element={<WealthSearmons />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
