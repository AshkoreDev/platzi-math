class navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['index', 'geometry', 'discounts', 'salaries', 'statistics'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if(attr === 'index' && oldVal !== newVal) {
      this.index = newVal
    }
    if(attr === 'geometry' && oldVal !== newVal) {
      this.geometry = newVal
    }
    if(attr === 'discounts' && oldVal !== newVal) {
      this.discounts = newVal
    }
    if(attr === 'salaries' && oldVal !== newVal) {
      this.salaries = newVal
    }
    if(attr === 'statistics' && oldVal !== newVal) {
      this.statistics = newVal
    }
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <nav>
        <a href="${this.index}">
          <img src="https://img.icons8.com/fluency/48/000000/healthy-food-calories-calculator.png" alt="Logo de símbolos matemáticos" width="50px" height="50px">
        </a>

        <ul>
          <li class="li__border">
            <a href="${this.geometry}" class="a__border">Geometría</a>
          </li>
          <li class="li__border">
            <a href="${this.discounts}" class="a__border">Descuentos</a>
          </li>
          <li class="li__border">
            <a href="${this.salaries}" class="a__border">Salarios</a>
          </li>
          <li>
            <a href="${this.statistics}" class="a__border">Estadistica</a>
          </li>
        </ul>
      </nav>
      ${this.getStyle()}
    `;
    return template;
  }

  getStyle() {
    return `
    <style>

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      nav {
        min-height: 60px;
        padding: 5px 0px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 20px;
        box-shadow: var(--box-shadow);
      }

      img  {
        width: 60px;
        height: 60px;
      }

      ul {
        width: 320px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: center;
      }

      li{
        padding: 0px 10px;
        list-style: none;
      }

      .li__border {
        border-right: 1px solid white;
      }

      .a__border {
        padding-bottom: 5px;
        text-decoration: none;
        font-family: var(--font-title);
        font-size: 1.2rem;
        letter-spacing: 2px;
        color: white;
        border-bottom: 1px solid transparent;
      }

      @media (hover: hover)  {
        .a__border:hover {
          border-color: var(--text-color);
        }
      }

      @media screen and (min-width: 768px) {
        nav {
          justify-content: space-between;
        }

        img {
          margin-left: 40px;
        }

        ul {
          width: 550px;
        }
      }

      @media screen and (min-width: 1024px) {
        img {
          margin-left: 80px;
        }

        ul {
          margin-right: 40px;
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

customElements.define('navbar-menu', navbar);

export { navbar };