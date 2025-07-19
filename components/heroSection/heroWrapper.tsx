"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { HeroButton } from "./heroButton"
import { HeroResumeLink } from "./HeroResume"

export function HeroWrapper() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-main-text span", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "power3.out",
        duration: 3,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="section1__wrapper relative max-w-maxWidth grow">
      <div className="myImage"></div>

      {/* Hero Text */}
      <div className="hero-text-container flex flex-col items-center justify-center text-center z-10 relative">
        <h1 className="hero-main-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
          <span className="block text-[var(--colorPrimary)]">Crafting</span>
          <span className="block">ideas into</span>
          <span className="block text-[var(--colorPrimary)]">digital</span>
          <span className="block">experiences</span>
        </h1>
      </div>
      <HeroButton />
      <div className="absolute left-8 z-20 mt-10">
        <HeroResumeLink />
      </div>
    </main>
  )
}
