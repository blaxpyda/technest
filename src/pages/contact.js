import { loadTemplate } from '../utils/templateLoader.js';

export async function renderContact() {
  return await loadTemplate('contact');
}