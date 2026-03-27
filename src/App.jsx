import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import AppLayout from '@/components/layout/AppLayout';
import Home from '@/pages/Home';
import FreeLesson from '@/pages/FreeLesson';
import AIAcademy from '@/pages/AIAcademy';
import Newsletter from '@/pages/Newsletter';
import ProjectDetail from '@/pages/ProjectDetail';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/FreeLesson" element={<FreeLesson />} />
            <Route path="/AIAcademy" element={<AIAcademy />} />
            <Route path="/Newsletter" element={<Newsletter />} />
            <Route path="/Project/:slug" element={<ProjectDetail />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
