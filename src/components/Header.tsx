import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';
import type { NavItem } from '../types';
import { CloseIcon } from './icons/CloseIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
  navItems: NavItem[];
}

interface IndicatorStyle {
  left?: number;
  width?: number;
  opacity?: number;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, navItems }) => {
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({ opacity: 0, left: 0, width: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navDesktopRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      if (window.innerWidth >= 768 && navDesktopRef.current) {
        if (currentPage === 'Contato') {
          setIndicatorStyle({ opacity: 0, width: 0, left: 0 });
        } else {
          const activeItemButton = navDesktopRef.current.querySelector(`button[data-page="${currentPage}"]`) as HTMLElement | null;
          const textSpan = activeItemButton?.querySelector('.nav-item-text') as HTMLElement | null;

          if (activeItemButton && textSpan) {
            const leftPosition = activeItemButton.offsetLeft + textSpan.offsetLeft;
            const widthValue = textSpan.offsetWidth;

            setIndicatorStyle({
              left: leftPosition,
              width: widthValue,
              opacity: 1,
            });
          } else {
            setIndicatorStyle({ opacity: 0, width: 0, left: 0 });
          }
        }
      } else {
        setIndicatorStyle({ opacity: 0, width: 0, left: 0 });
      }
    };

    const timerId = setTimeout(updateIndicator, 100);
    window.addEventListener('resize', updateIndicator);

    return () => {
      clearTimeout(timerId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [currentPage, navItems]);

  const handleMobileLinkClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header style={{ fontFamily: FONTE_PRINCIPAL, backgroundColor: COR_FUNDO_PRINCIPAL, color: COR_TEXTO_PRINCIPAL }} className='fixed top-0 left-0 right-0 z-50 shadow-md'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20'>
        <div className='text-3xl font-bold cursor-pointer flex-shrink-0' onClick={() => handleMobileLinkClick('Home')} style={{ color: COR_TEXTO_PRINCIPAL }}>
          <span className='font-light'>daniel</span>burlini
        </div>

        <nav ref={navDesktopRef} className='hidden md:flex flex-grow justify-center relative items-center space-x-3 lg:space-x-5'>
          {navItems.map((item) => (
            <button
              key={item.page}
              data-page={item.page}
              onClick={() => setCurrentPage(item.page)}
              className={`py-2 px-2 lg:px-3 text-sm font-medium transition-colors duration-300 cursor-pointer hover:text-[${COR_DESTAQUE}] focus:outline-none whitespace-nowrap relative`}
              style={{ color: currentPage === item.page ? COR_DESTAQUE : COR_TEXTO_PRINCIPAL }}
            >
              <span className='nav-item-text text-[16px]'>{item.label}</span>
            </button>
          ))}
          <div
            className='absolute bottom-0 h-1 transition-all duration-300'
            style={{
              left: `${indicatorStyle.left || 0}px`,
              width: `${indicatorStyle.width || 0}px`,
              opacity: indicatorStyle.opacity,
              backgroundColor: COR_DESTAQUE,
              bottom: '-2px',
            }}
          />
        </nav>

        <button
          onClick={() => handleMobileLinkClick('Contato')}
          className='hidden md:block py-2 px-5 rounded-md cursor-pointer text-sm font-semibold transition-colors duration-300 flex-shrink-0'
          style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
        >
          CONTATO
        </button>

        <div className='md:hidden'>
          <HamburgerIcon onClick={() => setIsMobileMenuOpen(true)} />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 z-[60] flex flex-col items-center justify-center space-y-4 md:hidden transition-opacity duration-300 ease-in-out' // Aumentado z-index
          style={{ backgroundColor: COR_FUNDO_PRINCIPAL, fontFamily: FONTE_PRINCIPAL, opacity: 1 }}
        >
          <CloseIcon onClick={() => setIsMobileMenuOpen(false)} />
          {navItems.map((item) => (
            <button
              key={`mobile-${item.page}`}
              onClick={() => handleMobileLinkClick(item.page)}
              className={`py-3 px-6 text-2xl font-medium transition-colors duration-300 hover:text-[${COR_DESTAQUE}] focus:outline-none`}
              style={{ color: currentPage === item.page ? COR_DESTAQUE : COR_TEXTO_PRINCIPAL }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleMobileLinkClick('Contato')}
            className='py-3 px-8 rounded-md text-xl font-semibold transition-colors duration-300 mt-8'
            style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
          >
            CONTATO
          </button>
        </div>
      )}
    </header>
  );
};
