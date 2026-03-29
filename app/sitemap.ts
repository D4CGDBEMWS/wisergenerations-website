import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wisergenerations.com'
  const staticRoutes = ['', '/about', '/program', '/pricing', '/capm', '/blog', '/community', '/contact', '/enroll']
    .map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: path === '' ? 1 : 0.8 }))

  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    blogRoutes = getAllPosts().map(post => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {}

  return [...staticRoutes, ...blogRoutes]
}
