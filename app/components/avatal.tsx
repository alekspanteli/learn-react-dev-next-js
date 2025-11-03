import Image from "next/image";

export default function Avatal() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const name = "Gregorio Y. Zara";
  return (
    <div>
      <Image
        className="avatar"
        src={avatar}
        alt={name}
        width={100}
        height={100}
      />
    </div>
  );
}
