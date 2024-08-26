class Detail {
  constructor(songId) {
    this.songId = songId;
    this.songLyrics = document.getElementById('songLyrics');
  }

  async detailLyrics() {
    try {
<<<<<<< HEAD
      const response = await fetch(`https://those-lyrics.vercel.app/lyrics/${this.songId}`);
=======
      const response = await fetch(`https://this-song-lyrics.vercel.app/lyrics/${this.songId}`);
>>>>>>> 0e7eb9f362fa46c52284f361a08a40f4abd2a667
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
