import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Agregar configuraciones para SEO y optimización
const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Cambar - Desarrollamos soluciones de software a la medida para empresas innovadoras. Servicios de desarrollo web, aplicaciones móviles y software personalizado.';
document.head.appendChild(meta);

const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0';
document.head.appendChild(metaViewport);

const metaRobots = document.createElement('meta');
metaRobots.name = 'robots';
metaRobots.content = 'index, follow';
document.head.appendChild(metaRobots);

const linkCanonical = document.createElement('link');
linkCanonical.rel = 'canonical';
linkCanonical.href = window.location.href.split('?')[0].split('#')[0];
document.head.appendChild(linkCanonical);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
