"use client";

function clickBallGame(type: "win" | "lose") {
   if (type === "win") {
    console.log("You win!");
   } else {
    console.log("You lose!");
   }
}

export default function Home() {
  return (
    <>
      <button onClick={() => clickBallGame("win")}>
        Win
      </button>
      <button onClick={() => clickBallGame("lose")}>
        Lose
      </button>
    </>
  );
}
  