import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { features, docs } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/features', '/docs', '/download', '/changelog', '/about', '/security', '/privacy', '/terms', '/faq', ...features.map(f => `/features/${f.slug}`), ...docs.map(d => `/docs/${d.slug}`)];
  return paths.map(p => ({ url: SITE + p, lastModified: new Date() }));
}
