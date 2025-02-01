import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-gray-900"} min-h-screen transition-all duration-300`}>
      
      {/* Cabeçalho */}
      <header className="flex justify-between items-center p-4 fixed w-full top-0 bg-white dark:bg-black shadow-md z-10">
        <button className="text-pink-500 text-3xl">&#9776;</button>
        <button onClick={toggleTheme} className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800">
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>

      {/* Corpo */}
      <main className="pt-16 p-6 flex flex-col items-center">
        
        {/* Imagem e Descrição */}
        <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-pink-100 to-pink-300 dark:from-pink-900 dark:to-pink-700 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <div className="w-40 h-40 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          <div>
            <h1 className="text-2xl font-bold">Realce seu olhar com cílios perfeitos</h1>
            <p className="mt-2 text-lg">
              Os cílios são uma moldura para os olhos e podem transformar sua aparência de forma natural e sofisticada.
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Com técnicas avançadas, nossos alongamentos garantem volume, curvatura e leveza sem prejudicar os fios naturais.
            </p>
          </div>
        </div>

        {/* Botão de Modelos */}
        <button className="mt-8 px-6 py-3 rounded-lg bg-pink-500 text-white text-lg font-semibold hover:bg-pink-600 transition">
          Ver Modelos de Cílios
        </button>

        {/* Vantagens */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="p-6 bg-pink-200 dark:bg-pink-800 rounded-lg shadow-md">
            <h2 className="font-bold text-xl">✨ Beleza e Autoestima</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Alongamentos de cílios deixam seu olhar mais expressivo e sofisticado, elevando sua confiança no dia a dia.
            </p>
          </div>

          <div className="p-6 bg-pink-200 dark:bg-pink-800 rounded-lg shadow-md">
            <h2 className="font-bold text-xl">⏳ Economia de Tempo</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Esqueça o rímel! Com os cílios perfeitos 24h por dia, você economiza tempo na maquiagem e sempre está pronta.
            </p>
          </div>

          <div className="p-6 bg-pink-200 dark:bg-pink-800 rounded-lg shadow-md">
            <h2 className="font-bold text-xl">💧 Resistência à Água</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Nossos cílios são resistentes à água, permitindo que você aproveite piscina, praia e chuvas sem preocupações.
            </p>
          </div>

          <div className="p-6 bg-pink-200 dark:bg-pink-800 rounded-lg shadow-md">
            <h2 className="font-bold text-xl">🌿 Seguro e Confortável</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Aplicamos fios leves e hipoalergênicos, garantindo um procedimento seguro, confortável e sem danos aos cílios naturais.
            </p>
          </div>
        </section>

        {/* Botão Final */}
        <button className="mt-10 mb-6 px-6 py-3 rounded-lg bg-pink-500 text-white text-lg font-semibold hover:bg-pink-600 transition">
          Ver Modelos de Cílios
        </button>

      </main>
    </div>
  );
}

export default App;
