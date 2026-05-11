import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="
          fixed
          top-4
          left-1/2
          -translate-x-1/2
          z-50
          w-[95%]
          max-w-7xl
        "
      >
        <div
          className="
            glass
            rounded-2xl
            px-4 sm:px-6 lg:px-8
            py-4
            flex
            justify-between
            items-center
            shadow-2xl
            border
            border-white/10
          "
        >
          {/* LOGO */}
          <Link to="/">
            <h1
              className="
                text-2xl
                sm:text-3xl
                font-black
                tracking-wider
              "
            >
              <span className="text-yellow-400">A</span>URUM
            </h1>
          </Link>

          {/* DESKTOP NAV */}
          <div
            className="
              hidden
              lg:flex
              items-center
              gap-10
              text-gray-300
            "
          >
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>

            <Link to="/markets" className="hover:text-yellow-400 transition">
              Markets
            </Link>

            <a href="#pricing" className="hover:text-yellow-400 transition">
              Pricing
            </a>

            <a href="#security" className="hover:text-yellow-400 transition">
              Security
            </a>
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="
                border
                border-white/10
                px-5
                lg:px-6
                py-2.5
                rounded-xl
                hover:bg-white/5
                transition
              "
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
                gold-btn
                px-5
                lg:px-6
                py-2.5
                rounded-xl
                font-bold
                hover:scale-105
                transition
              "
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              text-white
              p-2
              rounded-xl
              border
              border-white/10
            "
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              top-24
              left-1/2
              -translate-x-1/2
              z-40
              w-[95%]
              glass
              rounded-2xl
              p-6
              border
              border-white/10
              md:hidden
            "
          >
            <div className="flex flex-col gap-6 text-lg">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Home
              </Link>

              <Link
                to="/markets"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Markets
              </Link>

              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Pricing
              </a>

              <a
                href="#security"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Security
              </a>

              {/* MOBILE BUTTONS */}
              <div className="flex flex-col gap-4 pt-4">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="
                    border
                    border-white/10
                    py-3
                    rounded-xl
                    text-center
                  "
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="
                    gold-btn
                    py-3
                    rounded-xl
                    text-center
                    font-bold
                  "
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
