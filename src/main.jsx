import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Metadatos SEO (igual que antes)
const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Cambar - Desarrollamos soluciones de software a la medida…';
document.head.appendChild(meta);
// … resto de meta tags …

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
