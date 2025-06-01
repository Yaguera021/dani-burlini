import { COR_TEXTO_PRINCIPAL } from '../../constants';

export const HamburgerIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={onClick} className='p-2 focus:outline-none md:hidden' aria-label='Abrir menu'>
    <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill={COR_TEXTO_PRINCIPAL} viewBox='0 0 16 16'>
      <path
        fillRule='evenodd'
        d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
      />
    </svg>
  </button>
);
