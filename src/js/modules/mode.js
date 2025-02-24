export default class Mode {
  constructor(modesObject) {
    this.darkmodeToggle = document.querySelector('[data-id="darkmode-toggle"]');
    this.mode = '';
    this.modesObject = modesObject;

    this.darkmodeToggle.addEventListener('click', this.onClick.bind(this));
  }

  initializeMode() {
    this.mode = localStorage.getItem('mode');
    if (!this.mode) return;
    console.log(this.mode);
    const mediaQueryList = window.matchMedia(this.modesObject.media);
    mediaQueryList.addEventListener('change', this.initializeMode.bind(this));

    this.mediaQueryListHandler(mediaQueryList);
  }

  onClick() {
    const mode = localStorage.getItem('mode');

    if (mode != 'dark') {
      localStorage.setItem('mode', 'dark');
      this.initializeMode()
      this.setIconMode(this.modesObject[this.mode].sunIcon);
    } else {
      localStorage.setItem('mode', 'light');
      this.initializeMode();
      this.setIconMode(this.modesObject[this.mode].moonIcon);
    }
  }

  mediaQueryListHandler(e) {
    if (e.matches) {
      const url = this.modesObject[this.mode].desktop;
      this.setHeroBg(url);
    } else {
      const url = this.modesObject[this.mode].mobile;
      this.setHeroBg(url);
    }
  }

  setIconMode(icon) {
    const btnImg =  document.querySelector('[data-id="darkmode-toggle"] > img');
    btnImg.src = icon;
  }

  setHeroBg(url) {
    document.querySelector('.hero').style.backgroundImage = `url(${url})`;
  }
}