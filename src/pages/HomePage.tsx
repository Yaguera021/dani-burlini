import { useNavigate } from 'react-router-dom';
import PERFIL_IMG from '../assets/images/PerfilImg2.png';
import BG_IMG from '../assets/images/bg-2.png';
import { BackgroundImage } from '../components/Background';
import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_FUNDO_SECUNDARIO, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const buttons = [
    { label: 'Ultimate Pack', to: '/pack' },
    { label: 'Lives', to: '/lives' },
    { label: 'Portfólio', to: '/portfolio' },
    { label: 'Mentoria', to: '/mentorias' },
  ];

  return (
    <div
      className='font-sans'
      style={{
        fontFamily: FONTE_PRINCIPAL,
        backgroundColor: COR_FUNDO_PRINCIPAL,
        color: COR_TEXTO_PRINCIPAL,
      }}
    >
      <section className='relative h-screen flex flex-col items-center justify-end text-center px-4'>
        <video autoPlay loop muted playsInline className='absolute inset-0 w-full h-full object-cover'>
          <source src='https://res.cloudinary.com/dekqhffqi/video/upload/v1745962086/pj94jfjuyb77c0iw76l8.mp4' type='video/mp4' />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        <div className='relative pb-8 sm:pb-16 md:pb-20 z-10 grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-5 lg:grid-cols-4 lg:gap-x-5'>
          {buttons.map(({ label, to }) => (
            <button
              key={label}
              onClick={() => navigate(to)}
              className='py-3 px-3 rounded-lg text-sm sm:px-5 sm:text-base font-extrabold uppercase cursor-pointer tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
              style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className='relative py-16 sm:py-24 overflow-hidden' style={{ backgroundColor: COR_FUNDO_SECUNDARIO }}>
        <BackgroundImage src={BG_IMG} opacity={0.25} />

        <div className='absolute inset-0 z-0 flex justify-center items-center pointer-events-none'>
          <div className='w-[600px] h-[600px] rounded-md bg-[#C9F31D] opacity-8 blur-[100px]' />
        </div>

        <div className='relative z-10 container mx-auto px-6 text-justify lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-12'>
          <div className='relative md:w-2/5 w-full max-w-md flex-shrink-0'>
            <div className='absolute inset-0 scale-105 filter blur-lg'>
              <img src={PERFIL_IMG} alt='' className='w-[90%] h-full object-cover rounded-xl' />
            </div>
            <img src={PERFIL_IMG} alt='Daniel Burlini' loading='lazy' className='relative w-[90%] h-full object-cover rounded-xl shadow-xl' />
          </div>

          <div className='max-w-[600px] text-center md:text-left'>
            <h2 className='text-xl uppercase font-semibold tracking-wider mb-2' style={{ color: COR_DESTAQUE }}>
              Sobre mim
            </h2>
            <h3 className='text-3xl md:py-4 sm:text-4xl font-bold' style={{ color: COR_TEXTO_PRINCIPAL }}>
              Olá, tudo bem?
            </h3>
            <div className='space-y-4 md:py-6 text-base sm:text-xl font-semibold leading-relaxed text-gray-300'>
              <p>Meu nome é Daniel Burlini de Saules. Sou natural do Rio de Janeiro, mas atualmente moro no Cassino, no Rio Grande do Sul.</p>
              <p>
                Comecei a atuar profissionalmente como editor de vídeos em 2023 e, desde então, já trabalhei em diversos projetos com diferentes clientes. Atualmente, me especializo na edição de
                vídeos curtos e verticais voltados para redes sociais.
              </p>
              <p>Se você tem interesse em trabalhar comigo, é só clicar no botão abaixo e solicitar um orçamento. Será um prazer te atender!</p>
            </div>
            <div className='mt-8 text-center md:text-left'>
              <button
                onClick={() => window.open('https://api.whatsapp.com/send?phone=555381003500&text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+suas+mentorias.', '_blank')}
                className='py-3 px-10 rounded-lg text-lg font-extrabold uppercase cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md'
                style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
