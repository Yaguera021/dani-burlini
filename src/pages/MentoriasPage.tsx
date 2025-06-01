import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

export const MentoriasPage: React.FC = () => (
  <div style={{ backgroundColor: COR_FUNDO_PRINCIPAL, color: COR_TEXTO_PRINCIPAL, fontFamily: FONTE_PRINCIPAL }} className='pt-28 pb-16 text-center min-h-screen'>
    <div className='container mx-auto px-4'>
      <h1 className='text-4xl sm:text-5xl font-bold uppercase tracking-wider' style={{ color: COR_DESTAQUE }}>
        Mentorias
      </h1>
      <p className='mt-8 text-lg sm:text-xl' style={{ color: '#BBB' }}>
        Detalhes sobre as mentorias estarão disponíveis em breve. Aguarde!
      </p>
    </div>
  </div>
);
