"use client";

import { FormEvent } from "react";

export default function Home() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const entries = Object.fromEntries(formData.entries());
    const username = entries.username?.toString().trim() ?? "";
    const acknowledgement = entries.acknowledgement ?? null;

    console.log({ username, acknowledgement });

    e.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="border border-gray-300 rounded-md p-2"
            type="text"
            name="username"
            id="username"
            autoComplete="name"
          />
        </div>
        <div>
          <p>Aknowledge the terms and conditions</p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="yes"
              name="acknowledgement"
              value="yes"
              className="accent-red-500"
              required
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="no"
              name="acknowledgement"
              value="no"
              className="accent-red-500"
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white rounded-md p-2 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
