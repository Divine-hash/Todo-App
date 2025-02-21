import '../css/styles.css';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';
import bgDesktopLight from '../assets/images/bg-desktop-light.jpg';
import bgMoblieDark from '../assets/images/bg-mobile-dark.jpg';
import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg';

const modes = {
  dark: {
    mobile: bgMoblieDark,
    desktop: bgDesktopDark
  },
  light: {
    mobile: bgMobileLight,
    desktop: bgDesktopLight
  }
}

const mediaQueryList = window.matchMedia('(min-width: 401px)');

mediaQueryList.addEventListener('change', setHeroBg);
document.addEventListener('click', onClick);

setHeroBg();
function setHeroBg() {
  const mode = localStorage.getItem('mode');
  if (!mode) return;

  handler(mediaQueryList);
  function handler(e) {
    if (e.matches) {
      const url = modes[mode].desktop;
      document.querySelector('.hero').style.backgroundImage = `url(${url})`;
    } else {
      const url = modes[mode].mobile;
      document.querySelector('.hero').style.backgroundImage = `url(${url})`;
    }
  }
}


function onClick() {
  const mode = localStorage.getItem('mode');

  if (mode != 'dark') {
    localStorage.setItem('mode', 'dark');
    setHeroBg()
  } else {
    localStorage.setItem('mode', 'light');
    setHeroBg();
  }
}



