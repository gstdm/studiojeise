import React, { useState } from 'react';
import { ArrowLeft, Settings, Search, Package, Image, PiggyBank, Send, MessageCircle, Command, Bot, Users, Bell, Calendar, FileText, HelpCircle } from 'lucide-react';
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
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/ban',
  description: '🚫 Remove um usuário do grupo mencionando ele ou marcando sua mensagem. O usuário será expulso do grupo.',
  usage: '/ban @usuario',
  examples: ['/ban @josemartins'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/promote',
  description: '⭐ Promove um usuário a administrador mencionando ele ou marcando sua mensagem. O novo administrador terá permissões especiais no grupo.',
  usage: '/promote @usuario',
  examples: ['/promote @josemartins'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/demote',
  description: '🔻 Tira o status de administrador de um usuário mencionando ele ou marcando sua mensagem. O usuário perderá permissões de administração.',
  usage: '/demote @usuario',
  examples: ['/demote @josemartins'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/close',
  description: '🔒 Fecha o grupo, permitindo que apenas administradores falem. Nenhum membro comum poderá enviar mensagens.',
  usage: '/close',
  examples: ['/close'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/open',
  description: '🔓 Abre o grupo, permitindo que todos os membros falem. Qualquer membro poderá enviar mensagens.',
  usage: '/open',
  examples: ['/open'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/marcar',
  description: '🔔 Marca todos os membros do grupo de forma invisível. Use respondendo a uma mensagem sua ou de outro usuário para marcar todos.',
  usage: '/marcar',
  examples: ['/marcar'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/revelar',
  description: '👁️ Revela uma mídia de visualização única de forma normal. Permite que todos visualizem a mídia.',
  usage: '/revelar',
  examples: ['/revelar'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/setnamegp',
  description: '🖼️ Define o *packname* e *author* de todas as figurinhas enviadas no grupo. O nome e autor podem ser alterados se um usuário definir manualmente.',
  usage: '/setnamegp nome1/nome2',
  examples: ['/setnamegp figurinhas/autor'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/resetnamegp',
  description: '🔄 Reseta para o nome padrão do bot os *packname* e *author* das figurinhas enviadas no grupo.',
  usage: '/resetnamegp',
  examples: ['/resetnamegp'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/warn',
  description: '⚠️ Dá uma advertência a um usuário. Use mencionando o usuário ou marcando a mensagem dele. O usuário será notificado.',
  usage: '/warn @usuario',
  examples: ['/warn @josemartins'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/delwarn',
  description: '❌ Remove uma advertência de um usuário. Use mencionando o usuário ou marcando a mensagem dele.',
  usage: '/delwarn @usuario',
  examples: ['/delwarn @josemartins'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/warnlimit',
  description: '📊 Define a quantidade de advertências permitidas no grupo. O limite mínimo é 2 e o máximo é 20.',
  usage: '/warnlimit quantidade',
  examples: ['/warnlimit 5'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/warns',
  description: '📋 Verifica quantas advertências um usuário possui. Use para acompanhar o histórico de advertências de um membro.',
  usage: '/warns @usuario',
  examples: ['/warns @josemartins'],
  type: { name: 'Moderação', color: 'bg-red-500' }
},
{
  icon: <ArrowLeft className="w-6 h-6" />,
  name: '/blockcmd',
  description: '🚫 Bloqueia um comando para ninguém mais no grupo usar. Use para restringir certos comandos.',
  usage: '/blockcmd comando',
 
