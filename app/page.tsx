"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
