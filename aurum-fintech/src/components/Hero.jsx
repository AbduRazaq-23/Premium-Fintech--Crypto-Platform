import Coin3D from "./Coin3D";
import AuroraBackground from "./AuroraBackground";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        hero-bg
        pt-28
        pb-20
      "
    >
      {/* BACKGROUND */}
      <AuroraBackground />

      {/* CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-20
          items-center
          px-5
          sm:px-8
          w-full
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-center
            lg:text-left
            order-2
            lg:order-1
          "
        >
          {/* BADGE */}
          <div className="flex justify-center lg:justify-start">
            <span
              className="
                text-yellow-400
                border
                border-yellow-400/20
                bg-yellow-400/5
                px-4
                py-2
                rounded-full
                text-xs
                sm:text-sm
                tracking-wide
              "
            >
              Elite Crypto Investment Platform
            </span>
          </div>

          {/* TITLE */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[1.05]
              mt-8
            "
          >
            Wealth
            <br />
            Reimagined
            <br />
            <span className="text-yellow-400">For The Digital Era</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              md:text-xl
              mt-6
              sm:mt-8
              leading-8
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            Secure institutional-grade crypto investing for modern wealth
            builders with premium portfolio management and AI-powered insights.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              sm:gap-6
              mt-10
              justify-center
              lg:justify-start
            "
          >
            <button
              className="
                gold-btn
                px-8
                py-4
                rounded-2xl
                font-bold
                hover:scale-105
                transition
                duration-300
                shadow-[0_0_40px_rgba(255,215,0,0.25)]
              "
            >
              Start Investing
            </button>

            <button
              className="
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-8
                py-4
                rounded-2xl
                hover:bg-white/10
                transition
                duration-300
              "
            >
              Live Market
            </button>
          </div>

          {/* TRUST TEXT */}
          <div
            className="
              flex
              flex-wrap
              gap-6
              mt-10
              text-sm
              text-gray-400
              justify-center
              lg:justify-start
            "
          >
            <span>✓ 256-bit Encryption</span>
            <span>✓ SEC Compliant</span>
            <span>✓ Trusted by 250K+</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            flex
            justify-center
            items-center
            order-1
            lg:order-2
          "
        >
          <div
            className="
              w-full
              max-w-[280px]
              sm:max-w-[400px]
              md:max-w-[500px]
              lg:max-w-[600px]
            "
          >
            <Coin3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
