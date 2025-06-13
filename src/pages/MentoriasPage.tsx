import React, { useState } from 'react';
const COR_DESTAQUE = '#C9F31D';
const COR_FUNDO_PRINCIPAL = '#0D0D0D';
const COR_TEXTO_PRINCIPAL = '#FFFFFF';
const COR_FUNDO_SECUNDARIO = '#1A1A1A';
const FONTE_PRINCIPAL = '../constants';

type ListItemProps = {
  children: React.ReactNode;
};

const ListItem = ({ children }: ListItemProps) => (
  <li className='flex items-start sm:items-center'>
    <svg className='w-5 h-5 mr-3 mt-1 sm:mt-0 flex-shrink-0' style={{ color: COR_DESTAQUE }} fill='currentColor' viewBox='0 0 20 20'>
      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
    </svg>
    <span className='flex-1'>{children}</span>
  </li>
);

export const MentoriasPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: COR_FUNDO_PRINCIPAL, color: COR_TEXTO_PRINCIPAL, fontFamily: FONTE_PRINCIPAL }} className='pt-32 pb-20 min-h-screen'>
      <div className='container mx-auto px-4 text-center max-w-4xl'>
        <h1 className='text-4xl sm:text-6xl font-bold uppercase tracking-wider' style={{ color: COR_DESTAQUE }}>
          Eleve sua Edição
        </h1>
        <p className='mt-4 text-lg sm:text-xl max-w-2xl mx-auto' style={{ color: '#BBBBBB' }}>
          Transforme sua edição e conquiste seu espaço no mercado.
        </p>

        <div className='grid md:grid-cols-2 gap-10 md:gap-16 mt-16 text-left'>
          <div>
            <h2 className='text-2xl font-bold mb-4' style={{ color: COR_TEXTO_PRINCIPAL }}>
              Para quem é a mentoria?
            </h2>
            <ul className='space-y-4' style={{ color: '#DDDDDD' }}>
              <ListItem>Editores que querem evoluir dos cortes básicos para edições profissionais e valorizadas.</ListItem>
              <ListItem>Freelancers que buscam se destacar no mercado e aumentar seus ganhos.</ListItem>
              <ListItem>Criadores de conteúdo que desejam dar um salto na qualidade dos seus vídeos curtos.</ListItem>
            </ul>
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-4' style={{ color: COR_TEXTO_PRINCIPAL }}>
              O que você vai dominar:
            </h2>
            <ul className='space-y-4' style={{ color: '#DDDDDD' }}>
              <ListItem>Efeitos visuais, tipografia animada e transições criativas no Premiere e After.</ListItem>
              <ListItem>Ritmo, cortes estratégicos e uso de áudio para maximizar retenção.</ListItem>
              <ListItem>Processos, organização de projeto e entregas eficientes para clientes exigentes.</ListItem>
            </ul>
          </div>
        </div>

        <div className='mt-20 py-12 px-6 rounded-lg' style={{ backgroundColor: COR_FUNDO_SECUNDARIO }}>
          <h2 className='text-3xl font-bold uppercase' style={{ color: COR_TEXTO_PRINCIPAL }}>
            Seja o primeiro a saber
          </h2>
          <p className='mt-3 mb-8 max-w-xl mx-auto' style={{ color: '#BBBBBB' }}>
            Deixe seu e-mail na lista de espera para ser notificado sobre as vagas e receber acesso a condições especiais de lançamento.
          </p>

          {isSubmitted ? (
            <div className='text-center transition-opacity duration-500 ease-in'>
              <h3 className='text-xl font-bold' style={{ color: COR_DESTAQUE }}>
                Obrigado!
              </h3>
              <p style={{ color: '#DDDDDD' }}>Seu e-mail foi adicionado à lista. Avisaremos você em breve!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Digite seu e-mail'
                required
                className='flex-grow p-3 rounded-md bg-[#28282B] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-opacity-50'
              />
              <button
                type='submit'
                className='py-3 px-6 rounded-md text-md font-semibold transition-transform duration-300 hover:scale-105 active:scale-100'
                style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
              >
                ENTRAR NA LISTA
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
