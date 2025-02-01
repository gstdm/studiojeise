import React from 'react';

function App() {
  return (
    <div className="bg-gradient-to-b from-beige-100 to-beige-300 min-h-screen">
      {/* Título e Subtítulo */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800">Studio Jeise Lashes</h1>
        <p className="text-lg text-gray-600 mt-4">@jeuusilayne.s | O poder de transformar olhares! 🔥</p>
      </div>

      {/* Botões */}
      <div className="flex justify-center gap-8 py-8">
        <a
          href="/#/modelos"
          className="bg-pink-500 text-white px-8 py-3 rounded-lg text-xl font-medium hover:bg-pink-600 transition duration-300"
        >
          Ver Modelos
        </a>
        <a
          href="https://wa.me/558988023208"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-8 py-3 rounded-lg text-xl font-medium hover:bg-red-600 transition duration-300"
        >
          Agendar Horário
        </a>
      </div>

      {/* Foto */}
      <div className="flex justify-center py-8">
        <img
          src="https://via.placeholder.com/300"
          alt="Foto da dona do Studio"
          className="w-72 h-72 object-cover rounded-lg border-4 border-gray-400"
        />
      </div>

      {/* Vantagens de Fazer Cílios */}
      <div className="bg-pink-100 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Vantagens de Fazer Extensão de Cílios</h2>
        <div className="max-w-7xl mx-auto space-y-6 px-6 sm:px-8">
          <div className="flex items-start gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Imagem 1"
              className="w-32 h-32 rounded-md shadow-md"
            />
            <p className="text-lg">Aumento da autoestima, proporcionando um olhar marcante.</p>
          </div>
          <div className="flex items-start gap-6 flex-row-reverse">
            <img
              src="https://via.placeholder.com/150"
              alt="Imagem 2"
              className="w-32 h-32 rounded-md shadow-md"
            />
            <p className="text-lg">Praticidade para o dia a dia, sem a necessidade de maquiagem diária.</p>
          </div>
          <div className="flex items-start gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Imagem 3"
              className="w-32 h-32 rounded-md shadow-md"
            />
            <p className="text-lg">Olhar naturalmente volumoso e alongado, com cílios de alta qualidade.</p>
          </div>
          <div className="flex items-start gap-6 flex-row-reverse">
            <img
              src="https://via.placeholder.com/150"
              alt="Imagem 4"
              className="w-32 h-32 rounded-md shadow-md"
            />
            <p className="text-lg">Resultados duradouros, com manutenção periódica.</p>
          </div>
        </div>
      </div>

      {/* Frase sobre as fotos */}
      <div className="text-center py-4">
        <p className="text-gray-500 text-sm">
          *As fotos exibidas no site foram tiradas pela própria dona do Studio.
        </p>
      </div>

      {/* Botão Pré e Pós Agendamento */}
      <div className="flex justify-center py-8">
        <a
          href="/#"
          className="bg-black text-white px-8 py-3 rounded-lg text-xl font-medium hover:bg-gray-800 transition duration-300"
        >
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default App;
