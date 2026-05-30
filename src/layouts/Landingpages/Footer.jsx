import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#393837] text-white py-8 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  items-start gap-12 mx-auto">
        {/* Logo and company name */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <span className="text-5xl font-bold" style={{ color: "#1C7AE7" }}>
            IP-Connect
            <sub className="text-sm" style={{ color: "#307d6b" }}>
              Inc.
            </sub>
          </span>
          <span className="mt-2 text-lg font-semibold">IP-Connect comm.</span>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <span className="font-semibold text-lg mb-2">Quick Links</span>
          <ul className="space-y-1 text-sm">
            <li>
              <a className="hover:underline" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                About Us
              </a>
            </li>

            <li>
              <a className="hover:underline" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <span className="font-semibold text-lg mb-2">Get In Touch</span>
          <div className="flex items-center text-sm mb-1">
            <i className="bi bi-telephone-fill mr-2"></i>
            <span>+234 816 864 5213</span>
          </div>
          <div className="flex items-center text-sm mb-1">
            <i className="bi bi-envelope-fill mr-2"></i>
            <span>ipconnect@gmail.com</span>
          </div>
          <div className="flex items-center text-sm mb-3">
            <i className="bi bi-geo-alt-fill mr-2"></i>
            <span>Nigeria</span>
          </div>
          <div className="mb-3 text-xs max-w-xs">
            Join our newsletter for weekly inspiration, success stories, and
            IP-Connect updates.
          </div>
          <form className="flex w-full max-w-xs mb-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="rounded-l px-2 py-1 w-full text-black bg-white"
            />
            <button
              type="submit"
              className="bg-[#1C7AE7] hover:bg-blue-700 text-white px-4 py-3 rounded-r"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-1">
            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" aria-label="X">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-12 text-gray-300">
        © 2026 IP-Connect. All rights reserved.
      </div>
    </footer>
  );
}
