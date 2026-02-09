import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';
import { CloseIcon } from './icons/CloseIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: '/', label: 'HOME' },
  { to: '/editor-ultimate', label: 'EDITOR ULTIMATE' },
  { to: '/portfolio', label: 'PORTFÓLIO' },
  { to: '/recursos', label: 'RECURSOS' },
  { to: '/lives', label: 'LIVES' },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      if (window.innerWidth >= 768 && navRef.current) {
        const activeBtn = navRef.current.querySelector(`button[data-to="${location.pathname}"]`) as HTMLElement | null;
        if (activeBtn) {
          const span = activeBtn.querySelector('.nav-item-text') as HTMLElement;
          const leftPos = activeBtn.offsetLeft + span.offsetLeft;
          const widthVal = span.offsetWidth;
          setIndicatorStyle({ left: leftPos, width: widthVal, opacity: 1 });
        } else {
          setIndicatorStyle({ left: 0, width: 0, opacity: 0 });
        }
      } else {
        setIndicatorStyle({ left: 0, width: 0, opacity: 0 });
      }
    };

    const timeout = setTimeout(updateIndicator, 100);
    window.addEventListener('resize', updateIndicator);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header style={{ fontFamily: FONTE_PRINCIPAL, backgroundColor: COR_FUNDO_PRINCIPAL, color: COR_TEXTO_PRINCIPAL }} className='fixed top-0 left-0 right-0 z-50 shadow-md'>
      <div className='container mx-auto px-4 flex items-center justify-between h-20'>
        <div className='text-3xl tracking-[-0.06em] font-bold cursor-pointer' onClick={() => navigate('/')} style={{ color: COR_TEXTO_PRINCIPAL }}>
          <span className='font-light'>daniel</span>burlini
        </div>

        <nav ref={navRef} className='hidden md:flex flex-grow justify-center items-center space-x-5 relative'>
          {navItems.map((item) => (
            <button
              key={item.to}
              data-to={item.to}
              onClick={() => navigate(item.to)}
              className='py-2 px-3 font-bold transition-colors duration-300 relative cursor-pointer focus:outline-none'
              style={{ color: location.pathname === item.to ? COR_DESTAQUE : COR_TEXTO_PRINCIPAL }}
            >
              <span className='nav-item-text text-[16px]'>{item.label}</span>
            </button>
          ))}
          <div
            className='absolute bottom-0 h-1 transition-all duration-300'
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
              backgroundColor: COR_DESTAQUE,
              bottom: '-2px',
            }}
          />
        </nav>

        <button
          onClick={() => navigate('/contato')}
          className='hidden md:block py-2 px-5 rounded-md font-extrabold uppercase transition-all cursor-pointer duration-300  hover:scale-105 text-sm sm:text-base transform  hover:shadow-lg'
          style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
        >
          CONTATO
        </button>

        <div className='md:hidden'>
          <HamburgerIcon onClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-50 flex flex-col items-center justify-center space-y-4 md:hidden' style={{ backgroundColor: COR_FUNDO_PRINCIPAL, fontFamily: FONTE_PRINCIPAL }}>
          <CloseIcon onClick={() => setIsMobileMenuOpen(false)} />
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => {
                navigate(item.to);
                setIsMobileMenuOpen(false);
              }}
              className='py-3 px-6 text-2xl font-medium'
              style={{ color: location.pathname === item.to ? COR_DESTAQUE : COR_TEXTO_PRINCIPAL }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              navigate('/contato');
              setIsMobileMenuOpen(false);
            }}
            className='py-3 px-8 rounded-md text-xl font-semibold'
            style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
          >
            CONTATO
          </button>
        </div>
      )}
    </header>
  );
};
