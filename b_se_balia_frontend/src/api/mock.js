const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const categories = [
  { slug: 'local', name: 'Local' },
  { slug: 'politics', name: 'Politics' },
  { slug: 'sports', name: 'Sports' },
  { slug: 'entertainment', name: 'Entertainment' },
  { slug: 'tech', name: 'Tech' }
];

const articles = [
  {
    slug: 'baliya-bazaar-festival-2025',
    title: 'Baliya Bazaar Festival 2025 kicks off with vibrant colors',
    excerpt: 'The annual festival brings together local artisans, food, and music.',
    category: 'local',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop',
    date: '2025-12-01',
    author: 'Team B se Balia',
    content: 'The vibrant Baliya Bazaar Festival welcomed thousands of visitors today ...',
    tags: ['festival', 'culture', 'local']
  },
  {
    slug: 'tech-innovation-hub-in-balia',
    title: 'Tech innovation hub announced in Balia',
    excerpt: 'A new hub promises jobs and growth for the region’s youth.',
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    date: '2025-11-28',
    author: 'Editor Desk',
    content: 'In a major push for innovation, the local administration revealed plans ...',
    tags: ['tech', 'startup', 'youth']
  },
  {
    slug: 'local-derby-thriller',
    title: 'Local derby ends in a thrilling draw',
    excerpt: 'Fans were treated to a nail-biting finish under the lights.',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
    date: '2025-11-25',
    author: 'Sports Desk',
    content: 'The derby between rivals ended with shared points after a last-minute ...',
    tags: ['sports', 'football']
  }
];

const trending = [
  articles[1],
  articles[2],
  articles[0]
];

const featured = [
  articles[0],
  articles[1]
];

/**
 * PUBLIC_INTERFACE
 * getMockApi returns an axios-like client with get() method and .data responses.
 */
export function getMockApi() {
  return {
    async get(url, opts = {}) {
      await wait(300);
      if (url.startsWith('/articles/featured')) {
        return { data: featured };
      }
      if (url.startsWith('/articles/trending')) {
        return { data: trending };
      }
      if (url.startsWith('/articles/')) {
        const slug = url.split('/').pop();
        const art = articles.find(a => a.slug === slug);
        if (!art) throw { message: 'Not found', status: 404, url };
        return { data: art };
      }
      if (url.startsWith('/articles')) {
        const byCat = opts?.params?.category;
        const list = byCat ? articles.filter(a => a.category === byCat) : articles;
        return { data: list };
      }
      if (url.startsWith('/categories')) {
        return { data: categories };
      }
      return { data: {} };
    }
  };
}

export const __mockData = { categories, articles, trending, featured };
