class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-dark fixed-top">
        <div class="container d-flex justify-content-center align-items-center">
          <a class="navbar-brand" href="index.html">
            <i class="bi bi-music-note-beamed"></i>
          </a>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', Appbar);
