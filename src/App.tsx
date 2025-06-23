import { Routes, Route, Navigate } from 'react-router-dom';
import { COR_FUNDO_PRINCIPAL } from './constants';
import { HomePage } from './pages/HomePage';
import { RecursosPage } from './pages/RecursosPage';
import { LivesPage } from './pages/LivesPage';
import { PackPage } from './pages/PackPage';
import { MentoriasPage } from './pages/MentoriasPage';
import { ContatoPage } from './pages/ContatoPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsappButton } from './components/WhatsappButton';

export default function App() {
  return (
    <div style={{ backgroundColor: COR_FUNDO_PRINCIPAL }} className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/recursos' element={<RecursosPage />} />
          <Route path='/lives' element={<LivesPage />} />
          <Route path='/pack' element={<PackPage />} />
          <Route path='/mentorias' element={<MentoriasPage />} />
          <Route path='/contato' element={<ContatoPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
