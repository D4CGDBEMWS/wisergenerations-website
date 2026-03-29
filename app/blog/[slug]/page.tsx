import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { Button } from '@/components/ui/Button'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return { title: post.title, description: post.summary }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  // Simple markdown → HTML (no MDX needed for basic posts)
  const html = post.content
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-navy mt-8 mb-4">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-navy mt-8 mb-3">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-navy mt-6 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-gold hover:underline">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-gray-600">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal text-gray-600">$2</li>')
    .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/blog" className="text-gold text-sm hover:underline mb-6 inline-block">← Back to Blog</Link>
      <div className="mb-4">
        <span className="bg-light-gold text-gold text-xs font-medium px-2 py-0.5 rounded-full mr-2">{post.category}</span>
        <span className="text-gray-400 text-xs">{post.readTime} · {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <h1 className="text-4xl font-bold text-navy mb-6">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-8">By Crystal Stewart, The Project Management Evangelist™</p>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: `<p class="text-gray-700 leading-relaxed mb-4">${html}</p>` }}
      />
      <div className="mt-12 bg-light-gold border border-gold/30 rounded-xl p-6">
        <p className="text-navy font-bold mb-2">Ready to Start Your Life Project?</p>
        <p className="text-gray-600 text-sm mb-4">Join the next cohort of the Life Is a Project™ program.</p>
        <Button href="/pricing">View Pricing & Enroll</Button>
      </div>
    </div>
  )
}
