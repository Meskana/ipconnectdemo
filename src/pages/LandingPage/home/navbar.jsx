import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const activePage = "Home";

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
    <nav className="relative z-50 bg-[#f6faff] w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-col md:w-[90%] lg:flex-row justify-between items-start lg:items-center mx-auto px-6">
        {/* Logo + Nav */}
        <div className="flex flex-col lg:justify-between md:justify-between md:flex-row items-start lg:w-[50%] md:w-[100%] md:items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="images/twm logo.png"
              alt="TWM-logo"
              className="w-28 h-28 object-contain"
            />
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
                    <Link
                      to={link.href}
                      className="flex items-center text-sm font-medium text-black hover:text-[#0051cd]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.name}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.44l3.71-4.21a.75.75 0 111.14.98l-4.25 4.83a.75.75 0 01-1.14 0L5.21 8.21a.75.75 0 01.02-1z" />
                      </svg>
                    </Link>

                    <AnimatePresence>
                      {showProjects && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-7 left-0 w-40 bg-white shadow-lg rounded-md z-50"
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
                              className="block px-4 py-2 text-sm hover:bg-blue-50"
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
                  className={`text-sm font-medium ${
                    activePage === link.name
                      ? "text-[#0051cd]"
                      : "text-black hover:text-[#0051cd]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:mt-3 lg:mr-0">
          <Link to="/SignIn">
            <button className="border border-[#0051cd] text-[#0051cd] px-7 py-1 rounded-md font-medium">
              Sign In
            </button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-[#0051cd] text-white px-7 py-1 rounded-md font-medium">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src="images/twm logo.png"
            alt="TWM-logo"
            className="w-28 h-28 object-contain"
          />
        </div>
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          className="inline-flex items-center justify-center text-2xl"
        >
          <i className={`bi ${mobileOpen ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-6 space-y-4 text-center"
          >
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="flex flex-col items-center">
                    <div className="flex items-center justify-center gap-1">
                      <Link
                        to={link.href}
                        className="text-sm font-medium text-black hover:text-[#0051cd]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setShowProjects((prev) => !prev)}
                        className="text-black hover:text-[#0051cd]"
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
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1 w-[50%] bg-white shadow-md rounded-md"
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
                              className="block px-4 py-2 text-sm hover:bg-blue-50"
                              onClick={() => setMobileOpen(false)}
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
                      ? "text-blue-600"
                      : "text-black hover:text-[#0051cd]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="flex flex-col gap-3 items-center">
              <button className="border border-[#0051cd] text-[#0051cd] w-[50%] py-2 rounded-md font-medium">
                <Link to="/SignIn" onClick={() => setMobileOpen(false)}>
                  Sign In
                </Link>
              </button>

              <button className="bg-[#0051cd] text-white w-[50%] py-2 rounded-md font-medium">
                <Link to="/SignUp" onClick={() => setMobileOpen(false)}>
                  Register
                </Link>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
