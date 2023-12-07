
//Comentario.jsx
import React from 'react';
import { renderStars } from "../../../Components/utils"; // Ajusta la ruta según la ubicación real
import './comentario.css';

const Comentario = ({ key, usuario, texto, imagenPerfil, valoracion}) => {
  return (
    <div className="comentario-container">
      <div className="comentario">
        <img src={imagenPerfil} alt={`Imagen de perfil de ${usuario}`} className="imagen-perfil" />
        <div className="contenido">
          <div className="info-usuario">
            <p className="nombre-usuario">{usuario}</p>
            <div className="starsContainer">
              {renderStars(valoracion)}
            </div>
          </div>
          <p className="texto-comentario">{texto}</p>
        </div>
      </div>
    </div>
  );
};

export default Comentario;