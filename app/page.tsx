"use client";

type FriendProps = {
  name: string;
  isOnline: boolean;
}

function Friend({name, isOnline}: FriendProps) {
  let prefix;

  if (isOnline) {
    prefix = <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
  }

  return (
    <ul>
      <li className="flex items-center gap-2">
        {prefix}
        {name}
      </li>
    </ul>
  );
}


export default function Home() {
 

  return (
    <>
     <Friend name="John" isOnline={true} />
     <Friend name="Jane" isOnline={false} />
     <Friend name="Jim" isOnline={true} />
     <Friend name="Jill" isOnline={false} />
     <Friend name="Jack" isOnline={true} />
     <Friend name="Jill" isOnline={false} />
    </>
  );
}
