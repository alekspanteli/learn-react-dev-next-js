"use client";

type FriendProps = {
  name: string;
  isOnline: boolean;
};

function Friend({ name, isOnline }: FriendProps) {
  return (
    <ul>
      <li className="flex items-center gap-2">
        {isOnline && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
        {name}
      </li>
    </ul>
  );
}

type ShoppingListProps = {
  items: string[];
};

const shoppinList: string[] = [];

function ShoppingList({ items }: ShoppingListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export default function Home() {
  return (
    <>
      <Friend name="John" isOnline={true} />
      <Friend name="Jane" isOnline={false} />
      
      <br/>

      {!!shoppinList.length && <ShoppingList items={shoppinList} />}
    </>
  );
}
