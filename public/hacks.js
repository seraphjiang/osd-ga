console.debug('from hack');

import ReactGA from 'react-ga';
try {
  const TRACKING_ID = 'UA-20742809-1'; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  ReactGA.pageview(window.location.pathname + window.location.search);
} catch (e) {
  console.error(e);
}
