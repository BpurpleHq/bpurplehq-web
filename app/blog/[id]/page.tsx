import { BLOG_POSTS, getPostById, getRelatedPosts } from "@/lib/blog-data";
import BlogPostPage from "@/components/blog/BlogPostPage";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = getPostById(Number(params.id));
  if (!post) return { title: "Post Not Found | Bpurple" };
  return {
    title: `${post.title} | Bpurple Technology`,
    description: post.excerpt,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const post = getPostById(Number(params.id));
  if (!post) notFound();
  const related = getRelatedPosts(post, 3);
  return <BlogPostPage post={post} related={related} />;
}