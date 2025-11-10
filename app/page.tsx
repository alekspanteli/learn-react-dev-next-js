"use client";

const items = [
  {
    name: "Item 1",
    description: "Description 1",
    inStock: true,
  },
  {
    name: "Item 2",
    description: "Description 2",
    inStock: false,
  },
  {
    name: "Item 3",
    description: "Description 3",
    inStock: true,
    id: 3,
  },
];

// Intresting

// When we write ArrayType[number] in TypeScript, it means:
// "Give me the type of any element in this array."

type Item = (typeof items)[number];

type TableProps = {
  items: Item[];
};

function CardTable({ items }: TableProps) {
  return (
    <table>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.inStock ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Home() {
  const itemsInStock = items.filter((item) => item.inStock);
  const itemsOutOfStock = items.filter((item) => !item.inStock);

  return (
    <>
      <h1>Items out of stock</h1>
      {items.length > 0 ? (
        <CardTable items={itemsOutOfStock} />
      ) : (
        <p>No items out of stock</p>
      )}
      <h1>Items in stock</h1>
      {items.length > 0 ? (
        <CardTable items={itemsInStock} />
      ) : (
        <p>No items in stock</p>
      )}
    </>
  );
}
