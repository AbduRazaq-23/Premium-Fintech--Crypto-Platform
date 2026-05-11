import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Globe2, Wallet, TrendingUp } from "lucide-react";

function Counter({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  // START WHEN SECTION ENTERS VIEW
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // COUNTER ANIMATION
  useEffect(() => {
    if (!start) return;

    let startTime;
    let animationFrame;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;

      const percentage = Math.min(progress / duration, 1);

      const currentValue = percentage * end;

      setCount(currentValue);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return (
    <span ref={ref}>
      {Number(count).toFixed(end % 1 !== 0 ? 1 : 0)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      number: 250,
      suffix: "K+",
      title: "Active Investors",
      icon: <Wallet size={28} />,
      description: "Global premium investors trust AURUM.",
    },
    {
      number: 48,
      suffix: "B",
      title: "Assets Managed",
      icon: <TrendingUp size={28} />,
      description: "Institutional-grade asset management.",
    },
    {
      number: 99.9,
      suffix: "%",
      title: "Platform Uptime",
      icon: <ShieldCheck size={28} />,
      description: "Ultra-secure infrastructure & protection.",
    },
    {
      number: 180,
      suffix: "+",
      title: "Countries",
      icon: <Globe2 size={28} />,
      description: "Serving investors worldwide seamlessly.",
    },
  ];

  return (
    <section
      className="
        relative
        py-24
        sm:py-32
        px-5
        sm:px-8
        overflow-hidden
      "
    >
      {/* BACKGROUND LIGHTS */}
      <div
        className="
          absolute
          top-0
          left-[-100px]
          w-[350px]
          h-[350px]
          bg-yellow-400/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-[-100px]
          w-[300px]
          h-[300px]
          bg-blue-500/10
          blur-[120px]
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <span
            className="
              inline-block
              text-yellow-400
              tracking-[5px]
              uppercase
              text-xs
              sm:text-sm
              border
              border-yellow-400/20
              bg-yellow-400/5
              px-5
              py-2
              rounded-full
            "
          >
            Trusted Performance
          </span>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              mt-8
              leading-tight
            "
          >
            Building The Future
            <br />
            <span className="text-yellow-400">Of Digital Wealth</span>
          </h2>

          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              mt-8
              leading-8
              max-w-2xl
              mx-auto
            "
          >
            Experience enterprise-grade crypto investing trusted by thousands of
            investors globally.
          </p>
        </div>

        {/* STATS GRID */}
        <div
          className="
            grid
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
            sm:gap-8
            mt-20
          "
        >
          {stats.map((item, i) => (
            <div
              key={i}
              className="
                relative
                group
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-8
                sm:p-10
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-yellow-400/30
                hover:shadow-[0_0_50px_rgba(255,215,0,0.12)]
              "
            >
              {/* HOVER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-yellow-400/10
                  via-transparent
                  to-transparent
                "
              />

              {/* ICON */}
              <div
                className="
                  relative
                  z-10
                  w-16
                  h-16
                  rounded-2xl
                  bg-yellow-400/10
                  border
                  border-yellow-400/20
                  flex
                  items-center
                  justify-center
                  text-yellow-400
                  mb-8
                  group-hover:scale-110
                  transition
                  duration-500
                "
              >
                {item.icon}
              </div>

              {/* NUMBER */}
              <h2
                className="
                  relative
                  z-10
                  text-5xl
                  sm:text-6xl
                  font-black
                  text-yellow-400
                  tracking-tight
                "
              >
                <Counter end={item.number} suffix={item.suffix} />
              </h2>

              {/* TITLE */}
              <h3
                className="
                  relative
                  z-10
                  text-xl
                  font-bold
                  mt-5
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  relative
                  z-10
                  text-gray-400
                  mt-4
                  leading-7
                  text-sm
                  sm:text-base
                "
              >
                {item.description}
              </p>

              {/* BOTTOM LINE */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-gradient-to-r
                  from-yellow-400
                  to-yellow-200
                  group-hover:w-full
                  transition-all
                  duration-700
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
