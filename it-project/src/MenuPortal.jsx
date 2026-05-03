import React from "react";
import { createPortal } from "react-dom";

const menuItems = [
  {
    label: "Home",
    icon: (
      <path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
    ),
  },
  {
    label: "Your Activities",
    icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h6" />,
  },
  {
    label: "Notifications",
    icon: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9 M13.7 21a2 2 0 0 1-3.4 0" />,
  },
];

function MenuPortal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
      />
      <aside className="relative flex h-full w-[min(84vw,20rem)] flex-col bg-[#101936] p-6 text-white shadow-2xl animate-slide-panel">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xl font-black tracking-tight">StudySpark</span>
          <button
            onClick={onClose}
            className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20"
            aria-label="Close menu"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-white/85 transition hover:bg-white/10 hover:text-white">
                <svg className="size-5 text-[#51cfff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  {item.icon}
                </svg>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto rounded-3xl border border-white/10 bg-white/10 p-4">
          <p className="text-sm font-bold">Ready for today?</p>
          <p className="mt-1 text-sm text-white/65">Flip cards, star what matters, and keep moving.</p>
        </div>
      </aside>
    </div>,
    document.getElementById("menu-portal")
  );
}

export default MenuPortal;
