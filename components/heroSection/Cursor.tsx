"use client"

import { useEffect, useRef, useState } from "react"

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorLazyRef = useRef<HTMLDivElement>(null)
  const [cursorScale, setCursorScale] = useState<NodeListOf<Element> | null>(null)

  const editCursor = (event: MouseEvent, target: HTMLElement | null) => {
    if (!target) return
    target.style.top = event.clientY + "px"
    target.style.left = event.clientX + "px"
  }

  const addCursorActiveStyle = (trigger: Element) => {
    if (!cursorRef.current || !cursorLazyRef.current) return

    cursorRef.current.classList.add("grow")
    cursorLazyRef.current.classList.add("border-hide")

    if (trigger.classList.contains("small")) {
      cursorRef.current.classList.remove("grow")
      cursorRef.current.classList.add("grow-small")
    }
  }

  const removeCursorActiveStyle = () => {
    if (!cursorRef.current || !cursorLazyRef.current) return

    cursorRef.current.classList.remove("grow")
    cursorLazyRef.current.classList.remove("border-hide")
    cursorRef.current.classList.remove("grow-small")
  }

  const setUpCursor = () => {
    const handleMouseMove = (event: MouseEvent) => {
      editCursor(event, cursorRef.current)
      editCursor(event, cursorLazyRef.current)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }

  const initActiveCursorDetection = () => {
    const elements = document.querySelectorAll("a, .cursor-scale")
    setCursorScale(elements)

    elements.forEach((link) => {
      const handleMouseEnter = () => addCursorActiveStyle(link)
      const handleMouseLeave = () => removeCursorActiveStyle()

      link.addEventListener("mouseenter", handleMouseEnter)
      link.addEventListener("mouseleave", handleMouseLeave)

      // Store event listeners for cleanup
      ;(link as any)._cursorHandlers = {
        mouseenter: handleMouseEnter,
        mouseleave: handleMouseLeave,
      }
    })
  }

  const removeActiveCursorDetection = () => {
    if (!cursorScale) return

    cursorScale.forEach((link) => {
      const handlers = (link as any)._cursorHandlers
      if (handlers) {
        link.removeEventListener("mouseenter", handlers.mouseenter)
        link.removeEventListener("mouseleave", handlers.mouseleave)
        delete (link as any)._cursorHandlers
      }
    })
  }

  useEffect(() => {
    const cleanupCursor = setUpCursor()
    initActiveCursorDetection()

    return () => {
      cleanupCursor()
      removeActiveCursorDetection()
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={cursorLazyRef} className="cursor-lazy"></div>

      <style jsx global>{`
        /* Hide default cursor */
        body {
          cursor: none;
          position: relative;
          max-width: 100vw;
          height: 100%;
          overflow-x: hidden;
        }

        .cursor,
        .cursor-lazy {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate3d(-50%, -50%, 0) scale(1);
          pointer-events: none;
          border-radius: 50%;
          z-index: 998;
          mix-blend-mode: difference;
          filter: invert(1);
        }

        .cursor {
          width: 10px;
          height: 10px;
          background: #000;
          transition-duration: 0ms;
          transition-timing-function: ease-out;
          clip-path: circle(50% at 50% 50%);
        }

        .cursor-lazy {
          width: 45px;
          height: 45px;
          border: 2px solid #000;
          transition-duration: 200ms;
          transition-timing-function: ease-out;
          opacity: 1;
        }

        .dark .cursor {
          background: #fff;
        }

        .dark .cursor-lazy {
          border-color: #fff;
        }

        .dark .cursor,
        .dark .cursor-lazy {
          filter: none;
        }

        .grow {
          transform: translate3d(-50%, -50%, 0) scale(4) !important;
          background: white !important;
          mix-blend-mode: difference;
          filter: none !important;
          border: none !important;
        }

        .grow-small {
          transform: translate3d(-50%, -50%, 0) scale(2) !important;
          background: white !important;
          mix-blend-mode: difference;
          filter: none !important;
          border: none !important;
          /* Star shape clip-path */
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          ) !important;
        }

        .border-hide {
          opacity: 0 !important;
          transform: translate3d(-50%, -50%, 0) scale(0) !important;
        }

        /* Hide cursor on touch devices */
        @media (pointer: coarse) {
          .cursor,
          .cursor-lazy {
            opacity: 0;
          }
          
          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  )
}
