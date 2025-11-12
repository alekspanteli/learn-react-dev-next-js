"use client";

import { useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <button onClick={handleFocus}>Focus Username</button>
    </>
  );
}
