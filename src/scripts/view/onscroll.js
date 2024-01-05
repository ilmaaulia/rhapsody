class Scroll {
  constructor() {
    this.prevScroll = window.scrollY;
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const currentScroll = window.scrollY;

    if (this.prevScroll > currentScroll) {
      document.querySelector('.navbar').style.top = '0';
    } else {
      document.querySelector('.navbar').style.top = '-75px';
    }

    this.prevScroll = currentScroll;
  }
}

// eslint-disable-next-line no-new
new Scroll();
