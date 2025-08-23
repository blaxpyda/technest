import { loadTemplate } from '../utils/templateLoader.js';

export async function renderDashboard() {
  return await loadTemplate('dashboard');
}