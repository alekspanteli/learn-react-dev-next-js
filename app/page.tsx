"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <p>Mouse position: {mousePosition.x}, {mousePosition.y}</p>
    </div>
  );
}
