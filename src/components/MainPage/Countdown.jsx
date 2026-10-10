"use client";

import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function Countdown() {
  return (
    <div
      className="
        absolute bottom-[12vh] left-1/2
        -translate-x-1/2
        translate-y-[-90px]
        z-20
        origin-bottom
        scale-[clamp(0.75,1vw,1)]
        sm:scale-[clamp(0.85,1vw,1)]
        md:scale-100
        flex flex-col items-center
        px-6 py-3
        rounded-2xl
        bg-white/7
        backdrop-blur-md
        border border-white/20
        shadow-[0_0_50px_rgba(200,140,255,0.22)]
      "
    >
      <div
        className={`
          ${pressStart.className}
          text-[24px] sm:text-[32px]
          tracking-[0.3em]
          text-purple-200
          animate-pulse
          text-center
          whitespace-nowrap
        `}
        style={{
          textShadow: "0 0 10px rgba(180,120,255,0.6)",
        }}
      >
        COMING SOON
      </div>
    </div>
  );
}