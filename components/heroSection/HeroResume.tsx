"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Magentic from "../ui/magentic";

export function HeroResumeLink() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // subtle arrow wiggle on hover
    const tl = gsap.timeline({ paused: true });
    tl.to(arrowRef.current, {
      x: 5,
      duration: 0.3,
      ease: "power1.inOut",
    });
    tl.to(arrowRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power1.inOut",
    });

    const el = arrowRef.current?.parentElement;
    el?.addEventListener("mouseenter", () => tl.play(0));
    el?.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      el?.removeEventListener("mouseenter", () => tl.play(0));
      el?.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    const textTl = gsap.timeline({ paused: true });
    textTl.to(textEl, {
      letterSpacing: "0.15em",
      color: "#ddd",
      duration: 0.3,
      ease: "power1.inOut",
    });

    const parentEl = textEl.parentElement;
    parentEl?.addEventListener("mouseenter", () => textTl.play());
    parentEl?.addEventListener("mouseleave", () => textTl.reverse());

    return () => {
      parentEl?.removeEventListener("mouseenter", () => textTl.play());
      parentEl?.removeEventListener("mouseleave", () => textTl.reverse());
    };
  }, []);

  return (
    <div
      className="group flex items-center gap-2 text-xl font-medium text-white md:text-3xl"
    >
      <Magentic strength={50} className="z-20" href="/resume.pdf">
        <span ref={textRef}>View Resume</span>
        <div ref={arrowRef} className="transition-transform">
          {/* Right arrow icon */}
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6 18L18 6M18 6H9M18 6V15"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
      </Magentic>
    </div>
  );
}
