"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    const newCount = count + 1;
    setCount(newCount);
    console.log(newCount);
  }

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
