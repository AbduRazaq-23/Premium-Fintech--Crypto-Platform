export default function DashboardCards() {
  const cards = [
    {
      title: "Portfolio Balance",
      value: "$248,920",
    },
    {
      title: "Monthly Profit",
      value: "+18.4%",
    },
    {
      title: "Assets",
      value: "24",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-14">
      {cards.map((card, i) => (
        <div key={i} className="glass rounded-3xl p-8">
          <h2 className="text-gray-400">{card.title}</h2>
          <p className="text-5xl mt-4 font-black text-yellow-400">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}
