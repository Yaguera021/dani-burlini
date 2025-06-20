import BG_IMG from '../assets/images/bg-2.png';
import { BackgroundImage } from '../components/Background';
import { AssetIcon } from '../components/icons/AssetIcon';
import { DownloadIcon } from '../components/icons/DownloadIcon';
import { COR_DESTAQUE, COR_FUNDO_CARD_RECURSO, COR_FUNDO_PRINCIPAL, COR_FUNDO_SECUNDARIO, COR_TEXTO_CARD_RECURSO_DESC, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';
import type { RecursoDataItem } from '../types';

export const RecursosPage: React.FC = () => {
  const recursosData: RecursoDataItem[] = [
    {
      id: 1,
      iconType: 'font',
      title: 'Fontes',
      description: 'Descubra uma seleção de fontes com visual cinematográfico ideais para dar um toque profissional e impactante aos seus vídeos e projetos visuais.',
      downloadUrl: 'https://drive.google.com/drive/folders/10ac24hODdZ1zrGE02uyE7jTCv919E3ul',
    },
    {
      id: 2,
      iconType: 'sound',
      title: 'Sons',
      description: 'Coleção de efeitos sonoros para todas as situações — desde ambientes até efeitos pontuais. Gratuitos e prontos para uso em qualquer tipo de vídeo.',
      downloadUrl: 'https://drive.google.com/drive/folders/1HNRpzCrwbTg1PXDRbsTRjRAuQdqNmfeG',
    },
    {
      id: 3,
      iconType: 'overlay',
      title: 'Overlays',
      description: 'Acesse os overlays mais usados por editores profissionais para criar transições, efeitos de luz, partículas e elementos visuais que elevam a qualidade do seu conteúdo.',
      downloadUrl: 'https://drive.google.com/drive/folders/1On43tbDFqIbOEN1TxD46Mo8swU97UtHu',
    },
    {
      id: 4,
      iconType: 'preset',
      title: 'Presets',
      description: 'Presets prontos para facilitar sua edição no Premiere ou After. Aplique estilos de cor, efeitos e animações com apenas um clique.',
      downloadUrl: 'https://drive.google.com/drive/folders/1Mz2p45i5p_cOLHYK5p-6bozCK4RB-huO',
    },
    {
      id: 5,
      iconType: 'transition',
      title: 'Transições',
      description: 'Pacote com transições dinâmicas, suaves e criativas para deixar seus cortes mais envolventes e com fluidez de cinema.',
      downloadUrl: 'https://drive.google.com/drive/folders/1dL9mmp0CR4SYDgWSngL9TIwRnytgjsTf',
    },
  ];

return (
  <div
    className="pt-20 min-h-screen"
    style={{
      backgroundColor: COR_FUNDO_PRINCIPAL,
      color: COR_TEXTO_PRINCIPAL,
      fontFamily: FONTE_PRINCIPAL
    }}
  >
    <section
      className="relative py-12 sm:py-16 min-h-screen overflow-hidden"
      style={{ backgroundColor: COR_FUNDO_PRINCIPAL }}
    >
      {/* 1º filho: Background cobrindo TUDO */}
      <BackgroundImage src={BG_IMG} opacity={0.25} />

      {/* 2º filho em diante: Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-left">
        <div className="mb-8 sm:mb-0">
          <h2
            className="text-xl font-semibold mb-2 uppercase tracking-wider"
            style={{ color: COR_TEXTO_CARD_RECURSO_DESC }}
          >
            Recursos
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span style={{ color: COR_TEXTO_PRINCIPAL }}>PRESETS</span>
            <span className="block sm:inline" style={{ color: COR_TEXTO_PRINCIPAL }}>
              {' '} & {' '}
            </span>
            <span className="block" style={{ color: COR_DESTAQUE }}>
              ELEMENTOS
            </span>
          </h1>
          <div
            className="mt-4 h-1 w-24 rounded"
            style={{ backgroundColor: COR_DESTAQUE }}
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-12 md:px-0 text-center pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {recursosData.map(recurso => (
            <div
              key={recurso.id}
              className="rounded-xl shadow-xl flex flex-col text-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{
                backgroundColor: COR_FUNDO_CARD_RECURSO,
                border: `1px solid ${COR_FUNDO_SECUNDARIO}`
              }}
            >
              <div
                className="h-32 sm:h-36 mx-8 mt-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'rgba(201,243,29,0.6)' }}
              >
                <AssetIcon type={recurso.iconType} />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: COR_TEXTO_PRINCIPAL }}
                >
                  {recurso.title}
                </h3>
                <p
                  className="text-sm mb-6 flex-grow"
                  style={{
                    color: COR_TEXTO_CARD_RECURSO_DESC,
                    lineHeight: '1.6'
                  }}
                >
                  {recurso.description}
                </p>
                <a
                  href={recurso.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-sm font-medium py-2 px-4 rounded transition-colors duration-200 self-center"
                  style={{
                    color: COR_DESTAQUE,
                    border: `1px solid ${COR_DESTAQUE}`,
                    backgroundColor: 'transparent'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = COR_DESTAQUE;
                    e.currentTarget.style.color = COR_FUNDO_PRINCIPAL;
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = COR_DESTAQUE;
                  }}
                >
                  <DownloadIcon /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
};