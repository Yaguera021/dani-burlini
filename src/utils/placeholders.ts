export const placeholderImg = (width: number, height: number, text: string, bgColor: string = '333', textColor: string = 'FFF'): string =>
  `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}&font=montserrat`;

export const placeholderVideo = (width: number, height: number, text: string): string => placeholderImg(width, height, `Vídeo: ${text}`, '222', 'EEE');
