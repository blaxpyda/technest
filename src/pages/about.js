import { loadTemplate } from '../utils/templateLoader.js';

export async function renderAbout() {
  return await loadTemplate('about');
}