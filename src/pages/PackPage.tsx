import React from 'react';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_FUNDO_SECUNDARIO, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

export const PackPage: React.FC = () => {
  const checkoutUrl = 'https://pay.kiwify.com.br/KmHDENb';

  const handlePurchaseClick = () => {
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        backgroundColor: COR_FUNDO_PRINCIPAL,
        color: COR_TEXTO_PRINCIPAL,
        fontFamily: FONTE_PRINCIPAL,
      }}
      className='pt-28 pb-12 min-h-screen'
    >
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl sm:text-5xl font-bold pb-12 uppercase tracking-wider' style={{ color: COR_DESTAQUE }}>
          Ultimate Pack
        </h1>
        <p className='text-lg sm:text-xl mb-12' style={{ color: '#BBB' }}>
          Tenha acesso aos mesmos recursos que me tornaram um editor requisitado no mercado.
        </p>

        <div className='mb-12 rounded-lg overflow-hidden aspect-video max-w-3xl lg:max-w-4xl mx-auto bg-black'>
          <iframe
            className='w-full h-full'
            src='https://www.youtube.com/embed/hn41LOhZqtM?si=m7sWtavrWHfUvsC3'
            title='Demonstração do Ultimate Pack'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>

        <div className='p-8 rounded-lg shadow-xl max-w-md mx-auto' style={{ backgroundColor: COR_FUNDO_SECUNDARIO }}>
          <h3 className='text-xl sm:text-3xl font-semibold mb-4' style={{}}>
            De <span>R$ 99,00</span> por apenas
          </h3>
          <h3 className='text-4xl sm:text-4xl font-bold mb-4' style={{ color: COR_DESTAQUE }}>
            R$ 29,70
          </h3>
          <p className='text-base sm:text-sm mb-6' style={{ color: '#BBB' }}>
            Você vai economizar R$ 69,30
          </p>
          <button
            className='w-full py-3 sm:py-4 px-8 rounded-lg text-lg sm:text-xl font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-md'
            style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
            onClick={handlePurchaseClick}
          >
            Quero Garantir o Pack!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackPage;
