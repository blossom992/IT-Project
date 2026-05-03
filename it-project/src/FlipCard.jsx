import React from "react";

function FlipCard({ frontImage, backImage }) {
  return (
   <button
      type="button"
      aria-label="Hover or focus to flip product preview"
      className="group mx-auto aspect-[4/3] w-full max-w-xl cursor-pointer rounded-[2rem] outline-none"
      style={{ perspective: "1200px" }}
    >
       <div
        className={`
          relative h-full w-full transition-transform duration-700 preserve-3d
          group-hover:rotate-x-180 group-focus-visible:rotate-x-180
        `}
      >
         <div
          className="absolute inset-0 rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-950/30 backface-hidden sm:p-5"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={frontImage}
            alt="Front"
            className="h-full w-full rounded-[1.4rem] object-cover"
          />
        </div>

        <div className="absolute inset-0 rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-950/30 rotate-x-180 backface-hidden sm:p-5"
     style={{ backfaceVisibility: "hidden" }}
>

          <img
            src={backImage}
            alt="Back"
            className="h-full w-full rounded-[1.4rem] object-cover"
          />
        </div>
      </div>
    </button>
  );
}

export default FlipCard;


