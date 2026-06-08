import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bpurplehq.org';

  // Static pages
  const staticPages = [
    '',
    '/productsservice/solutions',
    '/contact',
    '/about',
    '/blog',
    '/academy',
    
  ];

  let blogPosts: { slug: string; lastModified: Date }[] = [];

  // Dynamically import blog data and handle different possible export names
  try {
    const blogData = await import('@/lib/blog-data');

    // Try different common export names
    const posts = blogData;

    if (Array.isArray(posts)) {
      blogPosts = posts.map((post: any) => ({
        slug: post.slug || post.id,
        lastModified: post.updatedAt 
          ? new Date(post.updatedAt) 
          : post.createdAt 
          ? new Date(post.createdAt) 
          : new Date(),
      }));
    }
  } catch (error) {
    console.warn('Could not load blog posts for sitemap:', error);
  }

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      
    },
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page}`,
      
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      
    })),
  ];

  return sitemapEntries;
}