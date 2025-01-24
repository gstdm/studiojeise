import React, { useState } from 'react';
import { ArrowLeft, Settings, Search, Package, Image, PiggyBank, Send } from 'lucide-react'; // Importando ícones válidos
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
  const [comandoSelecionado, setComandoSelecionado] = useState<Comando | null>(null);

  const comandos: Comando[] = [
    {
      icon: <Search className="w-6 h-6" />,
      name: '/ly',
      description: '🔍 Realiza uma busca no *Sticker.ly* utilizando uma palavra-chave e envia 3 figurinhas relacionadas. Caso repita o mesmo termo, o bot buscará novas figurinhas.',
      usage: '/ly (palavra-chave)',
      examples: [
        '/ly amor',
        '/ly memes'
      ],
      type: {
        name: 'Figurinhas',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/pack',
      description: '📦 Baixa as 10 primeiras figurinhas de um pacote no *Sticker.ly* utilizando o ID do pacote. Ideal para obter pacotes completos rapidamente.',
      usage: '/pack (ID do pack)',
      examples: [
        '/pack MI28jK'
      ],
      type: {
        name: 'Figurinhas',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: '/resetname',
      description: '🖊️ Remove o nome personalizado previamente definido para as figurinhas, retornando ao padrão do bot.',
      usage: '/resetname',
      examples: [
        '/resetname'
      ],
      type: {
        name: 'Figurinhas',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Image className="w-6 h-6" />,
      name: '/s',
      description: '🖼️ Cria figurinhas no formato de *preenchimento de tela* a partir de imagens, vídeos (até 10 segundos) ou GIFs.',
      usage: '/s (responda a uma mídia)',
      examples: [
        '/s'
      ],
      type: {
        name: 'Figurinhas',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Image className="w-6 h-6" />,
      name: '/f',
      description: '🖼️ Cria figurinhas no formato original, sem esticar. a partir de imagens, vídeos (até 10 segundos) ou GIFs.',
      usage: '/f (responda a uma mídia)',
      examples: [
        '/f'
      ],
      type: {
        name: 'Figurinhas',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: '/setname',
      description: '🖊️ Define um nome para todas as figurinhas enviadas pelo bot.',
      usage: '/setname (nome desejado)',
      examples: [
        '/setname MinhasFigurinhas'
      ],
      type: {
        name: 'Figurinhas',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Image className="w-6 h-6" />,
      name: '/toimg',
      description: '🖼️ Converte figurinhas estáticas ou animadas em imagens no formato JPG.',
      usage: '/toimg (responda a uma figurinha)',
      examples: [
        '/toimg'
      ],
      type: {
        name: 'Figurinhas',
        color: 'bg-green-500'
      }
    },
        {
      icon: <Package className="w-6 h-6" />,
      name: '/ytvideo',
      description: '🎥 Baixa o vídeo do *YouTube* a partir do link enviado, retornando a versão em MP4 do vídeo. Ideal para salvar vídeos sem precisar de um app externo.',
      usage: '/ytvideo (link do YouTube)',
      examples: [
        '/ytvideo https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      ],
      type: {
        name: 'Download',
        color: 'bg-blue-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/ytaudio',
      description: '🎵 Baixa o áudio do *YouTube* a partir do link enviado, retornando a versão MP3 do áudio. Útil para quem deseja apenas a música sem o vídeo.',
      usage: '/ytaudio (link do YouTube)',
      examples: [
        '/ytaudio https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      ],
      type: {
        name: 'Download',
        color: 'bg-blue-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/tiktok',
      description: '📱 Baixa o vídeo do *TikTok* sem marca d\'água, a partir do link enviado. Ideal para salvar vídeos virais sem as informações de autoria.',
      usage: '/tiktok (link do TikTok)',
      examples: [
        '/tiktok https://www.tiktok.com/@username/video/1234567890123456789'
      ],
      type: {
        name: 'Download',
        color: 'bg-purple-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/tiktokaudio',
      description: '🎵 Baixa o áudio do *TikTok* sem marca d\'água, a partir do link enviado. Perfeito para quem quer apenas o som sem o vídeo.',
      usage: '/tiktokaudio (link do TikTok)',
      examples: [
        '/tiktokaudio https://www.tiktok.com/@username/video/1234567890123456789'
      ],
      type: {
        name: 'Download',
        color: 'bg-purple-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/insta',
      description: '📸 Baixa o post de *Instagram* (foto ou vídeo) a partir do link enviado. Ideal para salvar posts de maneira rápida e sem sair do WhatsApp.',
      usage: '/insta (link do Instagram)',
      examples: [
        '/insta https://www.instagram.com/p/XXXXXXXXXXX/'
      ],
      type: {
        name: 'Download',
        color: 'bg-red-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/instaaudio',
      description: '🎶 Baixa o áudio de um post de *Instagram* a partir do link enviado. Útil para extrair o áudio de vídeos compartilhados na plataforma.',
      usage: '/instaaudio (link do Instagram)',
      examples: [
        '/instaaudio https://www.instagram.com/p/XXXXXXXXXXX/'
      ],
      type: {
        name: 'Download',
        color: 'bg-red-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/face',
      description: '📘 Baixa o vídeo do *Facebook* a partir do link enviado, retornando a versão MP4 do vídeo. Ideal para quem quer salvar vídeos diretamente do Facebook.',
      usage: '/face (link do Facebook)',
      examples: [
        '/face https://www.facebook.com/username/posts/1234567890'
      ],
      type: {
        name: 'Download',
        color: 'bg-blue-600'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/faceaudio',
      description: '🎵 Baixa o áudio do *Facebook* a partir do link enviado, retornando o áudio em MP3. Perfeito para salvar o som de vídeos do Facebook.',
      usage: '/faceaudio (link do Facebook)',
      examples: [
        '/faceaudio https://www.facebook.com/username/posts/1234567890'
      ],
      type: {
        name: 'Download',
        color: 'bg-blue-600'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/kwai',
      description: '📹 Baixa o vídeo do *Kwai* a partir do link enviado, sem marca d\'água, ideal para compartilhar vídeos sem a logo da plataforma.',
      usage: '/kwai (link do Kwai)',
      examples: [
        '/kwai https://www.kwai.com/video/1234567890123456789'
      ],
      type: {
        name: 'Download',
        color: 'bg-teal-500'
      }
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      name: '/apostar',
      description: '🎰 Aposte uma quantia e tente acertar 3 frutas iguais para ganhar 8x o que apostou. Emoção de cassino direto no WhatsApp!',
      usage: '/apostar [quantia]',
      examples: [
        '/apostar 100'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/caraoucoroa',
      description: '🪙 Jogue cara ou coroa e tente acertar para ganhar 1x o valor apostado!',
      usage: '/caraoucoroa',
      examples: [
        '/caraoucoroa'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      name: '/chutar',
      description: '🎲 Aposte 30 coins no número de 1 a 10. Se acertar, ganha 150 coins!',
      usage: '/chutar [número de 1 a 10]',
      examples: [
        '/chutar 7'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/daily',
      description: '🎁 Receba sua recompensa diária de coins. Não perca a chance de acumular mais moedas todos os dias!',
      usage: '/daily',
      examples: [
        '/daily'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      name: '/coins',
      description: '💰 Veja quantas coins você tem acumuladas. Use este comando sempre que quiser conferir seu saldo.',
      usage: '/coins',
      examples: [
        '/coins'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      name: '/roletarussa',
      description: '💥 Jogue na roleta russa com 2% de chance de ganhar. Se ganhar, seu saldo é multiplicado por 20. Se perder, seu saldo é zerado.',
      usage: '/roletarussa',
      examples: [
        '/roletarussa'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <Send className="w-6 h-6" />,
      name: '/roubar',
      description: '💸 Tente roubar coins de outro usuário! Se tiver sucesso, você pega 1/4 do saldo dele. Se falhar, perde 1/5 do seu saldo. Cuidado, se ele tiver escudo, você perde 2/5.',
      usage: '/roubar [@usuario]',
      examples: [
        '/roubar @usuario'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <Send className="w-6 h-6" />,
      name: '/transferir',
      description: '💵 Transfira coins para outro usuário. O valor mínimo da transferência é 50 coins.',
      usage: '/transferir @usuario [quantidade]',
      examples: [
        '/transferir @usuario 100'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      name: '/top',
      description: '🏆 Veja o top 5 usuários com mais coins acumulados. Será que você está no pódio?',
      usage: '/top',
      examples: [
        '/top'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      name: '/escudo',
      description: '🛡️ Compre escudos que protegem você de roubos. Cada escudo custa 20 coins.',
      usage: '/escudo',
      examples: [
        '/escudo 3'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    },
    {
      icon: PiggyBank className="w-6 h-6" />,
      name: '/dado',
      description: '🎲 Jogue o dado! Se acertar o número, ganha 100 coins. Se errar, perde 30 coins.',
      usage: '/dado [número de 1 a 6]',
      examples: [
        '/dado 4'
      ],
      type: {
        name: 'Economias (interação)',
        color: 'bg-yellow-500'
      }
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comandos.map((comando, index) => (
            <button
              key={index}
              onClick={() => setComandoSelecionado(comando)}
              className="relative text-left bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-200"
            >
              <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${comando.type.color} bg-opacity-20 text-white`}>
                {comando.type.name}
              </span>
              <div className="text-blue-400 mb-4">{comando.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{comando.name}</h3>
              <p className="text-gray-400">{comando.description}</p>
            </button>
          ))}
        </div>

        {/* Modal de Detalhes do Comando */}
        {comandoSelecionado && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-blue-400">{comandoSelecionado.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{comandoSelecionado.name}</h3>
                    <span className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${comandoSelecionado.type.color} bg-opacity-20 text-white`}>
                      {comandoSelecionado.type.name}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setComandoSelecionado(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Descrição</h4>
                  <p className="text-white">{comandoSelecionado.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Como Usar</h4>
                  <code className="bg-gray-900 px-3 py-2 rounded-lg block text-blue-400">
                    {comandoSelecionado.usage}
                  </code>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Exemplos</h4>
                  <div className="space-y-2">
                    {comandoSelecionado.examples.map((example, index) => (
                      <code key={index} className="bg-gray-900 px-3 py-2 rounded-lg block text-green-400">
                        {example}
                      </code>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comandos;
        
