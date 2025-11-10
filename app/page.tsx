"use client";

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
      <ContactCard
        name="John Doe"
        job="Software Engineer"
        email="john.doe@example.com"
      />
      <ContactCard
        name="Jane Doe"
        job="Software Engineer"
        email="jane.doe@example.com"
      />
      <ContactCard
        name="Jim Doe"
        job="Software Engineer"
        email="jim.doe@example.com"
      />

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
