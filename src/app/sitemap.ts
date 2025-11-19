import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.medyour.com'
  const routes = [
    '',
    '/about-us',
    '/services',
    '/challenges',
    '/faqs',
    '/contact',
    '/privacy',
    '/terms',
    '/why-medyour',
  ]

  const locales: ('ar' | 'en')[] = ['ar', 'en']

  const items: MetadataRoute.Sitemap = []

  for (const lang of locales) {
    for (const route of routes) {
      const path = route ? `/${lang}${route}` : `/${lang}`
      items.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    }
  }

  return items
}