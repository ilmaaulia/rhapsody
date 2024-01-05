class lyricsSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="songLyrics" class="text-center m-5"></section>
    `;
  }
}

customElements.define('lyrics-section', lyricsSection);
