import { Wallet, TrendingUp, Layers3, ArrowUpRight } from "lucide-react";

export default function DashboardCards() {
  const cards = [
    {
      title: "Portfolio Balance",
      value: "$248,920",
      growth: "+12.8%",
      icon: <Wallet size={28} />,
      description: "Total assets across all portfolios",
    },
    {
      title: "Monthly Profit",
      value: "+18.4%",
      growth: "+4.2%",
      icon: <TrendingUp size={28} />,
      description: "Performance growth this month",
    },
    {
      title: "Active Assets",
      value: "24",
      growth: "+6",
      icon: <Layers3 size={28} />,
      description: "Diversified crypto holdings",
    },
  ];

  return (
    <section className="mt-14">
      <div
        className="
          grid
          sm:grid-cols-2
          xl:grid-cols-3
          gap-6
          sm:gap-8
        "
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8
              sm:p-10
              group
              hover:-translate-y-2
              hover:border-yellow-400/30
              hover:shadow-[0_0_60px_rgba(255,215,0,0.12)]
              transition-all
              duration-500
            "
          >
            {/* BACKGROUND GLOW */}
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

            {/* TOP ROW */}
            <div className="relative z-10 flex items-start justify-between">
              {/* ICON */}
              <div
                className="
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
                  group-hover:scale-110
                  transition
                  duration-500
                "
              >
                {card.icon}
              </div>

              {/* GROWTH BADGE */}
              <div
                className="
                  flex
                  items-center
                  gap-1
                  text-green-400
                  text-sm
                  font-semibold
                  bg-green-400/10
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-green-400/20
                "
              >
                <ArrowUpRight size={16} />
                {card.growth}
              </div>
            </div>

            {/* VALUE */}
            <div className="relative z-10 mt-10">
              <h2 className="text-gray-400 text-sm sm:text-base">
                {card.title}
              </h2>

              <p
                className="
                  text-4xl
                  sm:text-5xl
                  font-black
                  text-yellow-400
                  mt-4
                  tracking-tight
                "
              >
                {card.value}
              </p>

              <p
                className="
                  text-gray-500
                  mt-4
                  leading-7
                  text-sm
                  sm:text-base
                "
              >
                {card.description}
              </p>
            </div>

            {/* BOTTOM BAR */}
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
    </section>
  );
}
