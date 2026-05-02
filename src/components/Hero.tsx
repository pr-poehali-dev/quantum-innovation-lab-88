import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-neutral-700" />
      <div className="relative z-10 text-center text-white">
        <p className="text-sm uppercase tracking-widest mb-4 text-orange-400">Добро пожаловать</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-white">АВТОСЕРВИС</span>{" "}
          <span className="text-orange-500">АКАРА</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Автосервис Акара - команда квалифицированных специалистов, обеспечит - качественный и честный сервис
        </p>
        <button className="mt-10 px-8 py-3 bg-orange-500 text-white uppercase text-sm tracking-wide hover:bg-orange-600 transition-all duration-300">
          Узнать больше
        </button>
      </div>
    </div>
  );
}