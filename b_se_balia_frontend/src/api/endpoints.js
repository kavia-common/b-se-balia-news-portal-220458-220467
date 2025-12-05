import { getApi } from './client';

const api = getApi();

/**
 * PUBLIC_INTERFACE
 * fetchFeaturedArticles retrieves featured content for the homepage.
 */
export async function fetchFeaturedArticles() {
  const res = await api.get('/articles/featured');
  return res.data;
}

/**
 * PUBLIC_INTERFACE
 * fetchTrendingArticles retrieves trending stories.
 */
export async function fetchTrendingArticles() {
  const res = await api.get('/articles/trending');
  return res.data;
}

/**
 * PUBLIC_INTERFACE
 * fetchCategories retrieves list of categories.
 */
export async function fetchCategories() {
  const res = await api.get('/categories');
  return res.data;
}

/**
 * PUBLIC_INTERFACE
 * fetchArticles optionally by category.
 */
export async function fetchArticles(params = {}) {
  const res = await api.get('/articles', { params });
  return res.data;
}

/**
 * PUBLIC_INTERFACE
 * fetchArticleBySlug retrieves a single article by slug.
 */
export async function fetchArticleBySlug(slug) {
  const res = await api.get(`/articles/${slug}`);
  return res.data;
}
