type ItemProps = {
  name: string;
  isPacked: boolean;
};

// function Item({name, isPacked}: ItemProps){
//    if (isPacked){
//     return <li className="list-item">{name} ✔</li>;
//    }
//    return <li className="list-item">{name}</li>;
// }

// function Item({name, isPacked}: ItemProps){
//     if (isPacked){
//         return null;
//     }
//     return <li className="list-item">{name}</li>;
// }

// function Item({name, isPacked}: ItemProps){
//     return (
//         <li className="list-item">{name} {isPacked ? '✔' : '❌'}</li>
//     );
// }

// function Item({name, isPacked}: ItemProps){
//     return (
//         <>
//         {isPacked ?  (
//             <li className="list-item">{name} ✔</li>
//             ) : (
//                 <li className="list-item">{name}</li>
//             )}
//         </>
//     );
// }

// function Item({ name, isPacked }: ItemProps) {
//   return (
//     <li className="list-item">
//       {name} {isPacked && "✔"}
//     </li>
//   );
// }

function Item({ name, isPacked }: ItemProps) {
    let itemContent = name;

    if (isPacked) {
        itemContent = `${name} ✔`;
    }

    return <li className="list-item">{itemContent}</li>;
}

export default function ConditionalRendering() {
  const items: ItemProps[] = [
    { name: "apple", isPacked: true },
    { name: "banana", isPacked: false },
    { name: "cherry", isPacked: true },
  ];
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.name} name={item.name} isPacked={item.isPacked} />
      ))}
    </ul>
  );
}
