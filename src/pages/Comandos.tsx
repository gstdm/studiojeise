import React, { useState } from 'react';
import { ArrowLeft, Settings, Search, Package, Image, PiggyBank, Send } from 'lucide-react';
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
  "icon": <Settings className="w-6 h-6" />,
  "name": "/steal",
  "description": "🖊️ Rouba uma figurinha específica, responda a uma imagem com /steal nome ou defina o seu nome padrão no /setname e use apenas /steal nas próximas vezes.",
  "usage": "/steal (nome desejado) ",
  "examples": ["/steal dallas"],
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
  "icon": <Package className="w-6 h-6" />,
  "name": "/ytvideo",
  "description": "🎥 Baixa o vídeo do *YouTube* a partir do link enviado, retornando a versão em MP4 do vídeo. Ideal para salvar vídeos sem precisar de um app externo.",
  "usage": "/ytvideo (link do YouTube)",
  "examples": ["/ytvideo https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  "type": { "name": "Download", "color": "bg-blue-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/ytaudio",
  "description": "🎵 Baixa o áudio do *YouTube* a partir do link enviado, retornando a versão MP3 do áudio. Útil para quem deseja apenas a música sem o vídeo.",
  "usage": "/ytaudio (link do YouTube)",
  "examples": ["/ytaudio https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  "type": { "name": "Download", "color": "bg-blue-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/tiktok",
  "description": "📱 Baixa o vídeo do *TikTok* sem marca d'água, a partir do link enviado. Ideal para salvar vídeos virais sem as informações de autoria.",
  "usage": "/tiktok (link do TikTok)",
  "examples": ["/tiktok https://www.tiktok.com/@username/video/1234567890123456789"],
  "type": { "name": "Download", "color": "bg-purple-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/tiktokaudio",
  "description": "🎵 Baixa o áudio do *TikTok* sem marca d'água, a partir do link enviado. Perfeito para quem quer apenas o som sem o vídeo.",
  "usage": "/tiktokaudio (link do TikTok)",
  "examples": ["/tiktokaudio https://www.tiktok.com/@username/video/1234567890123456789"],
  "type": { "name": "Download", "color": "bg-purple-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/insta",
  "description": "📸 Baixa o post de *Instagram* (foto ou vídeo) a partir do link enviado. Ideal para salvar posts de maneira rápida e sem sair do WhatsApp.",
  "usage": "/insta (link do Instagram)",
  "examples": ["/insta https://www.instagram.com/p/XXXXXXXXXXX/"],
  "type": { "name": "Download", "color": "bg-red-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/instaaudio",
  "description": "🎶 Baixa o áudio de um post de *Instagram* a partir do link enviado. Útil para extrair o áudio de vídeos compartilhados na plataforma.",
  "usage": "/instaaudio (link do Instagram)",
  "examples": ["/instaaudio https://www.instagram.com/p/XXXXXXXXXXX/"],
  "type": { "name": "Download", "color": "bg-red-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/face",
  "description": "📘 Baixa o vídeo do *Facebook* a partir do link enviado, retornando a versão MP4 do vídeo. Ideal para quem quer salvar vídeos diretamente do Facebook.",
  "usage": "/face (link do Facebook)",
  "examples": ["/face https://www.facebook.com/username/posts/1234567890"],
  "type": { "name": "Download", "color": "bg-blue-600" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/faceaudio",
  "description": "🎵 Baixa o áudio do *Facebook* a partir do link enviado, retornando o áudio em MP3. Perfeito para salvar o som de vídeos do Facebook.",
  "usage": "/faceaudio (link do Facebook)",
  "examples": ["/faceaudio https://www.facebook.com/username/posts/1234567890"],
  "type": { "name": "Download", "color": "bg-blue-600" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/kwai",
  "description": "📹 Baixa o vídeo do *Kwai* a partir do link enviado, sem marca d'água, ideal para compartilhar vídeos sem a logo da plataforma.",
  "usage": "/kwai (link do Kwai)",
  "examples": ["/kwai https://www.kwai.com/video/1234567890123456789"],
  "type": { "name": "Download", "color": "bg-teal-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/apostar",
  "description": "🎰 Aposte uma quantia e tente acertar 3 frutas iguais para ganhar 8x o que apostou. Emoção de cassino direto no WhatsApp!",
  "usage": "/apostar [quantia]",
  "examples": ["/apostar 100"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/caraoucoroa",
  "description": "🪙 Jogue cara ou coroa e tente acertar para ganhar 1x o valor apostado!",
  "usage": "/caraoucoroa (opção) (valor)",
  "examples": ["/caraoucoroa cara 50"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/chutar",
  "description": "🎲 Aposte 30 coins no número de 1 a 10. Se acertar, ganha 150 coins!",
  "usage": "/chutar [número de 1 a 10]",
  "examples": ["/chutar 7"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/daily",
  "description": "🎁 Receba sua recompensa diária de coins. Não perca a chance de acumular mais moedas todos os dias!",
  "usage": "/daily",
  "examples": ["/daily"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/coins",
  "description": "💰 Veja quantas coins você tem acumuladas. Use este comando sempre que quiser conferir seu saldo.",
  "usage": "/coins",
  "examples": ["/coins"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/roletarussa",
  "description": "💥 Jogue na roleta russa com 2% de chance de ganhar. Se ganhar, seu saldo é multiplicado por 20. Se perder, seu saldo é zerado.",
  "usage": "/roletarussa",
  "examples": ["/roletarussa"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <Send className="w-6 h-6" />,
  "name": "/roubar",
  "description": "💸 Tente roubar coins de outro usuário! Se tiver sucesso, você pega 1/4 do saldo dele. Se falhar, perde 1/5 do seu saldo. Cuidado, se ele tiver escudo, você perde 2/5.",
  "usage": "/roubar [@usuario]",
  "examples": ["/roubar @usuario"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <Send className="w-6 h-6" />,
  "name": "/transferir",
  "description": "💵 Transfira coins para outro usuário. O valor mínimo da transferência é 50 coins.",
  "usage": "/transferir @usuario [quantidade]",
  "examples": ["/transferir @usuario 100"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/top",
  "description": "🏆 Exibe o ranking dos usuários com mais coins no sistema. Veja quem são os mais ricos!",
  "usage": "/top",
  "examples": ["/top"],
  "type": { "name": "Economias (interação)", "color": "bg-yellow-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/escudo",
  "description": "🛡️ Ativa um escudo de proteção para seu saldo de coins. Com ele, você protege seu saldo contra roubos e perdas.",
  "usage": "/escudo",
  "examples": ["/escudo 3"],
  "type": { "name": "Economias (interação)", "color": "bg-green-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/dado",
  "description": "🎲 Jogue um dado e veja qual número você tirou. Divirta-se e compartilhe com seus amigos!",
  "usage": "/dado [número]",
  "examples": ["/dado 6"],
  "type": { "name": "Economias (interação)", "color": "bg-red-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/jogodavelha",
  "description": "❌ Jogue o clássico jogo da velha! Marque quem você quiser para iniciar a partida. O objetivo é fazer uma linha com 3 símbolos.",
  "usage": "/jogodavelha [@usuario]",
  "examples": ["/jogodavelha @usuario"],
  "type": { "name": "Brincadeiras", "color": "bg-yellow-500" }
},
{
  "icon": <Package className="w-6 h-6" />,
  "name": "/resetarvelha",
  "description": "🔄 Resete o jogo da velha. Todos os jogadores começam de novo.",
  "usage": "/resetarvelha",
  "examples": ["/resetarvelha"],
  "type": { "name": "Brincadeiras", "color": "bg-blue-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/chance",
  "description": "🎲 Veja a chance de você ser algo! O bot calcula uma porcentagem aleatória para você, como 70% corno ou 50% gostoso!",
  "usage": "/chance (algo)",
  "examples": ["/chance de eu ser lindo"],
  "type": { "name": "Brincadeiras", "color": "bg-green-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/nazista",
  "description": "✋ O bot vai calcular sua porcentagem de ser nazista. Prepare-se para se surpreender com o resultado!",
  "usage": "/nazista",
  "examples": ["/nazista"],
  "type": { "name": "Brincadeiras", "color": "bg-red-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/gay",
  "description": "🌈 O bot vai calcular sua porcentagem de ser gay. Será que você tem mais de 50%? Descubra agora!",
  "usage": "/gay",
  "examples": ["/gay"],
  "type": { "name": "Brincadeiras", "color": "bg-blue-600" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/feio",
  "description": "😑 O bot vai calcular sua porcentagem de ser feio. Prepare-se para um resultado inesperado!",
  "usage": "/feio",
  "examples": ["/feio"],
  "type": { "name": "Brincadeiras", "color": "bg-orange-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/corno",
  "description": "🐂 O bot vai calcular sua porcentagem de ser corno. Você vai se surpreender com os resultados!",
  "usage": "/corno",
  "examples": ["/corno"],
  "type": { "name": "Brincadeiras", "color": "bg-brown-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/bebado",
  "description": "🍻 O bot vai calcular sua porcentagem de ser bêbado. Prepare-se para ver o quanto você é “divertido”!",
  "usage": "/bebado",
  "examples": ["/bebado"],
  "type": { "name": "Brincadeiras", "color": "bg-yellow-600" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/vesgo",
  "description": "👀 O bot vai calcular sua porcentagem de ser vesgo. Será que você realmente precisa de óculos?",
  "usage": "/vesgo",
  "examples": ["/vesgo"],
  "type": { "name": "Brincadeiras", "color": "bg-teal-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/gado",
  "description": "🐮 O bot vai calcular sua porcentagem de ser gado. Como você se comporta na relação?",
  "usage": "/gado",
  "examples": ["/gado"],
  "type": { "name": "Brincadeiras", "color": "bg-green-600" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/gostoso",
  "description": "😎 O bot vai calcular sua porcentagem de ser gostoso. O quão irresistível você é?",
  "usage": "/gostoso",
  "examples": ["/gostoso"],
  "type": { "name": "Brincadeiras", "color": "bg-purple-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/gostosa",
  "description": "💃 O bot vai calcular sua porcentagem de ser gostosa. A beleza está no olhar de quem vê!",
  "usage": "/gostosa",
  "examples": ["/gostosa"],
  "type": { "name": "Brincadeiras", "color": "bg-pink-500" }
},
{
  "icon": <PiggyBank className="w-6 h-6" />,
  "name": "/dogolpe",
  "description": "👁️ O bot vai calcular sua porcentagem de ser o famoso golpista. Não caia nos golpes, hein!",
  "usage": "/dogolpe",
  "examples": ["/dogolpe"],
  "type": { "name": "Brincadeiras", "color": "bg-red-600" }
},
{
  "icon": <Image className="w-6 h-6" />,
  "name": "/matar",
  "description": "🔪 Marque alguém e o bot irá gerar um vídeo simulando que você matou essa pessoa. Jogo de brincadeira com um toque de ação!",
  "usage": "/matar @usuario",
  "examples": ["/matar @usuario"],
  "type": { "name": "Brincadeiras", "color": "bg-purple-500" }
},
{
  "icon": <Image className="w-6 h-6" />,
  "name": "/beijo",
  "description": "💋 Marque alguém e o bot irá gerar um vídeo simulando que você deu um beijo na pessoa. Romance ou zoeira, escolha sua vibe!",
  "usage": "/beijo @usuario",
  "examples": ["/beijo @usuario"],
  "type": { "name": "Brincadeiras", "color": "bg-pink-500" }
},
{
  "icon": <Image className="w-6 h-6" />,
  "name": "/tapa",
  "description": "👋 Marque alguém e o bot irá gerar um vídeo simulando que você deu um tapa nessa pessoa. Aquele tapa de zoeira!",
  "usage": "/tapa @usuario",
  "examples": ["/tapa @usuario"],
  "type": { "name": "Brincadeiras", "color": "bg-red-500" }
},
{
  "icon": <Image className="w-6 h-6" />,
  "name": "/chute",
  "description": "🦵 Marque alguém e o bot irá gerar um vídeo simulando que você chutou a pessoa. O chute mais engraçado da sua vida!",
  "usage": "/chute @usuario",
  "examples": ["/chute @usuario"],
  "type": { "name": "Brincadeiras", "color": "bg-blue-600" }
},
{
  "icon": <ArrowLeft className="w-6 h-6" />,
  "name": "/ban",
  "description": "🔨 Bane um usuário do grupo. Marque o usuário ou responda à mensagem dele com o comando.",
  "usage": "/ban @usuario",
  "examples": ["/ban @usuario", "Responda a mensagem de @usuario com /ban"],
  "type": { "name": "Moderação", "color": "bg-blue-600" }
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
          <p className="text-gray-400 text-center mt-12">Nenhum coma
