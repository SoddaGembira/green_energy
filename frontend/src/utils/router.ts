/**
 * Lightweight client-side navigation utility for SPA routing
 */
export const navigateTo = (url: string) => {
  window.history.pushState(null, '', url);
  window.dispatchEvent(new PopStateEvent('popstate'));
  if (!url.includes('#')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
