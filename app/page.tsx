type Drink = 'tea' | 'coffee' | 'soda';

type DrinkInfo = {
  name: string;
  price: number;
  description: string;
};

const drinks = new Map<Drink, DrinkInfo>([
  ['tea', {
    name: 'Green Tea',
    price: 1.00,
    description: 'A refreshing cup of green tea',
  }],
  ['coffee', {
    name: 'Coffee',
    price: 1.50,
    description: 'A cup of coffee',
  }],
  ['soda', {
    name: 'Soda',
    price: 1.00,
    description: 'A refreshing soda',
  }],
]);

type props = {
  drink: Drink;
}

function Drink({drink}: props){
  const info = drinks.get(drink);
  if (!info) return null;
  
  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-bold">{info.name}</h2>
      <p className="text-green-600 font-semibold">${info.price}</p>
      <p className="text-gray-600">{info.description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {Array.from(drinks.keys()).map((drink) => (
        <Drink key={drink} drink={drink} />
      ))}
    </div>
  );
}
