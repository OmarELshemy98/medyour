// Root page redirects to Arabic version
// This is handled by middleware or by creating a proper redirect

export default function Home() {
  // For static export, we can't use redirect() in a page component
  // Instead, we'll create a simple HTML redirect page
  return (
    <html lang="ar">
      <head>
        <meta httpEquiv="refresh" content="0; url=/ar" />
        <script dangerouslySetInnerHTML={{ __html: 'window.location.href = "/ar";' }} />
      </head>
      <body>
        <p>Redirecting to <a href="/ar">Arabic version</a>...</p>
      </body>
    </html>
  );
}

export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export const dynamic = 'force-static';
