import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL } from '../../constants';
import type { RecursoDataItem } from '../../types';

interface AssetIconProps {
  type: RecursoDataItem['iconType'];
}

export const AssetIcon: React.FC<AssetIconProps> = ({ type }) => {
  const iconMap: Record<RecursoDataItem['iconType'], string> = {
    font: 'Aa',
    sound: '♫',
    overlay: '❖',
    preset: '✧',
    transition: '⇄',
  };

  const icon = iconMap[type] || '?';

  return (
    <div
      className='w-20 h-20 rounded-md flex items-center justify-center'
      style={{
        backgroundColor: COR_DESTAQUE,
        boxShadow: 'inset 0 1px 1px rgba(207, 231, 255, 0.2)',
      }}
    >
      <div
        className='w-14 h-14 rounded-md flex items-center justify-center'
        style={{
          backgroundColor: COR_FUNDO_PRINCIPAL,
          boxShadow: 'inset 0 1px 1px rgba(207, 231, 255, 0.2)',
        }}
      >
        <span
          style={{
            color: 'rgba(213, 219, 230, 0.9)',
            fontSize: '1.875rem', // text-3xl
            fontWeight: type === 'font' ? 'bold' : 'normal',
          }}
        >
          {icon}
        </span>
      </div>
    </div>
  );
};
