import { COR_FUNDO_PRINCIPAL, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

export const Footer: React.FC = () => (
  <footer style={{ fontFamily: FONTE_PRINCIPAL, backgroundColor: COR_FUNDO_PRINCIPAL, color: '#888' }} className='py-16 text-center border-t border-gray-700'>
    <div className='text-4xl font-black mb-6 uppercase' style={{ color: COR_TEXTO_PRINCIPAL }}>
      Daniel Burlini
    </div>
    <p className='text-sm'>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
  </footer>
);
