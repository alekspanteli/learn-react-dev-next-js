import Image from "next/image";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  theme: {
    backgroundColor: "lightgray",
    padding: "10px",
    borderRadius: "5px",
  },
};

function TodoList() {
  return (
    <ul style={person.theme}>
      <li>{person.name}</li>
      <li>{person.age}</li>
      <li>{person.city}</li>
      <li>Item 3</li>
    </ul>
  );
}

export default function JavaScriptInJSXWithCurlyBraces() {
  const name = "John Doe";
  const description = "This is a description of the image";
  const avatar = "https://i.imgur.com/MK3eW3As.jpg";
  return (
    <>
      <h1>JavaScript in JSX with Curly Braces</h1>
      <br />
      <h2>{name}</h2>
      <p>{description}</p>
      <Image src={avatar} alt={description} width={100} height={100} />
      <p>{formatDate(new Date())}</p>
      <br />
      <TodoList />
      <br />
    </>
  );
}
