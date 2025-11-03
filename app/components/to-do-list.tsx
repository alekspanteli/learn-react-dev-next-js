import Avatar from "./avatar";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function ToDoList() {
  return (
    <>
      <h1>{person.name}</h1>
      <Avatar />
      <ul style={person.theme}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}
