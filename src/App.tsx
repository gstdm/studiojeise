import { useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-r from-gray-900 to-black text-white' : 'bg-gradient-to-r from-pink-100 to-pink-300 text-gray-900'} transition-all duration-300`}>
      
      {/* Botão de Troca de Tema */}
      <button onClick={toggleTheme} className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-2xl">
        {darkMode ? '🌞' : '🌙'}
      </button>

      {/* Seção Principal */}
      <div className="flex flex-col items-center justify-center p-8 space-y-14">
        
        {/* Título Principal */}
        <motion.h1 
          className="text-6xl font-extrabold text-center leading-tight" 
          initial="hidden" 
          animate="visible" 
          variants={itemVariants} 
          transition={{ duration: 0.5 }}
        >
          ✨ O SEGREDO PARA UM OLHAR MAGNÉTICO! ✨
        </motion.h1>

        {/* Lista de Imagens e Textos */}
        {[
          { text: '🔥 Tenha cílios volumosos e impecáveis 24h por dia, sem precisar de rímel! Chega de maquiagem borrada ou tempo perdido na frente do espelho!', delay: 0.3 },
          { text: '👁️‍🗨️ Seu olhar mais sedutor e expressivo! Alongamento profissional que valoriza a beleza natural dos seus olhos. Realce seu charme agora!', delay: 0.6 },
          { text: '💎 Atendimento VIP e resultado luxuoso! Escolha o estilo ideal para você e conquiste um visual elegante e sofisticado todos os dias!', delay: 0.9 },
          { text: '💖 Feito com técnica segura e fios leves, para cílios incríveis sem incomodar! Conforto absoluto e beleza impecável.', delay: 1.2 },
          { text: '🚀 Agende seu horário hoje e descubra o poder de um olhar irresistível! Você merece esse cuidado especial. Clique agora!', delay: 1.5 }
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="flex flex-col md:flex-row items-center gap-6 w-full max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            {/* Imagem Placeholder */}
            <div className="w-72 h-48 bg-black rounded-lg shadow-lg"></div>
            
            {/* Texto */}
            <p className="text-3xl font-extrabold leading-snug text-center md:text-left">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
