"use client";

import { FormEvent } from "react";

export default function Home() {

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get("username") as string;
    console.log(username);
    e.currentTarget.reset();
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="border border-gray-300 rounded-md p-2" type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
