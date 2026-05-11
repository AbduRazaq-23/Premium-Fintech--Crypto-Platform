export default function Testimonials() {
  const users = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Daniel Carter",
      role: "Crypto Investor",
      text: "AURUM completely transformed how I manage digital wealth. The speed and clarity are unmatched.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sophia Williams",
      role: "Portfolio Manager",
      text: "The platform feels incredibly secure and premium. I finally feel in control of my investments.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/64.jpg",
      name: "Michael Lee",
      role: "Private Trader",
      text: "Fast execution, clean UI, and real transparency. This is the future of investing platforms.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          Trusted By Investors
        </h2>
        <p className="text-gray-400 mt-6 text-xl">
          Real feedback from global traders and investors.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {users.map((user, i) => (
            <div
              key={i}
              className="
                relative glass rounded-3xl p-10
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
                group
              "
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={user.img}
                  alt={user.name}
                  className="
                    w-20 h-20 rounded-full
                    border-2 border-yellow-400/40
                    object-cover
                    group-hover:scale-110
                    transition
                  "
                />
              </div>

              {/* Text */}
              <p className="mt-8 text-gray-300 leading-7 text-lg italic">
                “{user.text}”
              </p>

              {/* Name */}
              <h4 className="mt-8 text-white font-bold text-lg">{user.name}</h4>

              {/* Role */}
              <p className="text-gray-500 text-sm">{user.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
