import Image from "next/image";
import { Component1, Component2, Component3 } from "./components";

export default function Profile() {
  return (
    <div>
      <Image
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        width={100}
        height={100}
      />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}
