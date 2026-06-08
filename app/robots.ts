// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog',
          '/blog/*',       
          // '/productservice/solutions',
         
        ],
        disallow: [
          '/admin',
          '/dashboard',
          '/api/',
          '/private/',
          '/_next/',
        ],
      },
      
      {
        userAgent: 'PerplexityBot',
        allow: ['/blog', '/blog/*'],
      },
      {
        userAgent: 'Perplexity-User',
        allow: ['/blog', '/blog/*'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/blog', '/blog/*'],
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: ['/blog', '/blog/*'],
      },
      {
        userAgent: 'OAI-SearchBot',        // OpenAI Search (ChatGPT Search)
        allow: ['/blog', '/blog/*'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/blog', '/blog/*'],
      },

      // === Training Bots (You can choose to block if you want) ===
      {
        userAgent: 'GPTBot',
        allow: ['/blog', '/blog/*'],    
      },
      {
        userAgent: 'Google-Extended',     
        allow: ['/blog', '/blog/*'],
      },

      // Additional useful ones
      {
        userAgent: 'anthropic-ai',
        allow: ['/blog', '/blog/*'],
      },
      {
        userAgent: 'Cohere-ai',
        allow: ['/blog', '/blog/*'],
      },
    ],
    sitemap: 'https://bpurplehq.org/sitemap.xml',
  };
}