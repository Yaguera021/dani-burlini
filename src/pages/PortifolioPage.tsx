import { useEffect, useState } from 'react';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

const PRELOADER_VIDEO_URL = 'https://res.cloudinary.com/dekqhffqi/video/upload/v1745962086/pj94jfjuyb77c0iw76l8.mp4';

const youtubeVideos = [
  { id: 'ErRE-ejVeG8', title: 'PV' },
  { id: 'tzElyk6KFWw', title: 'LeoArruda' },
  { id: 'wkweXbYOal0', title: 'pvGeraldo' },
  { id: 'vV2TGVvQF8A', title: 'BrunaGriphao' },
  { id: 'NDI2IUog4ck', title: 'Lasaro' },
  { id: 'a9YjDjuNF_I', title: 'botPreview' },
  { id: 'Ki9lhhHv5j0', title: 'robozinho' },
  { id: 'uPA5SmTJ00c', title: 'dicas' },
  { id: 'dFEW8kp6Ojs', title: 'Appolinario' },
  { id: 'JtRzx0y0IVQ', title: 'brendiSistema' },
  { id: 'W-BUfd2dHHw', title: 'brendi' },
  { id: '4P2h9GGcMIU', title: 'OqueAprendiComBjj' },
];

let portfolioHasHadInitialLongLoad = false;

export const PortifolioPage: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    let preloaderDuration: number;

    if (!portfolioHasHadInitialLongLoad) {
      preloaderDuration = 16000;
    } else {
      preloaderDuration = 3500;
    }

    const timer = setTimeout(() => {
      setIsPageLoading(false);
      if (!portfolioHasHadInitialLongLoad) {
        portfolioHasHadInitialLongLoad = true;
      }
    }, preloaderDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: COR_FUNDO_PRINCIPAL,
        color: COR_TEXTO_PRINCIPAL,
        fontFamily: FONTE_PRINCIPAL,
      }}
      className='min-h-screen relative'
    >
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ease-in-out ${isPageLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: COR_FUNDO_PRINCIPAL }}
      >
        {PRELOADER_VIDEO_URL ? (
          <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover' key={PRELOADER_VIDEO_URL}>
            <source src={PRELOADER_VIDEO_URL} type='video/mp4' />
            Carregando portfólio...
          </video>
        ) : (
          <div className='text-xl'>Carregando...</div>
        )}
      </div>

      <div className={`pt-24 pb-16 transition-opacity duration-700 ease-in-out ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 uppercase tracking-wider' style={{ color: COR_DESTAQUE }}>
            Portfólio
          </h1>
          <div className='grid grid-cols-1 gap-y-8 max-w-xs xxs:max-w-xxs xs:max-w-xs sm:max-w-sm mx-auto md:grid-cols-3 md:gap-x-6 md:gap-y-10 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'>
            {youtubeVideos.map((video) => (
              <div key={video.id} className='rounded-lg overflow-hidden shadow-xl aspect-[9/16] bg-black transition-transform duration-300 hover:scale-105 group'>
                <iframe
                  className='w-full h-full'
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                  loading='lazy'
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
