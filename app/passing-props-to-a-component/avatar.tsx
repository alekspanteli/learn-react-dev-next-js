import Image from "next/image";

type Person = {
  name: string;
  imageId: string;
};

export type AvatarProps = {
  person: Person;
  size?: number;
};

function getImageUrl(person: Person) {
  return `https://i.imgur.com/${person.imageId}s.jpg`;
}

export default function Avatar({ person, size = 100 }: AvatarProps) {
  return (
    <>
      <Image
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        className="rounded-full"
      />
    </>
  );
}
