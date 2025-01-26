import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Comandos from './pages/Comandos.tsx';
import './index.css';
import ComprarPlanos from './pages/PlansGr.tsx';
import ComprarPlanosPv from './pages/PlanosPv.tsx';
import TermosGp from './pages/TermosGp.tsx'; // Importe a página de termos

createRoot(document.getElementById('root')!).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/comandos" element={<Comandos />} />
        <Route path="/planos" element={<ComprarPlanos />} />
        <Route path="/planospv" element={<ComprarPlanosPv />} />
        <Route path="/planos/termos" element={<TermosGp />} />
      </Routes>
    </Router>
);
