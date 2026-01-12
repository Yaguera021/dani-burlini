import React, { useEffect, useState } from 'react';
import { COR_DESTAQUE, COR_WPP_BUTTON } from '../constants';

export const WhatsappButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phone = '555381003500';
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre suas mentorias.');

  return (
    <div
      className={`
        fixed bottom-12 md:bottom-22 right-6 md:right-16 z-50
        transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <a href={`https://wa.me/${phone}?text=${message}`} target='_blank' rel='noopener noreferrer' aria-label='Fale com Daniel no WhatsApp'>
        <div
          className='
            relative
            transform transition-transform duration-200 ease-out
            hover:scale-105
          '
        >
          <div className='absolute inset-0 rounded-full animate-pulse-custom' style={{ backgroundColor: COR_DESTAQUE, opacity: 0.7 }} />
          <div className='w-14 h-14 pb-1  rounded-full flex items-center justify-center shadow-md' style={{ backgroundColor: COR_DESTAQUE }}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='1 1 28.9 29.9' fill={COR_WPP_BUTTON} className='w-10 h-10'>
              <path d='M16.003 2.933c-7.271 0-13.167 5.896-13.167 13.167 0 2.321.607 4.589 1.758 6.582L2.8 29.2l6.691-1.741a13.09 13.09 0 0 0 6.512 1.67h.001c7.272 0 13.168-5.896 13.168-13.167 0-3.517-1.369-6.827-3.855-9.313-2.485-2.485-5.795-3.856-9.313-3.856zm0 2.4a10.744 10.744 0 0 1 7.622 3.163 10.743 10.743 0 0 1 3.162 7.622c0 5.939-4.831 10.766-10.768 10.766a10.653 10.653 0 0 1-5.397-1.47l-.386-.227-3.978 1.034 1.063-3.922-.252-.403a10.695 10.695 0 0 1-1.61-5.779c0-5.937 4.83-10.765 10.766-10.765zm-5.152 5.825a1.018 1.018 0 0 0-.752.356 3.08 3.08 0 0 0-.781 2.129c0 1.429.653 2.826 1.808 4.17.443.52 1.097 1.146 1.933 1.792 2.061 1.583 3.72 1.9 4.94 1.9.837 0 1.42-.242 1.818-.519a1.023 1.023 0 0 0 .401-.668c.034-.24.054-.583-.08-.914-.13-.318-.807-.516-1.693-.905-.459-.197-1.1-.483-1.273-.539-.173-.056-.38-.084-.593.16s-.68.784-.833.944c-.15.16-.296.18-.543.064-.245-.114-1.033-.38-1.97-1.211-.728-.648-1.223-1.45-1.367-1.695s-.015-.4.099-.532c.11-.126.243-.28.367-.422.126-.144.217-.249.313-.4.097-.15.028-.314-.019-.448-.048-.134-.42-1.012-.574-1.393-.153-.382-.31-.382-.426-.389z' />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};
