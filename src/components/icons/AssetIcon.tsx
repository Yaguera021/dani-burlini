import { COR_FUNDO_PRINCIPAL } from '../../constants';
import type { RecursoDataItem } from '../../types';

interface AssetIconProps {
  type: RecursoDataItem['iconType'];
}

export const AssetIcon: React.FC<AssetIconProps> = ({ type }) => {
  const style: React.CSSProperties = { color: COR_FUNDO_PRINCIPAL, fontSize: '1.875rem' /* text-3xl */ };
  switch (type) {
    case 'font':
      return <span style={{ ...style, fontWeight: 'bold' }}>Aa</span>;
    case 'sound':
      return <span style={style}>♫</span>;
    case 'overlay':
      return <span style={style}>❖</span>;
    case 'preset':
      return <span style={style}>✧</span>;
    case 'transition':
      return <span style={style}>⇄</span>;
    default:
      return <span style={style}>?</span>;
  }
};
