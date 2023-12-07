// App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/home/home.jsX'
import NotFound from './pages/notFound/NotFound.jsx'; // Página para manejar rutas no encontradas
import VerPaquetes from './Pages/verPaquetes/VerPaquetes.jsx'; // Página para manejar la lista de paquetes
import VerDetalle from './Pages/verDetalle/VerDetalle.jsx'; // Página para manejar los detalles de un paquete
import Nosotros from './Pages/nosotros/Nosotros.jsx'; // Página para ver equipo utem travels
import Faq from './Pages/faq/Faq.jsx'; // Página para preguntas frecuentes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/ver-paquetes" element={<VerPaquetes />} />
        <Route path="/detalle" element={<VerDetalle />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
};

export default App;
