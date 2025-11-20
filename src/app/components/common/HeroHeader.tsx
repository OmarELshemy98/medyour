type Props = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  dir?: 'rtl' | 'ltr';
};

export default function HeroHeader({ title, subtitle = '', backgroundImage = "/images/background-img.png", dir = 'ltr' }: Props) {
  return (
    // التغيير هنا: من <div> إلى <header>
    <header
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat h-auto pt-20 flex flex-col justify-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      dir={dir}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative pt-20 pb-24 z-10 text-white w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center justify-center gap-4">
        <h1 className={`text-center font-extrabold text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] leading-tight break-words max-w-4xl ${dir === 'rtl' ? 'font-ar-heading' : ''}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-center font-light text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] leading-normal sm:leading-[2.1rem] md:leading-[2.4rem] lg:leading-[2.8rem] w-full max-w-3xl sm:max-w-4xl md:max-w-5xl px-1 overflow-hidden text-ellipsis ${dir === 'rtl' ? 'font-ar-body' : ''}`}>
            {subtitle}
          </p>
        )}
      </div>
    
    </header> // التغيير هنا: إغلاق <header>
  );
}