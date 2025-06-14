export const BackgroundImage = ({ src, opacity = 0.2 }: { src: string; opacity?: number }) => (
  <div className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none' style={{ backgroundImage: `url(${src})`, opacity }} />
);
