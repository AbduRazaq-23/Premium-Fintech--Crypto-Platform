import DashboardCards from "../components/DashboardCard";

import { Bell, Search, Wallet, ArrowUpRight } from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const analyticsData = [
  { month: "Jan", value: 12000 },
  { month: "Feb", value: 18000 },
  { month: "Mar", value: 24000 },
  { month: "Apr", value: 22000 },
  { month: "May", value: 31000 },
  { month: "Jun", value: 42000 },
  { month: "Jul", value: 58000 },
  { month: "Aug", value: 74000 },
  { month: "Sep", value: 68000 },
  { month: "Oct", value: 92000 },
  { month: "Nov", value: 118000 },
  { month: "Dec", value: 148000 },
];

export default function Dashboard() {
  return (
    <div
      className="
        min-h-screen
        bg-[#020617]
        text-white
        relative
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOWS */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[350px]
          h-[350px]
          bg-yellow-400/10
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[-100px]
          right-[-100px]
          w-[300px]
          h-[300px]
          bg-blue-500/10
          blur-[140px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 px-5 sm:px-8 lg:px-10 py-8">
        {/* TOPBAR */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                text-yellow-400
                uppercase
                tracking-[4px]
                text-xs
                sm:text-sm
              "
            >
              Premium Wealth Dashboard
            </p>

            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                mt-3
              "
            >
              Portfolio
              <span className="text-yellow-400"> Dashboard</span>
            </h1>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              sm:items-center
            "
          >
            {/* SEARCH */}
            <div
              className="
                flex
                items-center
                gap-3
                bg-white/[0.05]
                border
                border-white/10
                rounded-2xl
                px-5
                py-3
                backdrop-blur-xl
              "
            >
              <Search size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search assets..."
                className="
                  bg-transparent
                  outline-none
                  text-sm
                  placeholder:text-gray-500
                  w-full
                "
              />
            </div>

            {/* NOTIFICATION */}
            <button
              className="
                w-14
                h-14
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                flex
                items-center
                justify-center
              "
            >
              <Bell size={20} />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <DashboardCards />

        {/* ANALYTICS SECTION */}
        <div
          className="
            grid
            xl:grid-cols-[1.5fr_.6fr]
            gap-8
            mt-10
          "
        >
          {/* CHART */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-6
              sm:p-8
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-yellow-400/10
                via-transparent
                to-transparent
              "
            />

            {/* HEADER */}
            <div
              className="
                relative
                z-10
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
              "
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-black">
                  Portfolio Analytics
                </h2>

                <p className="text-gray-400 mt-2">
                  Real-time growth performance
                </p>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  bg-green-400/10
                  border
                  border-green-400/20
                  px-4
                  py-2
                  rounded-full
                  text-green-400
                  font-semibold
                  text-sm
                  w-fit
                "
              >
                <ArrowUpRight size={16} />
                +24.8% This Year
              </div>
            </div>

            {/* RECHARTS */}
            <div className="relative z-10 h-[320px] sm:h-[420px] mt-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity={0.8} />

                      <stop offset="100%" stopColor="#FFD700" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.08)"
                  />

                  <XAxis
                    dataKey="month"
                    stroke="#888"
                    tickLine={false}
                    axisLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      color: "#fff",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#FFD700"
                    strokeWidth={4}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* WALLET PANEL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-6
              sm:p-8
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black">Wallet</h2>

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-yellow-400/10
                  border
                  border-yellow-400/20
                  flex
                  items-center
                  justify-center
                  text-yellow-400
                "
              >
                <Wallet size={22} />
              </div>
            </div>

            {/* BALANCE */}
            <div className="mt-10">
              <p className="text-gray-400">Available Balance</p>

              <h3
                className="
                  text-5xl
                  font-black
                  mt-4
                  text-yellow-400
                "
              >
                $84,920
              </h3>
            </div>

            {/* TRANSACTIONS */}
            <div className="mt-12 space-y-5">
              {[
                {
                  name: "Bitcoin",
                  amount: "+0.42 BTC",
                },
                {
                  name: "Ethereum",
                  amount: "+1.8 ETH",
                },
                {
                  name: "Solana",
                  amount: "+12 SOL",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    justify-between
                    p-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/20
                  "
                >
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>

                    <p className="text-gray-500 text-sm mt-1">
                      Recent Transaction
                    </p>
                  </div>

                  <span className="text-green-400 font-bold">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button
              className="
                mt-10
                w-full
                gold-btn
                py-4
                rounded-2xl
                font-bold
                hover:scale-[1.02]
                transition
              "
            >
              Manage Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
