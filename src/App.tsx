import { useState } from 'react';
import type { NavItem } from './types';
import { COR_FUNDO_PRINCIPAL } from './constants';
import { HomePage } from './pages/HomePage';
import { RecursosPage } from './pages/RecursosPage';
import { LivesPage } from './pages/LivesPage';
import { PackPage } from './pages/PackPage';
import { MentoriasPage } from './pages/MentoriasPage';
import { ContatoPage } from './pages/ContatoPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsappButton } from './components/WhatsappButton';
import { PortfolioPage } from './pages/PortfolioPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('Home');

  const navItems: NavItem[] = [
    { page: 'Home', label: 'Home' },
    { page: 'Portfólio', label: 'Portfólio' },
    { page: 'Recursos', label: 'Recursos' },
    { page: 'Lives', label: 'Lives' },
    { page: 'Pack', label: 'Pack' },
  ];

  const renderPage = () => {
    window.scrollTo(0, 0);
    switch (currentPage) {
      case 'Home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'Portfólio':
        return <PortfolioPage />;
      case 'Recursos':
        return <RecursosPage />;
      case 'Lives':
        return <LivesPage />;
      case 'Pack':
        return <PackPage />;
      case 'Mentorias':
        return <MentoriasPage />;
      case 'Contato':
        return <ContatoPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div style={{ backgroundColor: COR_FUNDO_PRINCIPAL }} className='min-h-screen flex flex-col'>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} navItems={navItems} />
      <main className='flex-grow'>{renderPage()}</main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
