import SongSearch from '../data/search-lyrics.js';

const songSearch = new SongSearch();

document.getElementById('searchInput').addEventListener('keydown', async (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    await songSearch.search();
  }
});
