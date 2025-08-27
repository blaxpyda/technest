import { loadTemplate } from '../utils/templateLoader.js';

export async function renderBlog() {
  return await loadTemplate('blog');
}