import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },

  { name: "Contact", path: "/contact-us" },
];

const Navbarr = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Glass navbar */}
      <div className=" inset-0 border-[#f8f4ec21] bg-gradient-to-br from-black via-gray-900 to-gray-800 border-b-2 lg:w-[90%] md:w-[90%] mx-auto md:mt-2 md:rounded-2xl">
        <nav className="max-w-7xl mx-auto px-2 sm:px-6 h-10 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-['Playfair_Display'] font-medium tracking-[0.15em]  bg-linear-to-r from-[#0f9d58] via-[#ffffff] to-[#0f9d58]
             bg-clip-text text-transparent
             drop-shadow-[0_2px_6px_rgba(212,175,55,0.4)] "
          >
            IP-Connect
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-white font-bold">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle view */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden inset-0 bg-black/30 backdrop-blur-sm "
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="text-white font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbarr;
