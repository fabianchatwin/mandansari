// utils/ga.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-2W6RTZ05CJ', { gaOptions: { siteSpeedSampleRate: 100 } });
};

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};


