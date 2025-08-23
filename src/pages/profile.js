import { loadTemplate } from '../utils/templateLoader.js';

export async function renderProfile() {
  return await loadTemplate('profile');
}