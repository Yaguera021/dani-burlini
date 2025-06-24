import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import BG_IMG from '../assets/images/bg-2.png';
import { BackgroundImage } from '../components/Background';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

const PRELOADER_VIDEO_URL = 'https://res.cloudinary.com/dekqhffqi/video/upload/v1745962086/pj94jfjuyb77c0iw76l8.mp4';
const INITIAL_PRELOADER_DURATION = 3500;

// Persist flag across component mounts within the same session
let hasVisitedPortfolio = false;

export const PortfolioPage: React.FC = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalVideos = youtubeVideos.length;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!hasVisitedPortfolio) {
      // Hide loader when all iframes are loaded or after timeout
      if (loadedCount >= totalVideos) {
        setIsPageLoading(false);
        hasVisitedPortfolio = true;
      } else {
        timer = setTimeout(() => {
          setIsPageLoading(false);
          hasVisitedPortfolio = true;
        }, INITIAL_PRELOADER_DURATION);
      }
    } else {
      setIsPageLoading(false);
    }

    return () => clearTimeout(timer);
  }, [loadedCount]);

  useEffect(() => {
    document.body.style.overflow = isPageLoading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPageLoading]);

  const handleIframeLoad = () => setLoadedCount((prev) => prev + 1);

  return (
    <div
      className="min-h-screen relative"
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
          ${isPageLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        {PRELOADER_VIDEO_URL && isPageLoading && (
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={PRELOADER_VIDEO_URL} type="video/mp4" />
            Carregando portfólio...
          </video>
        )}

        {isPageLoading && (
          <div
            className="absolute inset-0 bg-opacity-70"
            style={{ backgroundColor: COR_FUNDO_PRINCIPAL, opacity: 0.7 }}
          />
        )}

        {isPageLoading && (
          <CircularProgress size="3rem" className="relative z-10" style={{ color: 'rgb(201 243 29 / 20%)' }} />
        )}
      </div>

      {/* Conteúdo da página */}
      <div
        className={`
          pt-24 pb-12 transition-opacity duration-700 ease-in-out
          ${isPageLoading ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className="container mx-auto px-4 text-center">
          <BackgroundImage src={BG_IMG} opacity={0.25} />

          <h1
            className="text-4xl sm:text-5xl font-bold sm:py-10 uppercase tracking-wider"
            style={{ color: COR_DESTAQUE }}
          >
            Portfólio
          </h1>

          <div
            className="pt-12 pb-12 grid grid-cols-1 gap-y-8
                          max-w-xs xxs:max-w-xxs xs:max-w-xs sm:max-w-sm
                          mx-auto md:grid-cols-3 md:gap-x-6 md:gap-y-10
                          md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
          >
            {youtubeVideos.map((video) => (
              <div key={video.id} className="rounded-lg overflow-hidden shadow-xl aspect-[9/16] bg-black transition-transform duration-300 hover:scale-105 group">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  onLoad={handleIframeLoad}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
