import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AppRoutes } from '@/app/routes';

/**
 * Root component: router shell + global UI (toasts).
 */
export default function App() {
  return (
    <Router>
      <AppRoutes />
      <Toaster />
    </Router>
  );
}
