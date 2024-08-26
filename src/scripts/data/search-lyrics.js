import Detail from './detail-lyrics.js';

class SongSearch {
  constructor() {
    this.searchInput = document.getElementById('searchInput');
    this.songLyrics = document.getElementById('songLyrics');
    this.searchButton = document.getElementById('searchButton');
    this.loadingButton = document.getElementById('loadingButton');

    this.searchInput.addEventListener('input', this.handleInput.bind(this));
    this.searchButton.addEventListener('click', this.search.bind(this));
  }

  handleInput() {
    this.songLyrics.innerHTML = '';
  }

  async search() {
    this.loadingButton.classList.remove('d-none');
    this.searchButton.classList.add('d-none');

    try {
<<<<<<< HEAD
      const response = await fetch(`https://those-lyrics.vercel.app/search?q=${this.searchInput.value}`, {
        mode: 'no-cors', // Temporary workaround for CORS
      });
=======
      const response = await fetch(`https://this-song-lyrics.vercel.app/search?q=${this.searchInput.value}`);
>>>>>>> 0e7eb9f362fa46c52284f361a08a40f4abd2a667
      const { status, data } = await response.json();

      if (status && data.length > 0) {
        const { songId } = data[0];
        const SongDetail = new Detail(songId);
        await SongDetail.detailLyrics();
      } else {
        this.songLyrics.innerHTML = 'Lyrics not found.';
      }
    } catch (rejectedReason) {
      console.log(rejectedReason);
    } finally {
      this.loadingButton.classList.add('d-none');
      this.searchButton.classList.remove('d-none');
    }
  }
}

export default SongSearch;
