import { getAnalytics, isSupported, setCurrentScreen } from 'firebase/analytics';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { firebaseApp } from '../services/firebase';

export const Analytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    async function trackPageView() {
      const isSupportedAnalytics = await isSupported();

      if (!isSupportedAnalytics) return;

      const analytics = getAnalytics(firebaseApp);

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
