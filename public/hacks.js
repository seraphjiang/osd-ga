console.log('from google analytic plugin');
import ReactGA from 'react-ga';
try {

  window.addEventListener('popstate', function (event) {
    // Log the state data to the console
    console.log(event.state);
    ReactGA.pageview(window.location.pathname);
  });

  const TRACKING_ID = 'UA-20742809-1'; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);
} catch (e) {
  console.error(e);
}
