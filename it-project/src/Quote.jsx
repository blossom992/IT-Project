import React, { useEffect, useState } from "react";
import QuizletFlashcard from "./flashcard";
import "./animations.css";
import heroBackground from "./assets/Landing-Page-bg.png";
import creationIcon from "./assets/flashcards-creation.svg";
import examIcon from "./assets/flashcards-exam.svg";
import studyIcon from "./assets/flashcards-study.svg";

function IntroSplash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 1300);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div
        className="flex flex-col items-center justify-center space-y-4"
        style={{
          animation: "introIn 0.6s ease-out forwards, introOut 0.6s ease-out 0.85s forwards",
        }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Study Smarter.</h1>
        <p className="text-lg opacity-80">Welcome - build and study flashcards better.</p>
      </div>
    </div>
  );
}

function Quote() {
  const cards = [
    {
      question: "What is a Web Application?",
      answer: "An application that runs in a web browser, not installed locally.",
    },
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      question: "What is Tailwind CSS?",
      answer: "A utility-first CSS framework for styling apps quickly.",
    },
  ];

  const [showSplash, setShowSplash] = useState(true);
  const [animateHero, setAnimateHero] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [bgY, setBgY] = useState(0);

  useEffect(() => {
    if (!showSplash) {
      const heroTimer = setTimeout(() => setAnimateHero(true), 100);
      const cardTimer = setTimeout(() => setAnimateCards(true), 700);
      return () => {
        clearTimeout(heroTimer);
        clearTimeout(cardTimer);
      };
    }
  }, [showSplash]);

  useEffect(() => {
    const onScroll = () => setBgY(window.scrollY * 0.18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#f5f7fb]">
      {showSplash && <IntroSplash onFinish={() => setShowSplash(false)} />}

      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#101936] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `url(${heroBackground})`,
            transform: `translateY(${bgY}px) scale(1.04)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#101936]/95 via-[#101936]/72 to-[#4255ff]/65" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#dff8ff] opacity-0 backdrop-blur"
              style={{ animation: animateHero ? "fadeSlideUp 0.6s ease-out forwards" : "" }}
            >
              <span className="size-2 rounded-full bg-[#51cfff]" />
              Make. Flip. Remember.
            </div>
            <h1
              className="max-w-3xl text-balance text-4xl font-black leading-[1.05] opacity-0 sm:text-5xl lg:text-6xl"
              style={{ animation: animateHero ? "fadeSlideUp 0.6s ease-out 0.1s forwards" : "" }}
            >
              The easiest way to make and study flashcards
            </h1>
            <p
              className="mt-6 max-w-2xl text-pretty text-base leading-8 text-white/82 opacity-0 sm:text-lg lg:text-xl"
              style={{ animation: animateHero ? "fadeSlideUp 0.6s ease-out 0.25s forwards" : "" }}
            >
              A better way to study with flashcards is here. Create your own sets, study with classmates,
              or search millions of decks to sharpen your skills.
            </p>
            <div
              className="mt-8 flex flex-col gap-3 opacity-0 sm:flex-row"
              style={{ animation: animateHero ? "popIn 0.45s ease-out 0.45s forwards" : "" }}
            >
              <button className="rounded-full bg-[#4255ff] px-6 py-4 text-sm font-black text-white shadow-xl shadow-[#4255ff]/30 transition hover:-translate-y-1 hover:bg-[#3344d8]">
                Create a flashcard set
              </button>
              <button className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">
                Explore study modes
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { icon: creationIcon, title: "500M+ cards", text: "Built for fast study sessions." },
              { icon: examIcon, title: "Practice ready", text: "Move from review to tests." },
              { icon: studyIcon, title: "Made to focus", text: "Keep the hard cards close." },
            ].map((item, index) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-white/15 bg-white/12 p-5 opacity-0 shadow-2xl shadow-slate-950/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/18"
                style={{
                  animation: animateHero
                    ? `slideInRight 0.55s ease-out ${0.5 + index * 0.15}s forwards`
                    : "",
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white shadow-lg transition group-hover:rotate-3">
                    <img src={item.icon} className="size-11" alt="" />
                  </span>
                  <div>
                    <h2 className="text-lg font-black text-white">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/72">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#4255ff]">Try it</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Interactive flashcards</h2>
          </div>
          
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <div
              key={card.question}
              className="opacity-0"
              style={{
                animation: animateCards ? `fadeSlideUp 0.6s ease-out ${idx * 0.15}s forwards` : "",
              }}
            >
              <QuizletFlashcard index={idx} question={card.question} answer={card.answer} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Quote;
