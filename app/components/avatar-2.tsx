import Image from "next/image";
import { getImageUrl } from "../utils/utils";

type Person = {
  imageId: string;
  name: string;
};

export type Avatar2Props = {
  person: Person;
  size: 50 | 80 | 100;
};

export default function Avatar2({ person, size = 80 }: Avatar2Props) {
  return (
    <div>
      <Image
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}
