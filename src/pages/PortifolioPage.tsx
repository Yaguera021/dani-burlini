import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import BG_IMG from '../assets/images/bg-2.png';
import { BackgroundImage } from '../components/Background';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

const PRELOADER_VIDEO_URL = 'https://res.cloudinary.com/dekqhffqi/video/upload/v1745962086/pj94jfjuyb77c0iw76l8.mp4';

const youtubeVideos = [
  { id: 'aDNr6d-Mg60', title: 'LFTN' },
  { id: 'ok3ByyxLwKY', title: 'JoaoAppolinario' },
  { id: '0XV1JNCWWzo', title: 'Brandi' },
  { id: 'vV2TGVvQF8A', title: 'BrunaGriphao' },
  { id: 'IJ3HKP6b_Mw', title: 'PimentaFightClub' },
  { id: 'NDI2IUog4ck', title: 'Lasaro' },
  { id: 'W-BUfd2dHHw', title: 'brendi' },
  { id: 'LvPLcz91AbI', title: 'brendiRelProd' },
  { id: 'ErRE-ejVeG8', title: 'PV' },
  { id: 'tzElyk6KFWw', title: 'LeoArruda' },
  { id: 'wkweXbYOal0', title: 'pvGeraldo' },
  { id: 'a9YjDjuNF_I', title: 'botPreview' },
  { id: 'Ki9lhhHv5j0', title: 'robozinho' },
  { id: 'uPA5SmTJ00c', title: 'dicas' },
  { id: 'dFEW8kp6Ojs', title: 'Appolinario' },
  { id: 'JtRzx0y0IVQ', title: 'brendiSistema' },
];

let portfolioHasHadInitialLongLoad = false;

export const PortifolioPage: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    const preloaderDuration = !portfolioHasHadInitialLongLoad ? 16000 : 3500;

    const timer = setTimeout(() => {
      setIsPageLoading(false);
      portfolioHasHadInitialLongLoad = true;
    }, preloaderDuration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isPageLoading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPageLoading]);

  return (
    <div
      className='min-h-screen relative'
      style={{
        backgroundColor: COR_FUNDO_PRINCIPAL,
        color: COR_TEXTO_PRINCIPAL,
        fontFamily: FONTE_PRINCIPAL,
      }}
    >
      {/* Overlay de pré-loader */}
      <div
        className={`
          fixed inset-0 z-50 flex items-center justify-center
          transition-opacity duration-700 ease-in-out
          ${isPageLoading ? 'opacity-900' : 'opacity-0 pointer-events-none'}
        `}
      >
        {PRELOADER_VIDEO_URL && (
          <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover'>
            <source src={PRELOADER_VIDEO_URL} type='video/mp4' />
            Carregando portifólio...
          </video>
        )}

        {/* Overlay semitransparente */}
        <div
          className='absolute inset-0 bg-opacity-70'
          style={{
            backgroundColor: COR_FUNDO_PRINCIPAL,
            opacity: 0.7,
          }}
        />

        <CircularProgress size='3rem' className='relative z-10' style={{ color: 'rgb(201 243 29 / 20%)' }} />
      </div>

      {/* Conteúdo da página */}
      <div
        className={`
          pt-24 pb-12 transition-opacity duration-700 ease-in-out
          ${isPageLoading ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className='container mx-auto px-4 text-center'>
          <BackgroundImage src={BG_IMG} opacity={0.25} />

          <h1 className='text-4xl sm:text-5xl font-bold sm:py-10 uppercase tracking-wider' style={{ color: COR_DESTAQUE }}>
            Portifólio
          </h1>

          <div
            className='pt-12 pb-12 grid grid-cols-1 gap-y-8
                          max-w-xs xxs:max-w-xxs xs:max-w-xs sm:max-w-sm
                          mx-auto md:grid-cols-3 md:gap-x-6 md:gap-y-10
                          md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'
          >
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className='rounded-lg overflow-hidden shadow-xl aspect-[9/16]
                           bg-black transition-transform duration-300 hover:scale-105 group'
              >
                <iframe
                  className='w-full h-full'
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
