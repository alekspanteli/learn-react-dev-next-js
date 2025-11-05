"use client";

// export default function RespondingToEvents() {
//   function handleClick() {
//     console.log("You clicked the button");
//   }
//   return (
//     <div>
//       <h1>Responding to Events</h1>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default function RespondingToEvents() {
//     return (
//       <div>
//         <h1>Responding to Events</h1>
//         <button onClick={() => console.log("You clicked the button")}>
//           Click me
//         </button>
//       </div>
//     );
//   }

// export default function RespondingToEvents() {
//   return (
//     <div>
//       <h1>Responding to Events</h1>
//       <button
//         onClick={function handleClick() {
//           console.log("You clicked the button");
//         }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

// function AlertButton({message, children}: {message: string, children: React.ReactNode}) {
//   return (
//     <button onClick={() => alert(message)}>{children}</button>
//   );
// }

// export default function RespondingToEvents() {
//   return (
//     <div>
//       <h1>Responding to Events</h1>
//       <AlertButton message="Playing">Play me</AlertButton>
//       <AlertButton message="Stopping">Stop me</AlertButton>
//     </div>
//   );
// }

// export default function RespondingToEvents() {
//     return (
//       <div>
//         <h1>Responding to Events</h1>
//         <button onClick={() => alert("You clicked the button")}>Click me</button>
//       </div>
//     );
//   }

// type ButtonProps = {
//   onClick: () => void;
//   children: React.ReactNode;
// };

// function Button({ onClick, children }: ButtonProps) {
//   return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({ movieName }: { movieName: string }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}`);
//   }
//   return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
// }

// export default function RespondingToEvents() {
//   return (
//     <div>
//       <h1>Responding to Events</h1>
//       <PlayButton movieName="The Matrix" />
//       <PlayButton movieName="The Terminator" />
//     </div>
//   );
// }

// function Toolbar() {
//   return (
//     <div
//       className="bg-blue-500 p-4 rounded-md"
//       onClick={() => alert("You clicked the toolbar")}
//     >
//       <button
//         className="bg-red-500 p-2 rounded-md"
//         onClick={(e) => {
//           e.stopPropagation();
//           alert("Playing");
//         }}
//       >
//         Button Clicked
//       </button>
//     </div>
//   );
// }

// export default function RespondingToEvents() {
//   return (
//     <div>
//       <h1>Responding to Events</h1>
//       <Toolbar />
//     </div>
//   );
// }

function SignUpForm() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert("You submitted the form");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input className="border-2 border-gray-300 rounded-md p-2" type="text" />
            </label>
            <button className="bg-blue-500 p-2 rounded-md text-white" type="submit">Submit</button>
        </form>
    );
}

export default function RespondingToEvents() {
    return (
        <div>
            <h1>Responding to Events</h1>
            <SignUpForm />
        </div>
    );
}
