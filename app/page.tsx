"use client";

import { useState } from "react";

const buttonVariants = {
  primary: "bg-blue-500 text-white p-2 rounded-md",
  secondary: "bg-gray-500 text-white p-2 rounded-md",
};

type ButtonProps = {
  children: React.ReactNode;
  isEnabled?: boolean;
  variant?: "primary" | "secondary";
};

function Button({ isEnabled, children, variant = "primary" }: ButtonProps) {
  return (
    <button
      disabled={!isEnabled}
      className={`${buttonVariants[variant]} ${!isEnabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}

export default function Home() {
  const [hasAgreed, setHasAgreed] = useState(false);

  function handleAgree() {
    setHasAgreed(!hasAgreed);
  }

  return (
    <>
      <h1>Terms of Service</h1>
      <p>By clicking the button below, you agree to our terms of service.</p>
      <label className="flex gap-2">
        <input type="checkbox" checked={hasAgreed} onChange={handleAgree} />
        I agree to the terms of service
      </label>  
      <br />
      <Button variant="secondary">Agree</Button>
      <Button isEnabled={hasAgreed}>Agree</Button>
    </>
  );
}
