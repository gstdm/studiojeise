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
    "icon": <ArrowLeft className="w-6 h-6" />,
    "name": "/ban",
    "description": "🔨 Bane um usuário do grupo. Marque o usuário ou responda à mensagem dele com o comando.",
    "usage": "/ban @usuario",
    "examples": ["/ban @usuario", "Responda a mensagem de @usuario com /ban"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/promote",
    "description": "⬆️ Promove um usuário a administrador. Marque o usuário ou responda à mensagem dele com o comando.",
    "usage": "/promote @usuario",
    "examples": ["/promote @usuario", "Responda a mensagem de @usuario com /promote"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/demote",
    "description": "⬇️ Remove os privilégios de administrador de um usuário. Marque o usuário ou responda à mensagem dele com o comando.",
    "usage": "/demote @usuario",
    "examples": ["/demote @usuario", "Responda a mensagem de @usuario com /demote"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/close",
    "description": "🔒 Fecha o grupo para que apenas administradores possam enviar mensagens.",
    "usage": "/close",
    "examples": ["/close"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/open",
    "description": "🔓 Abre o grupo para que todos os membros possam enviar mensagens.",
    "usage": "/open",
    "examples": ["/open"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <ArrowLeft className="w-6 h-6" />,
    "name": "/marcar",
    "description": "📢 Marca todos os membros do grupo de forma invisível. Responda a uma mensagem para utilizá-lo.",
    "usage": "/marcar",
    "examples": ["/marcar respondendo a uma mensagem sua ou de alguém."],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Search className="w-6 h-6" />,
    "name": "/revelar",
    "description": "👀 Revela uma mídia de visualização única de forma normal.",
    "usage": "/revelar",
    "examples": ["/revelar"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/setnamegp",
    "description": "📛 Define o packname e author de todas as figurinhas enviadas pelo bot no grupo.",
    "usage": "/setnamegp nome1/nome2",
    "examples": ["/setnamegp BotName/AuthorName"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/resetnamegp",
    "description": "♻️ Reseta o packname e author das figurinhas para o padrão do bot.",
    "usage": "/resetnamegp",
    "examples": ["/resetnamegp"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <ArrowLeft className="w-6 h-6" />,
    "name": "/warn",
    "description": "⚠️ Adiciona uma advertência a um usuário. Marque ou responda à mensagem do usuário.",
    "usage": "/warn @usuario",
    "examples": ["/warn @usuario", "Responda a mensagem de @usuario com /warn"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <ArrowLeft className="w-6 h-6" />,
    "name": "/delwarn",
    "description": "✅ Remove uma advertência de um usuário. Marque ou responda à mensagem do usuário.",
    "usage": "/delwarn @usuario",
    "examples": ["/delwarn @usuario", "Responda a mensagem de @usuario com /delwarn"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/warnlimit",
    "description": "📊 Define o limite de advertências no grupo (mínimo 2 e máximo 20).",
    "usage": "/warnlimit quantidade",
    "examples": ["/warnlimit 5"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Search className="w-6 h-6" />,
    "name": "/warns",
    "description": "🔍 Verifica quantas advertências um usuário possui. Marque ou responda à mensagem do usuário.",
    "usage": "/warns @usuario",
    "examples": ["/warns @usuario",  "Responda a mensagem de @usuario com /warns"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/blockcmd",
    "description": "🚫 Bloqueia um comando para todos no grupo (use sem prefixo).",
    "usage": "/blockcmd comando",
    "examples": ["/blockcmd daily"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/unblockcmd",
    "description": "✔️ Desbloqueia um comando previamente bloqueado.",
    "usage": "/unblockcmd comando",
    "examples": ["/unblockcmd daily"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Search className="w-6 h-6" />,
    "name": "/listcmd",
    "description": "📜 Lista todos os comandos bloqueados no grupo.",
    "usage": "/listcmd",
    "examples": ["/listcmd"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <ArrowLeft className="w-6 h-6" />,
    "name": "/block",
    "description": "🔒 Bloqueia um usuário de usar o bot por um tempo determinado (use h para horas ou d para dias).",
    "usage": "/block @usuario tempo",
    "examples": ["/block @usuario 3d"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/unblock",
    "description": "🔓 Desbloqueia um usuário para voltar a usar o bot.",
    "usage": "/unblock @usuario",
    "examples": ["/unblock @usuario"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Search className="w-6 h-6" />,
    "name": "/listblocks",
    "description": "📋 Lista todos os usuários bloqueados no grupo.",
    "usage": "/listblocks",
    "examples": ["/listblocks"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/boton",
    "description": "⚙️ Libera o uso do bot para todos os usuários.",
    "usage": "/boton",
    "examples": ["/boton"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/botoff",
    "description": "🔒 Restringe o uso do bot para apenas administradores.",
    "usage": "/botoff",
    "examples": ["/botoff"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/antilink",
    "description": "🔗 Bloqueia o envio de links no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o antilink.\n1 - Ativa apagando o link e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem do link.\n3 - Ativa apenas apagando a mensagem do link.",
    "usage": "/antilink (número)",
    "examples": ["/antilink 1"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/limitec",
    "description": "✏️ Define o limite de caracteres permitidos em mensagens. Escolha entre as opções abaixo:\n\n0 - Desativa o limite.\n1 - Ativa apagando mensagens que excederem o limite.",
    "usage": "/limitec (limite de caracteres)",
    "examples": ["/limitec 1500"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/antiimagem",
    "description": "🖼️ Bloqueia o envio de imagens no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o antiimagem.\n1 - Ativa apagando a mensagem com imagem e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com imagem.\n3 - Ativa apenas apagando a mensagem com imagem.",
    "usage": "/antiimagem (número)",
    "examples": ["/antiimagem 2"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/antivideo",
    "description": "📹 Bloqueia o envio de vídeos no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o antivideo.\n1 - Ativa apagando a mensagem com vídeo e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com vídeo.\n3 - Ativa apenas apagando a mensagem com vídeo.",
    "usage": "/antivideo (número)",
    "examples": ["/antivideo 1"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/antiaudio",
    "description": "🎵 Bloqueia o envio de áudios no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o antiaudio.\n1 - Ativa apagando a mensagem com áudio e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com áudio.\n3 - Ativa apenas apagando a mensagem com áudio.",
    "usage": "/antiaudio (número)",
    "examples": ["/antiaudio 3"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/antisticker",
    "description": "🖼️ Bloqueia o envio de figurinhas no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o antisticker.\n1 - Ativa apagando a mensagem com figurinha e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com figurinha.\n3 - Ativa apenas apagando a mensagem com figurinha.",
    "usage": "/antisticker (número)",
    "examples": ["/antisticker 2"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/antidoc",
    "description": "📄 Bloqueia o envio de documentos no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o antidoc.\n1 - Ativa apagando a mensagem com documento e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com documento.\n3 - Ativa apenas apagando a mensagem com documento.",
    "usage": "/antidoc (número)",
    "examples": ["/antidoc 3"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/anticontato",
    "description": "📇 Bloqueia o envio de contatos no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o anticontato.\n1 - Ativa apagando a mensagem com contato e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com contato.\n3 - Ativa apenas apagando a mensagem com contato.",
    "usage": "/anticontato (número)",
    "examples": ["/anticontato 1"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/antilocalizacao",
    "description": "📍 Bloqueia o envio de localizações no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o antilocalizacao.\n1 - Ativa apagando a mensagem com localização e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com localização.\n3 - Ativa apenas apagando a mensagem com localização.",
    "usage": "/antilocalizacao (número)",
    "examples": ["/antilocalizacao 2"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/anticatalogo",
    "description": "🛍️ Bloqueia o envio de catálogos no grupo. Escolha entre as opções abaixo:\n\n0 - Desativa o anticatalogo.\n1 - Ativa apagando a mensagem com catálogo e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com catálogo.\n3 - Ativa apenas apagando a mensagem com catálogo.",
    "usage": "/anticatalogo (número)",
    "examples": ["/anticatalogo 3"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/antipalavra",
    "description": "🛑 Bloqueia mensagens que contenham palavras proibidas. Para ativar, é necessário que ao menos uma palavra proibida esteja definida.\n\n0 - Desativa o antipalavra.\n1 - Ativa apagando mensagens com palavras proibidas e removendo quem enviou.\n2 - Ativa dando advertência e apagando a mensagem com palavras proibidas.\n3 - Ativa apenas apagando a mensagem com palavras proibidas.",
    "usage": "/antipalavra (número)",
    "examples": ["/antipalavra 1"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/addpalavra",
    "description": "➕ Adiciona palavras à lista de palavras proibidas. Mensagens contendo essas palavras serão bloqueadas dependendo do modo configurado no comando `/antipalavra`.",
    "usage": "/addpalavra (palavra)",
    "examples": ["/addpalavra spam"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/delpalavra",
    "description": "➖ Remove palavras da lista de palavras proibidas. Mensagens contendo essas palavras não serão mais bloqueadas.",
    "usage": "/delpalavra (palavra)",
    "examples": ["/delpalavra spam"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/listapalavra",
    "description": "📋 Lista todas as palavras proibidas configuradas no grupo.",
    "usage": "/listapalavra",
    "examples": ["/listapalavra"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/autosticker",
    "description": "🎨 Ativa ou desativa o modo de figurinhas automáticas, permitindo que imagens enviadas sejam convertidas em stickers sem comandos.",
    "usage": "/autosticker (1/0)",
    "examples": ["/autosticker 1"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/modobrincadeiras",
    "description": "🎮 Ativa ou desativa o modo de comandos de brincadeiras no grupo.",
    "usage": "/modobrincadeiras (1/0)",
    "examples": ["/modobrincadeiras 1"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/modoeconomia",
    "description": "💰 Ativa ou desativa os comandos de economia no grupo. Necessário que o grupo seja configurado como *Standard* ou *Advanced* para ativar.",
    "usage": "/modoeconomia (1/0)",
    "examples": ["/modoeconomia 1"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
    "icon": <Settings className="w-6 h-6" />,
    "name": "/modo18",
    "description": "🔞 Ativa ou desativa os comandos +18 no grupo. Necessário que o grupo seja configurado como *Advanced* para ativar.",
    "usage": "/modo18 (1/0)",
    "examples": ["/modo18 1"],
    "type": { "name": "Moderação", "color": "bg-blue-600" }
  },
  {
  icon: <Search className="w-6 h-6" />,
  name: '/gpt',
  description: '🤖 Realiza uma busca personalizada no ChatGPT a partir de uma pergunta enviada.',
  usage: '/gpt (pergunta)',
  examples: ['/gpt O que é inteligência artificial?', '/gpt Como funciona a gravidade?'],
  type: { name: 'Funções', color: 'bg-purple-500' },
},
{
  icon: <Send className="w-6 h-6" />,
  name: '/falar',
  description: '🗣️ Usa a voz do Google para falar algo enviado pelo usuário.',
  usage: '/falar (mensagem)',
  examples: ['/falar Olá, como você está?', '/falar Bom dia a todos!'],
  type: { name: 'Funções', color: 'bg-yellow-500' },
},
{
  icon: <Settings className="w-6 h-6" />,
  name: '/dallas',
  description: '🐊 Converse de maneira divertida e descontraída com a IA personalizada do Dallas Bot.',
  usage: '/dallas converse (mensagem)',
  examples: ['/dallas converse Me conte uma piada!', '/dallas converse Você gosta de memes?'],
  type: { name: 'Funções', color: 'bg-green-500' },
},
{
  icon: <Image className="w-6 h-6" />,
  name: '/toaudio',
  description: '🎵 Converte um vídeo em áudio. Use este comando respondendo a um vídeo.',
  usage: '/toaudio (responda a um vídeo)',
  examples: ['/toaudio'],
  type: { name: 'Funções', color: 'bg-blue-500' },
},
{
  icon: <Image className="w-6 h-6" />,
  name: '/gimage',
  description: '📸 Busca uma imagem no Google utilizando uma palavra-chave.',
  usage: '/gimage (palavra-chave)',
  examples: ['/gimage cachorro', '/gimage paisagem bonita'],
  type: { name: 'Funções', color: 'bg-red-500' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/ass',
  description: '🔞 Envia imagens relacionadas ao tema "ass". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/ass',
  examples: ['/ass'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/dick',
  description: '🔞 Envia imagens relacionadas ao tema "dick". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/dick',
  examples: ['/dick'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/pechos',
  description: '🔞 Envia imagens relacionadas ao tema "pechos". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/pechos',
  examples: ['/pechos'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/petos',
  description: '🔞 Envia imagens relacionadas ao tema "petos". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/petos',
  examples: ['/petos'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/porn',
  description: '🔞 Envia imagens relacionadas ao tema "porn". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/porn',
  examples: ['/porn'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/pornvid',
  description: '🔞 Envia vídeos relacionados ao tema "porn". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/pornvid',
  examples: ['/pornvid'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/pornvid2',
  description: '🔞 Envia vídeos adicionais relacionados ao tema "porn". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/pornvid2',
  examples: ['/pornvid2'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/nfbdsm',
  description: '🔞 Envia imagens relacionadas ao tema "BDSM". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/nfbdsm',
  examples: ['/nfbdsm'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/nfrandom',
  description: '🔞 Envia conteúdos aleatórios NSFW. Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/nfrandom',
  examples: ['/nfrandom'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/yuri',
  description: '🔞 Envia imagens relacionadas ao tema "yuri". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/yuri',
  examples: ['/yuri'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/panties',
  description: '🔞 Envia imagens relacionadas ao tema "panties". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/panties',
  examples: ['/panties'],
  type: { name: '+18', color: 'bg-red-600' },
},
{
  icon: <HelpCircle className="w-6 h-6 text-red-600" />,
  name: '/lesbicas',
  description: '🔞 Envia imagens relacionadas ao tema "lésbicas". Requer o uso em grupos **Advanced** ou por usuários **Ultimate**.',
  usage: '/lesbicas',
  examples: ['/lesbicas'],
  type: { name: '+18', color: 'bg-red-600' },
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
             
