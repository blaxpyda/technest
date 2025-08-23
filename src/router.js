import Navigo from 'navigo';
import { renderHome } from './pages/home.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderProfile } from './pages/profile.js';
import { renderAbout } from './pages/about.js';
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
      .on('/dashboard', () => this.renderPage(renderDashboard))
      .on('/profile', () => this.renderPage(renderProfile))
      .on('/about', () => this.renderPage(renderAbout))
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