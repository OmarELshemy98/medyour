import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className="antialiased">
        
        {children}

        {/* 2. أضف هذا السطر قبل إغلاق الـ body مباشرة */}

      </body>
    </html>
  );
}