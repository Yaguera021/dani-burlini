import React from 'react';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_FUNDO_SECUNDARIO, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

const COR_LIVE_PULSANTE = '#FF0000';

interface LiveVideo {
  id: string;
  title: string;
  date: string;
  embedUrl: string;
}

const livesData: LiveVideo[] = [
  {
    id: 'oB-n_R3G1_Q',
    title: 'LIVE #01 - Editando vídeo AO VIVO - After Effects',
    date: '18 de Abril de 2025',
    embedUrl: 'https://www.youtube.com/embed/mxlPPsiBuEI?si=o4fc-PDdxC910O9T',
  },
  {
    id: '7_c0wgUjYtU',
    title: 'LIVE #02 - Como eu Edito Vídeo no Premiere PRO ',
    date: '31 de Março de 2025',
    embedUrl: 'https://www.youtube.com/embed/g-nU_OY-0mk?si=LAgLj1CEUH480RtH',
  },
  {
    id: 'wDjeBNv6ipg',
    title: 'LIVE #03 - Segredos da Edição de Destaque ',
    date: '15 de Março de 2025',
    embedUrl: 'https://www.youtube.com/embed/MS_4LYZHSY8?si=Uo4b3o4cBmihvTUn',
  },
  {
    id: 'zW-AIXAn3uE',
    title: 'LIVE #04 - Workshop Completo: Edição ',
    date: '28 de Fevereiro de 2025',
    embedUrl: 'https://www.youtube.com/embed/Iyw5fgX0IIo?si=q-UN4K8nXbrK29nn',
  },
  {
    id: 'PuaoOSZHyM8',
    title: 'LIVE #05 - Perguntas e Respostas: Edição ',
    date: '10 de Fevereiro de 2025',
    embedUrl: 'https://www.youtube.com/embed/JXfdBj00zuM?si=N0vp-voNb9ZssV4G',
  },
  {
    id: 'nIBX5zR1I5A',
    title: 'LIVE #06 - Sessão Especial: Criatividade ',
    date: '25 de Janeiro de 2025',
    embedUrl: 'https://www.youtube.com/embed/4TEKn-ei_qc?si=OeBXFHnfIu08ecKS',
  },
];

export const LivesPage: React.FC = () => (
  <div
    style={{
      backgroundColor: COR_FUNDO_PRINCIPAL,
      color: COR_TEXTO_PRINCIPAL,
      fontFamily: FONTE_PRINCIPAL,
    }}
    className='pt-24 sm:pt-28 pb-16 min-h-screen'
  >
    <div className='container mx-auto px-4'>
      <div className='text-center'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-3 uppercase tracking-wider flex items-center justify-center' style={{ color: COR_DESTAQUE }}>
          Nossas Lives
          <span className='ml-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-pulse' style={{ backgroundColor: COR_LIVE_PULSANTE, boxShadow: `0 0 12px ${COR_LIVE_PULSANTE}` }} aria-hidden='true'></span>
        </h1>
        <p className='text-lg sm:text-xl mb-12 sm:mb-16' style={{ color: '#BBB' }}>
          Confira as gravações e as próximas transmissões.
        </p>
      </div>
      <div className='pt-12 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {livesData.map((live) => (
          <div
            key={live.id}
            className='block rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 group focus-within:ring-2 focus-within:ring-opacity-75'
            style={{ backgroundColor: COR_FUNDO_SECUNDARIO || '#2D3748', borderColor: COR_DESTAQUE }}
          >
            <div className='aspect-video w-full bg-black'>
              <iframe
                className='w-full h-full'
                src={live.embedUrl}
                title={`Live: ${live.title}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                referrerPolicy='strict-origin-when-cross-origin'
                loading='lazy'
              ></iframe>
            </div>
            <div className='p-5 text-left'>
              <h3 className='text-lg xl:text-xl font-semibold mb-1.5 leading-tight' style={{ color: COR_TEXTO_PRINCIPAL }}>
                {live.title}
              </h3>
              <p className='text-sm' style={{ color: '#A0AEC0' }}>
                {live.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LivesPage;
