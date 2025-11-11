"use client";

import { useState } from "react";

type SearchFormProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

function SearchForm({ searchQuery, setSearchQuery }: SearchFormProps) {
  function runSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form onSubmit={runSearch}>
      <input
        className="border border-gray-300 rounded-md p-2"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}

function SearchResults({ searchQuery }: { searchQuery: string }) {
  return (
    <div>
      <h2>Your search for: {searchQuery}.</h2>
    </div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <header>
        <a href="">My stuff</a>
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>
      <main>
        <SearchResults searchQuery={searchQuery} />
      </main>
    </>
  );
}
