import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import Home from '@/pages/Home';
import FreeLesson from '@/pages/FreeLesson';
import AIAcademy from '@/pages/AIAcademy';
import Newsletter from '@/pages/Newsletter';
import ProjectDetail from '@/pages/ProjectDetail';
import NotFoundPage from '@/pages/NotFoundPage';

/**
 * Central route table. Add new pages here and create the matching file under `src/pages/`.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/FreeLesson" element={<FreeLesson />} />
        <Route path="/AIAcademy" element={<AIAcademy />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/Project/:slug" element={<ProjectDetail />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
