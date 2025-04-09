import { lazy, Suspense } from 'react';

// Importar componentes de forma perezosa
const Portfolio = lazy(() => import('./pages/Portfolio'));

// Componente de carga
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
      <Portfolio />
    </Suspense>
  );
}
