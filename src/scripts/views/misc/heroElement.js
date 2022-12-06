class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="heroinner">
          <h1 class="herotitle">Sushi Bon</h1>
          <p class="herosubtitle">The best restaurants international in Indonesia</p>
          <p class="herosubtitle">インドネシアの国際的な最高のレストラン</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
