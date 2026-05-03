import React, { useEffect, useState } from "react";

function QuizletFlashcard({ question, answer, index }) {
  const [enter, setEnter] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEnter(true), 150 + index * 120);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <button
      type="button"
      aria-label={`Flip card: ${question}`}
      className={`group h-48 w-full min-w-[15rem] cursor-pointer select-none rounded-2xl text-left transition-all duration-700 preserve-3d sm:h-56 ${
        enter ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ zIndex: 10 - index, perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 preserve-3d group-hover:-translate-y-1 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-[#4255ff] p-6 text-white shadow-xl shadow-[#4255ff]/20 backface-hidden">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#51cfff]">Question</span>
          <span className="text-balance text-xl font-black leading-tight sm:text-2xl">{question}</span>
          <span className="text-sm font-bold text-white/70">Tap to reveal</span>
        </div>

        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-white p-6 text-slate-900 shadow-xl rotate-y-180 backface-hidden">
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#4255ff]">Answer</span>
          <span className="text-lg font-bold leading-relaxed">{answer}</span>
          <span className="text-sm font-bold text-slate-500">Tap to flip back</span>
        </div>
      </div>
    </button>
  );
}

export default QuizletFlashcard;


