import { COR_DESTAQUE, COR_FUNDO_PRINCIPAL, COR_FUNDO_SECUNDARIO, COR_TEXTO_PRINCIPAL, FONTE_PRINCIPAL } from '../constants';

export const ContatoPage: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      nome_completo: form.nome_completo.value,
      telefone: form.telefone.value,
      email: form.email.value,
      mensagem: form.mensagem.value,
    };

    const res = await fetch('https://webhook.brxlabs.com.br/webhook/dani_burlini_leads_site', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Mensagem enviada com sucesso!');
      form.reset();
    } else {
      alert('Erro ao enviar mensagem.');
    }
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
            <label htmlFor='nome_completo' className='block text-sm font-medium text-left mb-1' style={{ color: COR_DESTAQUE }}>
              Nome Completo
            </label>
            <input
              type='text'
              name='nome_completo'
              id='nome_completo'
              className='mt-1 block w-full px-3 py-3 rounded-md shadow-sm focus:ring-opacity-50 text-base'
              style={{ backgroundColor: '#2D2D2D', color: COR_TEXTO_PRINCIPAL, border: `1px solid ${COR_DESTAQUE}40`, outline: 'none' }}
              placeholder='Nome completo'
              required
              maxLength={50}
            />
          </div>
          <div>
            <label htmlFor='telefone' className='block text-sm font-medium text-left mb-1' style={{ color: COR_DESTAQUE }}>
              Telefone
            </label>
            <input
              type='text'
              name='telefone'
              id='telefone'
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
            <label htmlFor='mensagem' className='block text-sm font-medium text-left mb-1' style={{ color: COR_DESTAQUE }}>
              Mensagem
            </label>
            <textarea
              name='mensagem'
              id='mensagem'
              rows={5}
              className='mt-1 block w-full px-3 py-3 rounded-md shadow-sm text-base'
              style={{ backgroundColor: '#2D2D2D', color: COR_TEXTO_PRINCIPAL, border: `1px solid ${COR_DESTAQUE}40`, outline: 'none', resize: 'none' }}
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
