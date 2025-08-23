import { loadTemplate } from '../utils/templateLoader.js';

export async function renderHome() {
  return await loadTemplate('home');
}