import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute w-[600px] h-[600px] bg-yellow-400/20 blur-[140px] rounded-full top-[-100px] left-[-100px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]"
      />
    </div>
  );
}
