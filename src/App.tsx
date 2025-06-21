import React, { useState, useEffect } from "react";

const URL_API = "https://jeiselashes.squareweb.app";

type Vantagem = {
  img: string;
  texto: string;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [fotoDona, setFotoDona] = useState("");
  const [vantagens, setVantagens] = useState<Vantagem[]>([]);

  useEffect(() => {
    fetch(`${URL_API}/api/conteudo`)
      .then((res) => res.json())
      .then((data) => {
        setFotoDona(data.fotoDona || "");
        setVantagens(data.vantagens || []);
      })
      .catch((err) => {
        console.error("Erro ao carregar dados:", err);
      });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800">
      {/* Barra de Navegação */}
      <div className="flex justify-between items-center p-4 bg-pink-200">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Menu Lateral */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full shadow-lg z-50 flex flex-col items-center bg-white bg-opacity-95">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-6 text-3xl"
            aria-label="Fechar menu"
          >
            ✖
          </button>
          <ul className="space-y-6 text-center text-2xl mt-16">
            <li>
              <a href="/modelos" onClick={toggleMenu}>
                Ver Modelos
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/558988023208"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                Agendar Horário
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jeuusilayne.s"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="/admin" onClick={toggleMenu}>
                Admin
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold inline-block px-6 py-2 border-4 rounded-lg border-pink-400">
          Studio Jeise Lashes
        </h1>
        <p className="text-lg mt-4">
          @jeuusilayne.s | O poder de transformar olhares! 🔥
        </p>
      </div>

      {/* Botões principais */}
      <div className="flex flex-col items-center py-12">
        <div className="flex justify-center gap-8">
          <a
            href="/modelos"
            className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-pink-500 hover:bg-pink-600 text-white"
          >
            Ver Modelos
          </a>
          <a
            href="https://wa.me/558988023208"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-red-500 hover:bg-red-600 text-white"
          >
            Agendar Horário
          </a>
        </div>

        {/* Botões Ver Localização e Pré/Pós Agendamento */}
        <div className="flex justify-center gap-8 mt-8 px-4">
          <a
            href="https://maps.app.goo.gl/oSHoRZthvCkxMGuS8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-green-500 hover:bg-green-600 text-white"
          >
            Ver Localização
          </a>
          <a
            href="/agendamento"
            className="px-8 py-3 rounded-lg text-xl font-medium transition duration-300 bg-black text-white hover:bg-gray-800"
          >
            Leia o Pré e o Pós Agendamento
          </a>
        </div>
      </div>

      {/* Foto da dona */}
      <div className="flex flex-col items-center py-8">
        {fotoDona && (
          <div className="w-full max-w-xs sm:max-w-md overflow-hidden rounded-2xl border-4 border-pink-400 shadow-lg">
            <img
              src={fotoDona}
              alt="Foto da dona do Studio"
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        <div className="mt-4 text-center">
          <p
            className="text-5xl font-bold text-pink-800"
            style={{
              fontFamily: "'Dancing Script', cursive",
              textShadow:
                "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
            }}
          >
            Jeusilayne
          </p>
          <p
            className="text-lg uppercase tracking-widest text-pink-800 -mt-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow:
                "-0.5px -0.5px 0 white, 0.5px -0.5px 0 white, -0.5px 0.5px 0 white, 0.5px 0.5px 0 white",
            }}
          >
            Lash Designer
          </p>
        </div>
      </div>

      {/* Seção de Vantagens */}
      <div className="py-12 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Vantagens de Fazer Extensão de Cílios
        </h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {vantagens.map((vant, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-6 ${
                idx % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <img
                src={vant.img}
                alt={`Vantagem ${idx + 1}`}
                className="w-32 h-32 rounded-md shadow-md border-2 border-pink-400"
              />
              <p className="text-lg">{vant.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Frase sobre as fotos */}
      <div className="text-center py-4">
        <p className="text-sm text-gray-500">
          *As fotos exibidas no site foram tiradas pela própria dona do Studio,
          garantindo um registro autêntico da experiência.
        </p>
      </div>
    </div>
  );
}

export default App;
