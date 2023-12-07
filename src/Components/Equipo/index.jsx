import React from 'react';
import TarjetaPersona from '../TarjetaPersona';
import datosPersonas from '../../assets/datosEquipo.json';

import { BsPersonFillGear, BsShieldFillCheck, BsLaptopFill } from "react-icons/bs";

import './Equipo.css';

const Equipo = () => {

    const grupos = {
        admin: datosPersonas.filter((persona) => persona.grupo === 'admin'),
        desarrollador: datosPersonas.filter((persona) => persona.grupo === 'desarrollador'),
        seguridad: datosPersonas.filter((persona) => persona.grupo === 'seguridad'),
    };

    return (
        <div className='contenedor-equipo'>
            <div className='info-equipo'>
                <h1>Nuestro equipo</h1>
                <p>Descubre al equipo detrás de Utem Travels,
                    donde la innovación y la pasión se encuentran en cada aventura que planeamos.</p>
            </div>

            <div className='seccion-equipo'>
                <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Administración
                    <BsPersonFillGear style={{ marginLeft: '7px' }} />
                </h4>
                <div className="contenedor-tarjetas">
                    {grupos.admin.map((persona, index) => (
                        <TarjetaPersona key={index} {...persona} />
                    ))}
                </div>
            </div>

            <div className='seccion-equipo'>
                <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Desarrolladores
                <BsLaptopFill style={{ marginLeft: '10px' }} />
                </h4>
                <div className="contenedor-tarjetas">
                    {grupos.desarrollador.map((persona, index) => (
                        <TarjetaPersona key={index} {...persona} />
                    ))}
                </div>
            </div>

            <div className='seccion-equipo'>
            <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    Seguridad
                    <BsShieldFillCheck style={{ marginLeft: '10px' }} />
                </h4>
                <div className="contenedor-tarjetas">
                    {grupos.seguridad.map((persona, index) => (
                        <TarjetaPersona key={index} {...persona} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Equipo;
