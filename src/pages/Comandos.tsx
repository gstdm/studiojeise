import React, { useState } from 'react';
import { MessageCircle, Command, Bot, ArrowLeft, Settings, Search, Users, Bell, Calendar, FileText, HelpCircle, Image, Package, Emoji } from 'lucide-react';
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
      icon: <Emoji className="w-6 h-6" />,
      name: '/emojimix',
      description: '🤝 Combina dois emojis para criar uma figurinha única. Funciona melhor com emojis de rosto, onde a mistura gera resultados mais visuais e divertidos.',
      usage: '/emojimix (emoji1+emoji2)',
      examples: [
        '/emojimix 😮‍💨+🤓',
        '/emojimix 😍+😎'
      ],
      type: {
        name: 'Sticker',
        color: 'bg-green-500'
      }
    },
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
        name: 'Sticker',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      name: '/pack',
      description: '📦 Baixa as 10 primeiras figurinhas de um pacote no *Sticker.ly* utilizando o ID do pacote. Ideal para obter pacotes completos rapidamente.',
      usage: '/pack (ID do pack)',
      examples: [
        '/pack 1234567890'
      ],
      type: {
        name: 'Sticker',
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
        name: 'Sticker',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Image className="w-6 h-6" />,
      name: '/s',
      description: '🖼️ Cria figurinhas no formato de *preenchimento de tela* a partir de imagens, vídeos (até 10 segundos) ou GIFs. Esse comando é ideal para criar figurinhas impactantes que ocupam toda a área visível.',
      usage: '/s (responda a uma mídia)',
      examples: [
        '/s',
        '/s'
      ],
      type: {
        name: 'Sticker',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Settings className="w-6 h-6" />,
      name: '/setname',
      description: '🖊️ Define um nome para todas as figurinhas enviadas pelo bot. Esse nome será aplicado em "propriedades" das figurinhas, nos comandos como /s, /f, /ly e outros.',
      usage: '/setname (nome desejado)',
      examples: [
        '/setname MinhasFigurinhas'
      ],
      type: {
        name: 'Sticker',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Image className="w-6 h-6" />,
      name: '/toimg',
      description: '🖼️ Converte figurinhas estáticas ou animadas em imagens no formato JPG. Útil para salvar ou reutilizar o conteúdo original da figurinha.',
      usage: '/toimg (responda a uma figurinha)',
      examples: [
        '/toimg'
      ],
      type: {
        name: 'Sticker',
        color: 'bg-green-500'
      }
    },
    {
      icon: <Command className="w-6 h-6" />,
      name: '/f',
      description: '🎉 Cria figurinhas animadas a partir de textos. Ideal para criar figurinhas personalizadas com frases ou palavras.',
      usage: '/f (texto)',
      examples: [
        '/f Olá!',
        '/f Eu amo programação'
      ],
      type: {
        name: 'Sticker',
        color: 'bg-green-500'
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
          {comandos.sort((a, b) => a.name.localeCompare(b.name)).map((comando, index) => (
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
