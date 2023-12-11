import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./TarjetaCompra.css";
import { renderServiceIcons, renderStars,aerolinea } from "../../../Components/utils.jsx";
import { agregarPuntos } from "../../../Components/utils.jsx";
import { Agendar } from "../../../api/agendar.js";
import Cookies from 'js-cookie';

const TarjetaCompra = () => {
  const location = useLocation();
  const paquete = location.state;
  const aerolineaSeleccionada = 'JetSmart';

  const handlePackageSelection = () => {
    const token = Cookies.get('token'); 
  
    if (token === undefined) {
        alert("No se puede agendar sin iniciar sesión");
    }
    else {
        Agendar(token, id);
    }
  };
  

  if (!paquete) {
    return <div>No se ha proporcionado un paquete para ver detalles.</div>;
  }

  const {
    id,
    nombre,
    total_personas,
    descripcion,
    fechainit,
    fechafin,
    detalles,
    precio_vuelo,
    precio_noche,
    precio_oferta_vuelo,
    imagenes,
    info_paquete: {
      nombre_opcion_hotel,
      descripcion_habitacion,
      servicios_habitacion,
      hotel_info,
    },
  } = paquete;

  const {
    nombre_hotel,
    direccion_hotel,
    valoracion_hotel,
    descripcion_hotel,
    servicios_hotel,
    telefono_hotel,
    correo_electronico_hotel,
    sitio_web_hotel,
  } = hotel_info;

const fechaInicio = new Date(fechainit);
const fechaFin = new Date(fechafin);
const diferenciaEnMilisegundos = fechaFin - fechaInicio;
const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);





  return (
    <div className="tarjeta-compra w-100 me-5 h-100 ">
      <h1>{nombre_hotel}</h1>
      <p>{descripcion_hotel}</p>
      <p1>{<div className="starsContainer" style={{fontSize:'2rem', marginTop:"-20px"}}>{renderStars(valoracion_hotel)}</div>}</p1>
      <p>{descripcion_habitacion}</p>
      <p>{<div className="servicesContainer "style={{fontSize:'1.5rem'}}>{renderServiceIcons(servicios_habitacion)}<p></p> </div>}</p>
      <div className="mb-5 fw-bold">Viajando con {aerolinea} <img style={{width:"200px"}} className='img-fluid' src={aerolinea(aerolineaSeleccionada)} alt={aerolineaSeleccionada} /> </div>
      <h4 className="fw-bold">{`Final ${total_personas} personas`}</h4>
      
      {precio_oferta_vuelo > 0 ?  ( <h4 className="fw-bold"> {`CLP$${agregarPuntos(precio_oferta_vuelo * total_personas + precio_noche * diferenciaEnDias)}`}</h4>):(
      <h4 className="fw-bold"> {`CLP$${agregarPuntos(precio_vuelo * total_personas + precio_noche * diferenciaEnDias)}`}</h4>)}
        <button onClick={handlePackageSelection} className="comprar-button">Comprar</button>
      </div>
  );
};

export default TarjetaCompra;
