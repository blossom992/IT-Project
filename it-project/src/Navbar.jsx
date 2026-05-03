import React, { useState } from "react";
import MenuPortal from "./MenuPortal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101936]/95 text-white shadow-lg backdrop-blur">
      <nav className="mx-auto flex min-h-16 w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#51cfff]"
        >
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

        <a href="#" className="hidden text-xl font-black tracking-tight sm:block">
          StudySpark
        </a>

        <div className="relative min-w-0 flex-1 sm:mx-4">
          <input
            type="text"
            className="h-11 w-full rounded-full border border-white/15 bg-white px-4 pl-11 text-sm font-medium text-slate-900 shadow-inner outline-none transition placeholder:text-slate-400 focus:border-[#51cfff] focus:ring-4 focus:ring-[#51cfff]/20"
            placeholder="Search flashcard topics"
          />
          <svg
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Create flashcard set"
            className="grid size-11 place-items-center rounded-full bg-[#4255ff] shadow-lg shadow-[#4255ff]/30 transition hover:-translate-y-0.5 hover:bg-[#3344d8] focus:outline-none focus:ring-2 focus:ring-[#51cfff]"
          >
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </button>
          <button className="hidden rounded-full bg-[#ffd166] px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-[#ffd166]/20 transition hover:-translate-y-0.5 hover:bg-[#ffbf3c] sm:inline-flex">
            Free Trial
          </button>
        </div>
      </nav>

      <MenuPortal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

export default Navbar;

