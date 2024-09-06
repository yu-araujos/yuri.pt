'use client'

import { useState, useEffect, useRef } from "react";
import "../../css/eyes.css";

interface Coordinates {
  x: number;
  y: number;
}

function Eyes() {
  const [mouseCoordinates, setMouseCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  const eyeLeft = useRef<HTMLDivElement | null>(null);
  const eyeRight = useRef<HTMLDivElement | null>(null);

  const eyeBrowLeft = useRef<HTMLDivElement | null>(null);
  const eyeBrowRight = useRef<HTMLDivElement | null>(null);

  function calcAngle(element: React.RefObject<HTMLDivElement>): number | undefined {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1 + -18;

    return rot;
  }

  const handleMouseMove = (event: MouseEvent) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });

    if (eyeBrowLeft.current) {
      eyeBrowLeft.current.style.transform = `translateY(${event.clientY / 50}px)`;
    }

    if (eyeBrowRight.current) {
      eyeBrowRight.current.style.transform = `translateY(${event.clientY / 50}px)`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes">
      <div className="eyebrow_container">
        <div ref={eyeBrowLeft} className="eye_brow left"></div>
        <div ref={eyeBrowRight} className="eye_brow right"></div>
      </div>
      <div className="eye_container">
        <div
          ref={eyeLeft}
          style={{
            transform: `rotate(${calcAngle(eyeLeft)}deg)`,
          }}
          className="eye"
        ></div>
        <div
          ref={eyeRight}
          style={{
            transform: `rotate(${calcAngle(eyeRight)}deg)`,
          }}
          className="eye"
        ></div>
      </div>
    </div>
  );
}

export default Eyes;
