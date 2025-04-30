import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Carga perezosa de tus páginas
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Report     = lazy(() => import('./pages/Report')); 

// Fallback mientras cargan los chunks
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen w-screen bg-[#0f172a]">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-16 w-16 bg-blue-600 rounded-full mb-4"></div>
      <div className="h-4 w-32 bg-blue-500 rounded mb-2"></div>
      <div className="h-3 w-24 bg-blue-400 rounded"></div>
    </div>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route path="/reporte" element={<Report />} />
      </Routes>
    </Suspense>
  );
}
