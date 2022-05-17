import { isSupported, setCurrentScreen } from 'firebase/analytics';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { analytics } from '../services/firebase';

export const Analytics = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(process.env.NODE_ENV);

    if (process.env.NODE_ENV !== 'production') return;

    async function trackPageView() {
      const isSupportedAnalytics = await isSupported();

      console.log('isSupportedAnalytics', isSupportedAnalytics);

      if (!isSupportedAnalytics) return;

      setCurrentScreen(analytics, location.pathname);
    }

    router.events.on('routeChangeComplete', trackPageView);

    return () => {
      router.events.off('routeChangeComplete', trackPageView);
    };
  }, [router.events]);

  return null;
};

export default Analytics;
