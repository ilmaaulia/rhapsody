class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this.clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchInput').value;
  }

  render() {
    this.innerHTML = `
      <section id="jumbotron" class="jumbotron d-flex justify-content-center align-items-center flex-column">
        <h1 class="display-5">Rhapsody</h1>
        <p>Find song lyrics easily</p>

        <form>
          <div class="d-flex justify-content-center search-bar">
            <input type="text" class="form-control me-2 search-input" id="searchInput"
              placeholder="Enter title and artist name, e.g: personal hrvy" required>
            <button class="btn btn-primary text-white search-button"type="button" id="searchButton">Search</button>
            <button class="btn btn-primary text-white d-none loading-button" type="button" id="loadingButton" disabled>
              <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            </button>
          </div>
        </form>
      </section>
  `;

    this.querySelector('#searchButton').addEventListener('click', this.clickEvent);
  }
}

customElements.define('jumbotron-section', Jumbotron);
