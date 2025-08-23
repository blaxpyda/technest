// Template cache to avoid loading the same template multiple times
const templateCache = new Map();

/**
 * Loads an HTML template from the templates directory
 * @param {string} templateName - Name of the template file (without .html extension)
 * @returns {Promise<string>} - The HTML content of the template
 */
export async function loadTemplate(templateName) {
  // Check if template is already cached
  if (templateCache.has(templateName)) {
    return templateCache.get(templateName);
  }

  try {
    const response = await fetch(`/src/templates/${templateName}.html`);
    if (!response.ok) {
      throw new Error(`Failed to load template: ${templateName}`);
    }
    
    const html = await response.text();
    
    // Cache the template for future use
    templateCache.set(templateName, html);
    
    return html;
  } catch (error) {
    console.error(`Error loading template ${templateName}:`, error);
    return `<div class="page"><h1>Error</h1><p>Failed to load page content.</p></div>`;
  }
}

/**
 * Clears the template cache (useful for development)
 */
export function clearTemplateCache() {
  templateCache.clear();
}