import React, { useEffect } from "react";
import { gsap } from "gsap";
export function Cursor() {
  useEffect(() => {
    function handleMove(e: MouseEvent) {
      gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.05,
      });
    }

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div className="cursor cursor1"></div>
      <div className="cursor cursor2"></div>
    </>
  );
}
