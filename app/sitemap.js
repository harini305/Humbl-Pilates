import { site } from '@/lib/content';

export default function sitemap() {
  return ['/', '/classes/', '/pricing/', '/about/'].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
