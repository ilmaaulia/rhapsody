class Copyright extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p id="copyright" class="text-center m-5">&copy; 2024 Rhapsody. All Rights Reserved.</p>
    `;
  }
}

customElements.define('copyright-section', Copyright);
