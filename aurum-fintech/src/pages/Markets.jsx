export default function Markets() {
  const coins = [
    {
      name: "Bitcoin",
      price: "$68,200",
      change: "+2.4%",
    },
    {
      name: "Ethereum",
      price: "$3,820",
      change: "+4.1%",
    },
    {
      name: "Solana",
      price: "$182",
      change: "+8.3%",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black">Live Markets</h1>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {coins.map((coin, i) => (
            <div key={i} className="glass rounded-3xl p-10">
              <h2 className="text-3xl font-bold">{coin.name}</h2>
              <p className="text-5xl text-yellow-400 mt-6 font-black">
                {coin.price}
              </p>
              <p className="text-green-400 mt-4 text-xl">{coin.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
