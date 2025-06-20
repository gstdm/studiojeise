import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Modelos from './pages/Modelos.tsx';
import Agendamento from './pages/Agendamento.tsx';
import Admin from './pages/Admin.tsx';

createRoot(document.getElementById('root')!).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </Router>
);
