import DashboardCards from "../components/DashboardCards";
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-6xl font-black">Portfolio Dashboard</h1>
      <DashboardCards />
      <div className="glass rounded-3xl p-10 mt-10 h-[400px]">
        <h2 className="text-3xl font-bold">Portfolio Analytics</h2>
        <div
          className="h-[250px] mt-10 border border-dashed border-white/10
rounded-2xl flex items-center justify-center text-gray-500"
        >
          TradingView Chart Here
        </div>
      </div>
    </div>
  );
}
