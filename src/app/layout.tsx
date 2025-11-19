import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout is only used for pages outside [lang]
  // All actual pages are now in [lang] directory
  return (
    <html lang="ar">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Medyour | Digital Healthcare Platform',
  description: 'Medyour is a leading digital healthcare platform',
};