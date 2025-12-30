import React from 'react';
import BG_IMG from '../assets/images/bg-2.png';
import { BackgroundImage } from '../components/Background';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_FUNDO_SECUNDARIO, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

export const PackPage: React.FC = () => {
  const checkoutUrl = 'https://pay.kiwify.com.br/KmHDENb';

  const handlePurchaseClick = () => {
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className='relative min-h-screen flex flex-col justify-center pt-22 pb-16 z-10'
      style={{
        backgroundColor: COR_FUNDO_PRINCIPAL,
        color: COR_TEXTO_PRINCIPAL,
        fontFamily: FONTE_PRINCIPAL,
      }}
    >
      <BackgroundImage src={BG_IMG} opacity={0.25} />

      <div className='relative z-10 container mx-auto px-4 text-center flex flex-col gap-12 items-center'>
        <div className='max-w-3xl md:py-12'>
          <h1 className='text-4xl sm:text-5xl font-bold uppercase tracking-wide mb-4' style={{ color: COR_DESTAQUE }}>
            Ultimate Pack
          </h1>
          <p className='text-lg sm:text-xl text-gray-300'>Um pack de edição com todos os elementos que você precisa em um só lugar para editar vídeos de qualidade de qualquer estilo.  
</p>
        </div>

        <div className='w-full max-w-3xl rounded-lg overflow-hidden aspect-video bg-black'>
          <iframe
            className='w-full h-full'
            src='https://www.youtube.com/embed/SqiJ7ThNRTc'
            title='Demonstração do Ultimate Pack'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            loading='lazy'
          ></iframe>
        </div>

        <div className='w-full max-w-md p-8 rounded-lg shadow-xl' style={{ backgroundColor: COR_FUNDO_SECUNDARIO }}>
          <h3 className='text-xl sm:text-3xl font-semibold mb-2'>
            De <span className='line-through text-gray-400'>R$ 99,00<br></br></span> por apenas
          </h3>
          <h3 className='text-4xl font-bold mb-2' style={{ color: COR_DESTAQUE }}>
            R$ 29,70
          </h3>
          <p className='text-sm text-gray-400 mb-6'>Você vai economizar R$ 69,30</p>
          <button
            className='w-full py-3 sm:py-4 px-8 cursor-pointer rounded-lg text-lg sm:text-xl font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-md'
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
