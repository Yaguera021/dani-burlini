export const ytEmbed = (url: string) => {
  // aceita tanto /embed/ID quanto youtu.be/ID / watch?v=ID
  const id =
    url.includes('/embed/')
      ? url.split('/embed/')[1].split(/[?&]/)[0]
      : url.includes('youtu.be/')
        ? url.split('youtu.be/')[1].split(/[?&]/)[0]
        : url.includes('watch?v=')
          ? url.split('watch?v=')[1].split(/[?&]/)[0]
          : url;

  const params = new URLSearchParams({
    rel: '0', // reduz recomendados (YouTube ainda pode mostrar algo do canal)
    modestbranding: '1',
    iv_load_policy: '3',
    enablejsapi: '1', // necessário pra pausar via postMessage
    playsinline: '1',
  });

  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
};
