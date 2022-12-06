class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <picture>
          <source type="image/jpeg" media="(max-width: 550px)" srcset="./images/heros/hero-image_3-small.jpg">
          <source type="image/jpeg" media="(min-width: 551px)" srcset="./images/heros/hero-image_3-large.jpg">
          <img src="./images/heros/hero-image_3-large.jpg" alt="">
        </picture>
        <div class="heroinner">
          <div class="heroContent">
            <h1 class="herotitle">Sushi Bon</h1>
            <p class="herosubtitle">The best restaurants international in Indonesia</p>
            <p class="herosubtitle">インドネシアの国際的な最高のレストラン</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
