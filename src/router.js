import Navigo from 'navigo';
import { renderHome } from './pages/home.js';
import { renderServices } from './pages/services.js';
import { renderAbout } from './pages/about.js';
import { renderBlog } from './pages/blog.js';
import { renderContact } from './pages/contact.js';
import { renderNavigation, setupNavigation, updateActiveLink } from './components/navigation.js';

class Router {
  constructor() {
    this.router = new Navigo('/');
    this.contentElement = null;
  }

  init() {
    // Set up routes
    this.router
      .on('/', () => this.renderPage(renderHome))
      .on('/services', () => this.renderPage(renderServices))
      .on('/about', () => this.renderPage(renderAbout))
      .on('/blog', () => this.renderPage(renderBlog))
      .on('/contact', () => this.renderPage(renderContact))
      .on('/quote', () => this.renderPage(renderContact))
      .notFound(() => this.renderPage(() => `
        <div class="page">
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="/" data-navigo>Go back home</a>
        </div>
      `));

    // Start the router
    this.router.resolve();
  }

  async renderPage(pageRenderer) {
    if (!this.contentElement) {
      this.contentElement = document.querySelector('#content');
    }

    // Add page transition effect
    this.contentElement.style.opacity = '0';
    
    setTimeout(async () => {
      this.contentElement.innerHTML = await pageRenderer();
      this.contentElement.style.opacity = '1';
      updateActiveLink();
      
      // Scroll to top on page change
      window.scrollTo(0, 0);
    }, 150);
  }

  async setupApp() {
    const app = document.querySelector('#app');
    app.innerHTML = `
      ${await renderNavigation()}
      <main id="content" class="main-content">
        <!-- Page content will be rendered here -->
      </main>
    `;
    
    setupNavigation();
  }
}

export default Router;