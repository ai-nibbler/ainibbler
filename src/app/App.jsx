import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AppRoutes } from '@/app/routes';

/** Project Pages URLs are /repo/...; custom domains use /... at site root. */
function pagesBasename() {
  const { hostname, pathname } = window.location;
  if (!hostname.endsWith('github.io')) return '';
  const repo = pathname.split('/').filter(Boolean)[0];
  return repo ? `/${repo}` : '';
}

/**
 * Root component: router shell + global UI (toasts).
 */
export default function App() {
  return (
    <Router basename={pagesBasename()}>
      <AppRoutes />
      <Toaster />
    </Router>
  );
}
