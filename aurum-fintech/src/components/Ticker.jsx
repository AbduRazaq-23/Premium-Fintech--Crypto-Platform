import { Bitcoin, Coins, TrendingUp, BadgeDollarSign } from "lucide-react";

export default function Ticker() {
  const data = [
    {
      icon: <Bitcoin size={20} />,
      symbol: "BTC",
      price: "$68,200",
      change: "+2.4%",
    },
    {
      icon: <Coins size={20} />,
      symbol: "ETH",
      price: "$3,820",
      change: "+4.1%",
    },
    {
      icon: <TrendingUp size={20} />,
      symbol: "SOL",
      price: "$182",
      change: "+8.3%",
    },
    {
      icon: <BadgeDollarSign size={20} />,
      symbol: "BNB",
      price: "$710",
      change: "+1.8%",
    },
  ];

  return (
    <section className="relative overflow-hidden py-5 border-y border-white/10 bg-black/40 backdrop-blur-xl">
      {/* GRADIENT GLOW */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#020617] to-transparent z-10" />

      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#020617] to-transparent z-10" />

      {/* TICKER */}
      <div className="ticker flex items-center gap-6 sm:gap-10 whitespace-nowrap">
        {[...data, ...data, ...data].map((item, i) => (
          <div
            key={i}
            className="
              flex
              items-center
              gap-4
              px-5
              sm:px-7
              py-4
              rounded-2xl
              glass
              border
              border-white/10
              min-w-max
              hover:border-yellow-400/30
              hover:-translate-y-1
              transition-all
              duration-300
              group
            "
          >
            {/* ICON */}
            <div
              className="
                w-10
                h-10
                rounded-full
                bg-yellow-400/10
                flex
                items-center
                justify-center
                text-yellow-400
                group-hover:scale-110
                transition
              "
            >
              {item.icon}
            </div>

            {/* INFO */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm sm:text-base">
                {item.symbol}
              </span>

              <span className="text-gray-400 text-xs sm:text-sm">
                {item.price}
              </span>
            </div>

            {/* CHANGE */}
            <div
              className="
                text-green-400
                font-bold
                text-sm
                sm:text-base
                ml-2
              "
            >
              {item.change}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
