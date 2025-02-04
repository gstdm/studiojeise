import React from 'react';
import { useLocation } from 'react-router-dom';

function Modelos({ isDarkMode }: { isDarkMode: boolean }) {
  const location = useLocation();

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-700 text-white' : 'bg-gradient-to-b from-pink-100 to-pink-300 text-gray-800'}`}>
      
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold relative inline-block px-6 py-2 border-4 rounded-lg border-pink-400">
          Modelos de Extensão de Cílios
        </h1>
        <p className="text-lg mt-4">Escolha o modelo perfeito para realçar sua beleza!</p>
      </div>

      {/* Lista de Modelos */}
      <div className="py-12 max-w-7xl mx-auto space-y-10 px-6 sm:px-8">
        
        {/* Modelo 1 */}
        <div className="flex items-center gap-6">
          <img src="https://i.ibb.co/5hHjyXSV/Screenshot-20250203-185948.jpg" alt="Modelo 1" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
          <div>
            <h2 className="text-2xl font-bold">Modelo 1</h2>
            <p className="text-lg">Para quem gosta de um olhar minimalista e elegante.</p>
            <p className="text-xl font-semibold mt-2">R$99,99</p>
          </div>
        </div>
        <hr className="border-t border-gray-400 opacity-30 my-4" />

        {/* Modelo 2 */}
        <div className="flex items-center gap-6 flex-row-reverse">
          <img src="https://i.ibb.co/twFL5p5W/Screenshot-20250203-190009.jpg" alt="Modelo 2" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
          <div>
            <h2 className="text-2xl font-bold">Modelo 2</h2>
            <p className="text-lg">Extensão volumosa para um olhar marcante.</p>
            <p className="text-xl font-semibold mt-2">R$99,99</p>
          </div>
        </div>
        <hr className="border-t border-gray-400 opacity-30 my-4" />

        {/* Modelo 3 */}
        <div className="flex items-center gap-6">
          <img src="https://i.ibb.co/Mx3jXXGr/Screenshot-20250203-202443.jpg" alt="Modelo 3" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
          <div>
            <h2 className="text-2xl font-bold">Modelo 3</h2>
            <p className="text-lg">Cílios longos e delicados para um efeito natural.</p>
            <p className="text-xl font-semibold mt-2">R$99,99</p>
          </div>
        </div>
        <hr className="border-t border-gray-400 opacity-30 my-4" />

        {/* Modelo 4 */}
        <div className="flex items-center gap-6 flex-row-reverse">
          <img src="https://i.ibb.co/mrdV0dRr/Screenshot-20250203-185955.jpg" alt="Modelo 4" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
          <div>
            <h2 className="text-2xl font-bold">Modelo 4</h2>
            <p className="text-lg">Volume russo para um efeito poderoso.</p>
            <p className="text-xl font-semibold mt-2">R$99,99</p>
          </div>
        </div>
        <hr className="border-t border-gray-400 opacity-30 my-4" />

        {/* Modelo 5 */}
        <div className="flex items-center gap-6">
          <img src="https://i.ibb.co/5hHjyXSV/Screenshot-20250203-185948.jpg" alt="Modelo 5" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
          <div>
            <h2 className="text-2xl font-bold">Modelo 5</h2>
            <p className="text-lg">Mix de fios clássicos e volumosos.</p>
            <p className="text-xl font-semibold mt-2">R$99,99</p>
          </div>
        </div>
      </div>

      {/* Separação para Serviços Adicionais */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Serviços Adicionais</h2>
        <div className="max-w-7xl mx-auto space-y-10 px-6 sm:px-8">

          {/* Conserto de Sobrancelha */}
          <div className="flex items-center gap-6">
            <img src="https://i.ibb.co/5hHjyXSV/Screenshot-20250203-185948.jpg" alt="Conserto de Sobrancelha" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
            <div>
              <h2 className="text-2xl font-bold">Conserto de Sobrancelha</h2>
              <p className="text-lg">Corrija falhas e realce sua expressão.</p>
              <p className="text-xl font-semibold mt-2">R$15,00</p>
            </div>
          </div>
          <hr className="border-t border-gray-400 opacity-30 my-4" />

          {/* Remoção de Extensão */}
          <div className="flex items-center gap-6 flex-row-reverse">
            <img src="https://i.ibb.co/twFL5p5W/Screenshot-20250203-190009.jpg" alt="Remoção de Extensão" className="w-32 h-32 rounded-full shadow-md border-2 border-pink-400" />
            <div>
              <h2 className="text-2xl font-bold">Remoção de Extensão</h2>
              <p className="text-lg">Remova sua extensão com segurança e conforto.</p>
              <p className="text-xl font-semibold mt-2">R$30,00</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Botão Pré e Pós Agendamento */}
      <div className="py-8 flex justify-center">
        <a href="/#" className={`px-8 py-3 rounded-lg text-xl font-medium transition duration-300 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-black text-white hover:bg-gray-800'}`}>
          Leia o Pré e o Pós Agendamento
        </a>
      </div>
    </div>
  );
}

export default Modelos;
