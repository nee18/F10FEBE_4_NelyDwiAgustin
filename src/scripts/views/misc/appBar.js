class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <nav class="site-navbar">
        <button class="nav-toggler" aria-label="menu open">
          <span></span>
        </button>
          <a href="#" class="site-logo">Sushi Bon</a>
            <ul class="close">
              <li><a href="/">Home</a></li>
              <li><a href="#content">Explore</a></li>
              <li><a href="#/favorite">Favorite</a></li>
              <li><a href="https://github.com/nee18" target="_blank" rel="noreferrer">About Us</a></li>
            </ul>
        </nav>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
