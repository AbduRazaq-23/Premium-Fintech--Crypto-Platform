export default function Loader() {
  return (
    <div
      className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#020617]
        "
    >
      <div className="relative">
        {/* OUTER RING */}
        <div
          className="
              w-24
              h-24
              rounded-full
              border-4
              border-yellow-400/20
            "
        />

        {/* SPINNING RING */}
        <div
          className="
              absolute
              inset-0
              w-24
              h-24
              rounded-full
              border-4
              border-transparent
              border-t-yellow-400
              animate-spin
            "
        />

        {/* CENTER TEXT */}
        <div
          className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-yellow-400
              font-black
              text-xl
            "
        >
          A
        </div>
      </div>
    </div>
  );
}
