const drinks = {
  tea: {
    name: 'Green Tea',
    price: 1.00,
    description: 'A refreshing cup of green tea',
  },
  coffee: {
    name: 'Coffee',
    price: 1.50,
    description: 'A cup of coffee',
  },
  soda: {
    name: 'Soda',
    price: 1.00,
    description: 'A refreshing soda',
  },
}


type Drink = keyof typeof drinks;

type props = {
  drink: Drink;
}

function Drink({drink}: props){
  const info = drinks[drink];
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
      <Drink drink="tea"/>
      <Drink drink="coffee"/>
      <Drink drink="soda"/>
    </div>
  );
}
