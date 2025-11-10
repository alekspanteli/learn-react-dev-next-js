"use client";

import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size: number;
};

function Avatar({ src, alt, size }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full object-cover"
    />
  );
}

const avatars = [
  {
    src: "https://placehold.co/64x64/png",
    alt: "64 pixel placeholder avatar",
    size: 64,
  },
  {
    src: "https://placehold.co/96x96/png",
    alt: "96 pixel placeholder avatar",
    size: 96,
  },
  {
    src: "https://placehold.co/120x120/png",
    alt: "120 pixel placeholder avatar",
    size: 120,
  },
  {
    src: "https://placehold.co/80x80/png",
    alt: "80 pixel placeholder avatar",
    size: 80,
  },
  {
    src: "https://placehold.co/160x160/png",
    alt: "160 pixel placeholder avatar",
    size: 160,
  },
];

export default function Home() {
  return (
    <>
      {avatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          size={avatar.size}
        />
      ))}
    </>
  );
}
