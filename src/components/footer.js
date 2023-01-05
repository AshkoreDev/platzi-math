class footerBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section class="footer__container">
          <article class="footer__info">
            <a title="Linkedin" href="https://www.linkedin.com/in/AshkoreDev/" target="_blank" rel="noopener">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="Linkedin icon"/>
            </a>
            <a title="GitHub" href="https://github.com/AshkoreDev" target="_blank" rel="noopener">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub icon"/>
            </a>
            <a title="Twitter" href="https://twitter.com/AshkoreDev" target="_blank" rel="noopener">
              <img src="https://img.icons8.com/ios-glyphs/50/000000/twitter--v1.png" alt="Twitter icon"/>
            </a>
          </article>
          <p class="footer__info">Aracely Alba @AshkoreDev | &copy; 2022</p>
        </section>
      ${this.getStyle()}
    `;
    return template;
  }

  getStyle() {
    return `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .footer__container {
        padding: 10px 0;
        color: #000000;
        text-align: center;
        background-color: var(--secondary-color);
      }

      .footer__info {
        width: 320px;
        margin: 10px auto;
        letter-spacing: 1.5px;
      }

      .footer__info img {
        width: 20px;
        height: 20px;
      }

      a {
        margin: 0 15px;
        padding-bottom: 5px;
        text-decoration: none;
        border-bottom: 1px solid transparent;
      }

      @media (hover: hover)  {
        a:hover {
          border-color: #000000;
        }
      }

      @media screen and (min-width: 768px) {
        .footer__info {
          width: 400px;
        }
      }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('footer-bar', footerBar);

export { footerBar };