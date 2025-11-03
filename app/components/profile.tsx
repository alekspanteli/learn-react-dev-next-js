import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <Image
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        width={100}
        height={100}
      />
    </div>
  );
}
