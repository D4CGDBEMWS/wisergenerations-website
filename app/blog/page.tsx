import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Wiser Generations',
  description: 'Insights on project management for life, the CAPM pathway, and the Life Is a Project™ framework from Crystal Stewart.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">Blog</p>
      <h1 className="text-4xl font-bold text-navy mb-4">Insights & Resources</h1>
      <p className="text-gray-600 text-lg mb-12">
        PM methodology for life. The CAPM pathway. Crystal's founder perspective.
      </p>
      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group border border-gray-200 rounded-xl overflow-hidden hover:border-gold hover:shadow-md transition-all">
              <div className="bg-light-navy h-40 flex items-center justify-center">
                <span className="text-4xl">📖</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-light-gold text-gold text-xs font-medium px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-navy text-base leading-snug mb-2 group-hover:text-gold transition-colors">{post.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.summary}</p>
                <p className="text-gold text-sm font-medium mt-3">Read more →</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
