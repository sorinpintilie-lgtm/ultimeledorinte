import { getAllPosts, getAllCategories, getAllTags } from '@/lib/posts'
import { BlogClient } from '@/components/blogclient'

export const metadata = {
  title: 'Blog | Ultimele dorințe ale unui văduv tânăr',
  description: 'Explorează articolele despre viață, călătorii și reflecții.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()

  return (
    <BlogClient 
      initialPosts={posts} 
      categories={categories} 
      tags={tags} 
    />
  )
}
