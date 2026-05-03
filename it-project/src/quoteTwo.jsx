import React from "react";
import FlipCard from "./FlipCard";
import front from "./assets/desktopOne.png";
import back from "./assets/desktopTwo.png";
import customizeIcon from "./assets/flashcards-customize.svg";
import scanIcon from "./assets/flashcards-scan.svg";
import starIcon from "./assets/flashcards-star.svg";

function QuoteTwo() {
  const tools = [
    {
      icon: customizeIcon,
      title: "Customize",
      text: "Take existing flashcards and make them your own.",
    },
    {
      icon: scanIcon,
      title: "Import",
      text: "Turn your notes into flashcards quickly.",
    },
    {
      icon: starIcon,
      title: "Star",
      text: "Focus on the cards that need extra practice.",
    },
  ];

  return (
    <section className="bg-[#101936] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <FlipCard frontImage={front} backImage={back} />

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#51cfff]">Learning tools</p>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Study better with advanced learning tools
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Use flashcards, practice tests, and focused review to learn more effectively and retain information longer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#51cfff] px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-[#86ddff]">
              Start studying
            </button>
            <button className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/20">
              Import notes
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-3 lg:mt-16">
        {tools.map((tool) => (
          <article
            key={tool.title}
            className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 text-center shadow-xl shadow-slate-950/10 transition hover:-translate-y-1 hover:bg-white/[0.11]"
          >
            <img src={tool.icon} alt="" className="mx-auto size-16" />
            <h3 className="mt-5 text-lg font-black">{tool.title}</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/68">{tool.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default QuoteTwo;
