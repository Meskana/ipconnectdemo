import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const activePage = "About-Us";

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Projects",
      href: "/projects",
      dropdown: ["Events", "Wealth Searmons"],
    },
    { name: "About-Us", href: "/about-us" },
    { name: "Contact-Us", href: "/contact-us" },
  ];

  return (
    <nav className="relative z-50 bg-blue-700 w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-col md:w-[90%] lg:flex-row justify-between items-start lg:items-center mx-auto px-6 py-4">
        <div className="flex flex-col lg:justify-between md:justify-between md:flex-row items-start lg:w-[100%] md:w-[100%] md:items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-white text-2xl font-bold">twm</span>
            <span className="text-xs text-gray-300">Inc.</span>
          </div>

          {/* Desktop Menu */}
          <div className="flex justify-end space-x-6">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShowProjects(true)}
                    onMouseLeave={() => setShowProjects(false)}
                  >
                    {/* Make "Projects" clickable */}
                    <a
                      href={link.href}
                      className="flex items-center text-sm font-medium text-white hover:text-gray-200"
                    >
                      {link.name}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.44l3.71-4.21a.75.75 0 111.14.98l-4.25 4.83a.75.75 0 01-1.14 0L5.21 8.21a.75.75 0 01.02-1z" />
                      </svg>
                    </a>

                    {/* Dropdown with Animation */}
                    <AnimatePresence>
                      {showProjects && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-7 left-0 w-40 bg-blue-700 shadow-lg rounded-md z-50"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item}
                              href={
                                item === "Events"
                                  ? "/events"
                                  : item === "Wealth Searmons"
                                  ? "/WealthSearmons"
                                  : "#"
                              }
                              className="block px-4 py-2 text-sm hover:bg-blue-500"
                            >
                              {item}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm ${
                    activePage === link.name
                      ? "text-white font-extrabold"
                      : "text-white hover:font-bold"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-white text-2xl font-bold">twm</span>
          <span className="text-xs text-gray-300">Inc.</span>
        </div>
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          className="inline-flex items-center justify-center text-2xl text-white"
        >
          <i className={`bi ${mobileOpen ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden px-4 pb-6 space-y-4 text-center bg-blue-700"
          >
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                      <a
                        href={link.href}
                        className="text-sm font-medium text-white"
                      >
                        {link.name}
                      </a>
                      <button
                        onClick={() => setShowProjects((prev) => !prev)}
                        aria-label="Toggle Projects dropdown"
                        className="text-white"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.44l3.71-4.21a.75.75 0 111.14.98l-4.25 4.83a.75.75 0 01-1.14 0L5.21 8.21a.75.75 0 01.02-1z" />
                        </svg>
                      </button>
                    </div>

                    <AnimatePresence>
                      {showProjects && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3 }}
                          className="mt-1 w-[50%] bg-blue-500 shadow-md rounded-md"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item}
                              href={
                                item === "Events"
                                  ? "/events"
                                  : item === "Wealth Searmons"
                                  ? "/WealthSearmons"
                                  : "#"
                              }
                              className="block px-4 py-2 text-sm text-white hover:bg-blue-600"
                            >
                              {item}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block text-sm font-medium ${
                    activePage === link.name
                      ? "text-white font-extrabold"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
