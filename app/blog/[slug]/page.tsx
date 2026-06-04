import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import BlogPostPage from "@/components/blog/BlogPostPage";
import { notFound } from "next/navigation";

// Generate static params with slug (title in URL)
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Generate Metadata with proper title
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return { title: "Post Not Found | Bpurple" };
  }

  return {
    title: `${post.title} | Bpurple Technology`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);

  return <BlogPostPage post={post} related={related} />;
}
