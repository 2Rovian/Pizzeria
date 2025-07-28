import { useState, useEffect } from "react";
interface PizzaProps {
  name: string,
  price: number
}

function App() {
  const [pedido, setPedido] = useState();
  const [pizzasData, setPizzasData] = useState<PizzaProps[]>([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const response_pizzas = await response.json();
        setPizzasData(response_pizzas);
      } catch (error) {
        console.error("Erro ao buscar pizzas: ", error)
      }

    }

    fetchPizzas()
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-orange-700 mb-4 text-center">
        Bem-vindo a Pizzeria!
      </h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-xl">
        Escolha sua pizza favorita entre nossas deliciosas opções artesanais feitas com os melhores ingredientes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full max-w-5xl">
        {pizzasData.map((pizza, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-orange-800">{pizza?.name}</h2>
            <p className="text-gray-600 mt-2">Preço: ${pizza?.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <button className="px-6 py-3 bg-orange-600 text-white rounded-xl text-lg hover:bg-orange-700 transition-all">
        Fazer pedido
      </button>
    </div>
  );
}

export default App;
