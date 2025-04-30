import React from 'react';
import './SalesReport.css';

const Report = () => {
  return (
    <div className="  sales-report
  flex flex-col justify-center

  /* móvil/tablet full width, desktop 3/4 */
  w-full md:w-3/4

  /* centrado en pantalla, sin margen al imprimir */
  m-auto print:m-auto

  /* forzar full width al imprimir */
  print:w-full ">
      <button 
        className="print-btn" 
        onClick={() => window.print()}
      >
        Imprimir
      </button>

      <header className="header">
        <img 
          src="/logo_Cambar.png" 
          alt="Logo Cambar" 
        />
        <h1>CAMBAR</h1>
      </header>

      <main className="container">
        <div className="title">REPORTE DE VENTA</div>
        <p className="intro">
          Gracias por tu compra. Has adquirido los siguientes servicios:
        </p>

        <h2>Servicio: Landing para negocios más sofisticado</h2>
        <p className="intro">
          Landing para negocios más sofisticado, con 6 secciones personalizables. 
          Ofrece mayor flexibilidad en la estructura y diseño, permitiendo una 
          experiencia más única y adaptada. Se puede personalizar cada sección.
        </p>

        <h3>1. Secciones del Sitio Público</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sección</th>
                <th>Capacidad</th>
                <th>Descripción y justificación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Home</td>
                <td>Semi-Gestionable</td>
                <td>Mayor control sobre el diseño y contenido de la página principal, permitiendo cambios en la estructura y elementos visuales.</td>
              </tr>
              <tr>
                <td>Servicios</td>
                <td>Gestionable</td>
                <td>Control total sobre servicios con opciones adicionales de categorización y destacados.</td>
              </tr>
              <tr>
                <td>Blog</td>
                <td>Gestionable</td>
                <td>Sistema de blog integrado con capacidad de crear y gestionar artículos propios además de enlaces a redes sociales.</td>
              </tr>
              <tr>
                <td>Nosotros</td>
                <td>Semi-Gestionable</td>
                <td>Personalización sobre el diseño y contenido.</td>
              </tr>
              <tr>
                <td>Galería</td>
                <td>Gestionable</td>
                <td>Sección dedicada para mostrar portafolio, productos o trabajos realizados.</td>
              </tr>
              <tr>
                <td>Contacto</td>
                <td>Semi-Gestionable</td>
                <td>Formulario de contacto personalizable con integración a correo electrónico.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2. Secciones del Área Administrativa</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Sección</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Panel de control</td>
                <td>Dashboard con estadísticas básicas de visitas y formularios recibidos.</td>
              </tr>
              <tr>
                <td>Gestión de contenido</td>
                <td>CRUD completo para todas las secciones gestionables incluyendo Blog, Servicios y Gestor de galería.</td>
              </tr>
              <tr>
                <td>Gestión de usuarios</td>
                <td>Creación y administración de usuarios con diferentes niveles de acceso.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className='cost-title'>Costo y tiempo</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Precio del servicio</td>
                <td>$5,000 MXN</td>
              </tr>
              <tr>
                <td>Plazo de entrega</td>
                <td>15 días laborales (iniciando después de recibir toda la información necesaria).</td>
              </tr>
              <tr>
                <td>Dominio</td>
                <td>silversmow.com</td>
              </tr>
              <tr>
                <td>Hosting incluido</td>
                <td>La cobertura del dominio es hasta 2026-08-28.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="final">
          <h2>Entregables</h2>
          <ul>
            <li>Hosting premium con mayor capacidad de almacenamiento y ancho de banda.</li>
            <li>Capacitación básica para el uso del panel de administración.</li>
            <li>Manual de usuario en formato PDF.</li>
          </ul>
        </section>

        <div className="flex justify-center mt-8">
  <div className="signature flex flex-col items-center">
    <img 
      src="/firmaIsaac.png" 
      alt="Firma del Responsable" 
      className="max-w-xs"
    />
    <div className="line w-40 border-b border-black my-2"></div>
    <span>Firma del Responsable</span>
  </div>
</div>

      </main>

      <footer>
        Cambar • www.cambar.com.mx
      </footer>
    </div>
  );
};

export default Report;
