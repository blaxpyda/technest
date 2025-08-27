import { loadTemplate } from '../utils/templateLoader.js';

export async function renderServices() {
  return await loadTemplate('services');
}