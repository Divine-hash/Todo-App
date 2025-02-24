import '../css/styles.css';
import bgMobileLight from '../assets/images/bg-mobile-light.jpg';
import bgDesktopLight from '../assets/images/bg-desktop-light.jpg';
import bgMoblieDark from '../assets/images/bg-mobile-dark.jpg';
import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg';
import sunIcon from '../assets/images/icon-sun.svg';
import moonIcon from '../assets/images/icon-moon.svg';

import Mode from './modules/mode';

const modes = {
  media: '(min-width: 401px)',
  dark: {
    mobile: bgMoblieDark,
    desktop: bgDesktopDark,
    sunIcon
  },
  light: {
    mobile: bgMobileLight,
    desktop: bgDesktopLight,
    moonIcon
  }
}


new Mode(modes).initializeMode();



