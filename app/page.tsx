"use client";

import { ChangeEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <>
      <input
        className="border border-gray-300 rounded-md p-2"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <p>You typed: {value}</p>
    </>
  );
}
