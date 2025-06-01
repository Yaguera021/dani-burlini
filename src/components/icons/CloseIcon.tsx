import { COR_TEXTO_PRINCIPAL } from '../../constants';

export const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={onClick} className='p-2 focus:outline-none absolute top-6 right-6 z-50' aria-label='Fechar menu'>
    {' '}
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill={COR_TEXTO_PRINCIPAL} viewBox='0 0 16 16'>
      {' '}
      <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
    </svg>
  </button>
);
