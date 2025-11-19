import { ReactNode } from 'react';
import Script from 'next/script';
import '../globals.css';

type Props = {
  children: ReactNode;
  params: { lang: 'ar' | 'en' };
};

export default function LangLayout({ children, params }: Props) {
  const { lang } = params;
  const isRtl = lang === 'ar';

  return (
    <html lang={lang} dir={isRtl ? 'rtl' : 'ltr'}>
      <body className="antialiased">
        {children}
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export const dynamic = 'force-static';

