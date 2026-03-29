import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  summary: string
  readTime: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  return files
    .map((file) => {
      const slug = file.replace('.md', '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        summary: data.summary,
        readTime: data.readTime,
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    summary: data.summary,
    readTime: data.readTime,
    content,
  }
}
