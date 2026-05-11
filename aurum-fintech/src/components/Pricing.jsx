export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$500" },
    { name: "Investor", price: "$5,000" },
    { name: "Trader", price: "$25,000", featured: true },
    { name: "Whale", price: "$100,000" },
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Investment Plans
          </h2>
          <p className="text-gray-400 mt-6 text-lg md:text-xl">
            Designed for modern investors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                relative overflow-hidden rounded-3xl
                border border-white/10 bg-white/5 backdrop-blur-xl
                p-8 md:p-10 flex flex-col justify-between
                transition-all duration-500 group
                hover:-translate-y-3 hover:border-white/20
                ${
                  plan.featured
                    ? "border-yellow-400/60 shadow-lg shadow-yellow-400/10"
                    : ""
                }
              `}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-bold relative z-10">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-4xl md:text-5xl mt-6 font-black text-yellow-400 relative z-10">
                {plan.price}
              </p>

              {/* Button */}
              <button
                className={`
                  mt-10 w-full py-3 md:py-4 rounded-2xl font-semibold
                  transition-all duration-300 relative z-10
                  hover:scale-[1.03]
                  ${
                    plan.featured
                      ? "bg-yellow-400 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
