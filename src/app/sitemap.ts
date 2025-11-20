import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.medyour.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/ar',
    '/en',
    '/ar/about-us',
    '/en/about-us',
    '/ar/services',
    '/en/services',
    '/ar/challenges',
    '/en/challenges',
    '/ar/why-medyour',
    '/en/why-medyour',
    '/ar/faqs',
    '/en/faqs',
    '/ar/privacy',
    '/en/privacy',
    '/ar/contact',
    '/en/contact',
    '/ar/terms',
    '/en/terms',
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changefreq: 'weekly',
    priority: path === '/ar' || path === '/en' ? 1.0 : path === '' ? 1.0 : 0.8,
  }));
}