"use client";

const contacts = [
  {
    name: "John Doe 1",
    job: "Software Engineer",
    email: "john.doe1@example.com",
  },
  {
    name: "Jane Doe 2",
    job: "Software Engineer 2",
    email: "jane.doe2@example.com",
  },
  {
    name: "Jim Doe 3",
    job: "Software Engineer 3",
    email: "jim.doe3@example.com",
  },
];

type ContactCardProps = {
  name: string;
  job: string;
  email: string;
};

function ContactCard({ name, job, email }: ContactCardProps) {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-500">{job}</p>
      <p className="text-sm text-gray-500">{email}</p>
    </div>
  );
}

type ButtonProps = {
  color: Color;
  children: React.ReactNode;
  onClick: () => void;
};

const colors = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
} as const;

type Color = keyof typeof colors;

function Button({ color, children, onClick }: ButtonProps) {
  return (
    <button
      className={`${colors[color]} text-white px-4 py-2 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function Home() {
  return (
    <>
      
      <ul className="grid gap-4">
      {contacts
      .filter((contact) => contact.job === "Software Engineer")
      .map((contact, index) => (
        <li key={index} className={`${contact.job === "Software Engineer" ? "bg-red-500" : ""}`}>
          <ContactCard name={contact.name} job={contact.job} email={contact.email} />
        </li>
      ))}
      </ul>

      <br />

      <Button color="red" onClick={() => alert("Red button clicked")}>
        Click me
      </Button>
      <Button color="blue" onClick={() => alert("Blue button clicked")}>
        Click me
      </Button>
      <Button color="green" onClick={() => alert("Green button clicked")}>
        Click me
      </Button>
    </>
  );
}
