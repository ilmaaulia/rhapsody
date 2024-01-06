class Detail {
  constructor(songId) {
    this.songId = songId;
    this.songLyrics = document.getElementById('songLyrics');
  }

  async detailLyrics() {
    try {
      const response = await fetch(`https://song-lyrics-api.azharimm.dev/lyrics/${this.songId}`);
      const { status, data } = await response.json();

      if (status) {
        const { songTitle, artist, songLyricsArr } = data;

        this.songLyrics.innerHTML = `<h2>${songTitle} - ${artist}</h2>`;
        this.songLyrics.innerHTML += `<pre>${songLyricsArr.join('\n')}</pre>`;
      } else {
        this.songLyrics.innerHTML = 'Lyrics not found.';
      }
    } catch (rejectedReason) {
      console.log(rejectedReason);
    }
  }
}

export default Detail;
