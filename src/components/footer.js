import { loadTemplate } from '../utils/templateLoader.js';

export async function renderFooter() {
  return await loadTemplate('footer');
}

export function setupFooter() {
  // Add any footer-specific JavaScript functionality here
  // For example, newsletter signup, scroll-to-top button, etc.
  
  // Handle footer links with data-navigo for internal navigation
  const footerNavLinks = document.querySelectorAll('footer [data-navigo]');
  footerNavLinks.forEach(link => {
    // These will be handled by the router automatically
    // No additional setup needed for basic navigation
  });
}