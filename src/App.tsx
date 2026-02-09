import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WhatsappButton } from './components/WhatsappButton';
import { COR_FUNDO_PRINCIPAL } from './constants';
import { ContatoPage } from './pages/ContatoPage';
import { HomePage } from './pages/HomePage';
import { LivesPage } from './pages/LivesPage';
import { MentoriasPage } from './pages/MentoriasPage';
import { PackPage } from './pages/PackPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { RecursosPage } from './pages/RecursosPage';

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
          <Route path='/editor-ultimate' element={<PackPage />} />
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
