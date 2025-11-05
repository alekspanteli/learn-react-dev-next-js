// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist',
// ];

type Person = {
  id: number;
  name: string;
  description: string;
};

const people: Person[] = [
  { id: 0, name: "Creola Katherine Johnson", description: "mathematician" },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    description: "chemist",
  },
  { id: 2, name: "Mohammad Abdus Salam", description: "physicist" },
  { id: 3, name: "Percy Lavon Julian", description: "chemist" },
  { id: 4, name: "Subrahmanyan Chandrasekhar", description: "astrophysicist" },
];

// export default function RenderingLists() {

//   const listItems = people.map((person) => (
//     <li key={person.id}>{person.name}: {person.description}</li>
//   ));
//   return (
//     <div>
//       <h1>Rendering Lists</h1>
//       {listItems}
//     </div>
//   );
// }

export default function RenderingLists() {
  const chemists = people
    .filter((person) => person.description === "chemist")
    .map((person) => (
      <li key={person.id}>
        {person.name}: {person.description}
      </li>
    ));
  return <ul>{chemists}</ul>;
}
