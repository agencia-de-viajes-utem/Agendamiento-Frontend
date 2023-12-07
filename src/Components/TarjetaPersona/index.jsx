import React from 'react';
import "./TarjetaPersona.css";

import { BsGithub } from "react-icons/bs";

const TarjetaPersona = ({ imagen, nombre, grupo, rol, github }) => {
  const imagenPorDefecto = 'src/assets/Equipo-img/default.jpg';

  // Verificar si la imagen está presente o cargar la imagen por defecto
  const imagenSrc = imagen || imagenPorDefecto;

  return (
    <a href={github} target="_blank" rel="noopener noreferrer" className="tarjeta">
      <img src={imagenSrc} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{rol}</p>
      <BsGithub className="github-icon"/>
    </a>
  );
};

export default TarjetaPersona;
