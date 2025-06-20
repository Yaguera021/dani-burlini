import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_FUNDO_SECUNDARIO, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

export const ContatoPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Mensagem enviada!');
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div style={{ backgroundColor: COR_FUNDO_PRINCIPAL, color: COR_TEXTO_PRINCIPAL, fontFamily: FONTE_PRINCIPAL }} className='pt-28 pb-16 min-h-screen flex items-center justify-center'>
      <div className='container mx-auto px-4 max-w-lg w-full'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl sm:text-4xl font-bold uppercase tracking-wider' style={{ color: COR_DESTAQUE }}>
            Entre em Contato
          </h1>
          <p className='text-lg sm:text-xl mt-4' style={{ color: '#BBB' }}>
            Tem alguma dúvida, sugestão ou projeto em mente? Adoraria ouvir de você!
          </p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-6 p-8 rounded-lg shadow-xl' style={{ backgroundColor: COR_FUNDO_SECUNDARIO }}>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-left mb-1' style={{ color: COR_DESTAQUE }}>
              Nome Completo
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='mt-1 block w-full px-3 py-3 rounded-md shadow-sm focus:ring-opacity-50 text-base'
              style={{ backgroundColor: '#2D2D2D', color: COR_TEXTO_PRINCIPAL, border: `1px solid ${COR_DESTAQUE}40`, outline: 'none' }}
              placeholder='Nome completo'
              required
              maxLength={50}
            />
          </div>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-left mb-1' style={{ color: COR_DESTAQUE }}>
              Telefone
            </label>
            <input
              type='text'
              name='number'
              id='number'
              className='mt-1 block w-full px-3 py-3 rounded-md shadow-sm focus:ring-opacity-50 text-base'
              style={{ backgroundColor: '#2D2D2D', color: COR_TEXTO_PRINCIPAL, border: `1px solid ${COR_DESTAQUE}40`, outline: 'none' }}
              placeholder='Telefone'
              required
              maxLength={15}
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-left mb-1' style={{ color: COR_DESTAQUE }}>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='mt-1 block w-full px-3 py-3 rounded-md shadow-sm text-base'
              style={{ backgroundColor: '#2D2D2D', color: COR_TEXTO_PRINCIPAL, border: `1px solid ${COR_DESTAQUE}40`, outline: 'none' }}
              placeholder='Email'
              required
              maxLength={50}
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-left mb-1' style={{ color: COR_DESTAQUE }}>
              Mensagem
            </label>
            <textarea
              name='message'
              id='message'
              rows={5}
              className='mt-1 block w-full px-3 py-3 rounded-md shadow-sm text-base'
              style={{ backgroundColor: '#2D2D2D', color: COR_TEXTO_PRINCIPAL, border: `1px solid ${COR_DESTAQUE}40`, outline: 'none' }}
              placeholder='Sua mensagem...'
              required
              maxLength={600}
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='w-full py-3 px-6 rounded-lg text-lg font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-md'
              style={{ backgroundColor: COR_DESTAQUE, color: COR_FUNDO_PRINCIPAL }}
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
