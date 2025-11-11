"use client";

import { useState } from "react";

export default function Home() {
  function expensiveComputation() {
    console.log('Running expensive computation');
    return 42;
  }

  // const [num1, setNum1] = useState(expensiveComputation());
  const [num1, setNum1] = useState(expensiveComputation());

  const [count, setCount] = useState(0);


  

  return (
    <>
      {num1} {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
