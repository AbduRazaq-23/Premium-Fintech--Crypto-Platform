import { ShieldCheck, Lock, Banknote, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustSection() {
  const items = [
    {
      title: "SOC 2 Certified",
      icon: ShieldCheck,
    },
    {
      title: "256-bit Encryption",
      icon: Lock,
    },
    {
      title: "Insured Assets",
      icon: Banknote,
    },
    {
      title: "24/7 Monitoring",
      icon: Activity,
    },
  ];

  return (
    <section
      id="security"
      className="py-24 px-6 bg-gradient-to-b from-black/0 to-black/30"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group glass rounded-3xl p-8 text-center border border-white/10 hover:border-yellow-400/40 transition-all"
            >
              <div className="flex justify-center mb-5">
                <div className="p-4 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition">
                  <Icon className="text-yellow-400 w-7 h-7" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Enterprise-grade protection
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
