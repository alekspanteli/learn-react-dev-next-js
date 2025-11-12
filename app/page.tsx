"use client";

import { useEffect, useRef, useState } from "react";

function Toasty() {
  const [isShown, setIsShown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsShown(true);
        }
      });
    });

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  const translateXClass = isShown ? "translate-x-0" : "translate-x-full";

  return (
    <div ref={wrapperRef} className="relative h-48 overflow-hidden my-20">
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 text-4xl transition-transform duration-500 ease-in-out ${translateXClass}`}
      >
        👻
      </div>
    </div>
  );
}

export default function Home() {

  

  return (
    <div className="h-[200vh] p-10">
      <h1 className="text-3xl mb-96">Scroll down to see the ghost!</h1>
      <div className="mt-[150vh]">
        <Toasty />
      </div>
    </div>
  );
}
