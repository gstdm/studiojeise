import React, { useState } from 'react';
import { ArrowLeft, Settings, Search, Package, Image, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Comando {
  icon: React.ReactNode;
  name: string;
  description: string;
  usage: string;
  examples: string[];
  type: {
    name: string;
    color: string;
  };
}

function Comandos() {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [expandedComando, setExpandedComando] = useState<string | null>(null);

  const comandos: Comando[] = [
{
  "icon": <Search className="w-6 h-6" />,
  "name": "/ly",
  "description": "🔍 Realiza uma busca no *Sticker.ly* utilizando uma palavra-chave e envia 3 figurinhas relacionadas. Caso repita o mesmo termo, o bot buscará novas figurinhas.",
  "usage": "/ly (palavra-chave)",
  "examples": ["/ly amor", "/ly memes"],
  "type": { "name": "Figurinhas", "color": "bg-green-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/pack",
  "description": "📦 Baixa as 10 primeiras figurinhas de um pacote no *Sticker.ly* utilizando o ID do pacote. Ideal para obter pacotes completos rapidamente.",
  "usage": "/pack (ID do pack)",
  "examples": ["/pack MI28jK"],
  "type": { "name": "Figurinhas", "color": "bg-green-500" }
},
{
  "icon": <Settings className="w-6 h-6" />,
  "name": "/resetname",
  "description": "🖊️ Remove o nome personalizado previamente definido para as figurinhas, retornando ao padrão do bot.",
  "usage": "/resetname",
  "examples": ["/resetname"],
  "type": { "name": "Figurinhas", "color": "bg-green-500" }
},
{
  "icon": <Image className="w-6 h-6" />,
  "name": "/s",
  "description": "🖼️ Cria figurinhas no formato de *preenchimento de tela* a partir de imagens, vídeos (até 10 segundos) ou GIFs.",
  "usage": "/s (responda a uma mídia)",
  "examples": ["/s"],
  "type": { "name": "Figurinhas", "color": "bg-green-500" }
},
{
  "icon": <Image className="w-6 h-6" />,
  "name": "/f",
  "description": "🖼️ Cria figurinhas no formato original, sem esticar. A partir de imagens, vídeos (até 10 segundos) ou GIFs.",
  "usage": "/f (responda a uma mídia)",
  "examples": ["/f"],
  "type": { "name": "Figurinhas", "color": "bg-green-500" }
},
{
  "icon": <Settings className="w-6 h-6" />,
  "name": "/setname",
  "description": "🖊️ Define um nome para todas as figurinhas enviadas pelo bot.",
  "usage": "/setname (nome desejado)",
  "examples": ["/setname MinhasFigurinhas"],
  "type": { "name": "Figurinhas", "color": "bg-green-500" }
},
{
  "icon": <Image className="w-6 h-6" />,
  "name": "/toimg",
  "description": "🖼️ Converte figurinhas estáticas ou animadas em imagens no formato JPG.",
  "usage": "/toimg (responda a uma figurinha)",
  "examples": ["/toimg"],
  "type": { "name": "Figurinhas", "color": "bg-green-500" }
},
    {
      icon: <Package className="w-6 h-6" />,
      name: '/ytvideo',
      description: '🎥 Baixa vídeos do YouTube em MP4 a partir do link enviado.',
      usage: '/ytvideo (link do YouTube)',
      examples: ['/ytvideo https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
      type: { name: 'Download', color: 'bg-blue-500' }
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      name: '/dado',
      description: '🎲 Jogue o dado! Se acertar o número, ganha 100 coins. Se errar, perde 30 coins.',
      usage: '/dado [número de 1 a 6]',
      examples: ['/dado 4'],
      type: { name: 'Economias (interação)', color: 'bg-yellow-500' }
    }
  ];

  const tipos = Array.from(new Set(comandos.map((comando) => comando.type.name)));

  const comandosFiltrados = comandos.filter((comando) => {
    const matchesSearch = comando.name.includes(search) || comando.description.includes(search);
    const matchesType = selectedType ? comando.type.name === selectedType : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Comandos Disponíveis</h1>
        </div>

        {/* Barra de pesquisa e filtro */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Pesquisar comandos..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
          />
          <select
            value={selectedType || ''}
            onChange={(e) => setSelectedType(e.target.value || null)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
          >
            <option value="">Todos os Tipos</option>
            {tipos.map((tipo, index) => (
              <option key={index} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>

        {comandosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comandosFiltrados.map((comando, index) => (
              <div
                key={index}
                className="relative text-left bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              >
                <span
                  className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${comando.type.color} bg-opacity-20 text-white`}
                >
                  {comando.type.name}
                </span>
                <div className="text-blue-400 mb-4">{comando.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{comando.name}</h3>
                <button
                  onClick={() =>
                    setExpandedComando(expandedComando === comando.name ? null : comando.name)
                  }
                  className="text-gray-400 hover:text-white flex items-center gap-2"
                >
                  {expandedComando === comando.name ? 'Esconder' : 'Detalhes'}
                  <ArrowLeft
                    className={`w-5 h-5 transition-transform ${
                      expandedComando === comando.name ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedComando === comando.name && (
                  <div className="mt-4 text-gray-400">
                    <p>{comando.description}</p>
                    <code className="bg-gray-900 px-3 py-2 rounded-lg block text-blue-400 my-2">
                      {comando.usage}
                    </code>
                    <ul className="space-y-2">
                      {comando.examples.map((example, i) => (
                        <li key={i}>
                          <code className="bg-gray-900 px-3 py-2 rounded-lg block text-green-400">
                            {example}
                          </code>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-12">Nenhum comando encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Comandos;
    
