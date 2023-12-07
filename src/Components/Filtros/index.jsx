import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Filtros.css';

import Estrellas from '../Estrellas';

const Filtros = ({ filtrarPaquetes, largopaquete , onFilterClick}) => {
    const storedStars = localStorage.getItem('stars') || '';
    const storedServiceTypes = JSON.parse(localStorage.getItem('serviceTypes')) || [];

    const [stars, setStars] = useState(storedStars);
    const [serviceTypes, setServiceTypes] = useState(storedServiceTypes);
    const [paquetesTotales, setPaquetesTotales] = useState(0);

    useEffect(() => {
        // Guardar filtros en el localStorage cada vez que se actualizan
        localStorage.setItem('stars', stars);
        localStorage.setItem('serviceTypes', JSON.stringify(serviceTypes));
    }, [stars, serviceTypes]);

    const handleReset = () => {
        setStars('');
        setServiceTypes([]);
        filtrarPaquetes('', []); // Restablecer a todos los paquetes
    };

    const services = [
        { id: 'Restaurante', label: 'Restaurante' },
        { id: 'Bar', label: 'Bar' },
        { id: 'Servicio de Habitaciones', label: 'Servicio de Habitaciones' },
        { id: 'Wi-Fi', label: 'Wi-Fi' },
        { id: 'TV de pantalla plana', label: 'TV de pantalla plana' },
        { id: 'Desayuno buffet', label: 'Desayuno buffet' },
        { id: 'Minibar', label: 'Minibar' },
    ];

    const handleServiceTypeChange = (e) => {
        const value = e.target.value;
        setServiceTypes((prevTypes) =>
            prevTypes.includes(value)
                ? prevTypes.filter((type) => type !== value)
                : [...prevTypes, value]
        );
    };

    const handleStarClick = (valoracion) => {
        setStars(stars === valoracion.toString() ? '' : valoracion.toString());
    };
    
    const handleFilterClick = () => {
        filtrarPaquetes(stars, serviceTypes);
        if (onFilterClick) {
          onFilterClick(); // Llamada a la función proporcionada desde VerPaquetes
        }
      };

    return (
        <Form className="contenedor-filtros">
            <h2>Filtros</h2>
            <FormGroup>
                <legend className="label">
                    Estrellas
                </legend>
                <Estrellas valoracion={parseInt(stars)} onStarClick={handleStarClick} labelId="stars" />
                
            </FormGroup>

            <FormGroup className='contenedor-servicios'>
                <legend className="label">Servicios</legend>
                <div className='servicios'>
                    {services.map((service) => (
                        <FormGroup key={service.id} check>
                            <Label check for={service.id}>
                                <Input
                                    type="checkbox"
                                    id={service.id}
                                    name={service.id}
                                    value={service.id}
                                    checked={serviceTypes.includes(service.id)}
                                    onChange={handleServiceTypeChange}
                                />
                                {service.label}
                            </Label>
                        </FormGroup>
                    ))}
                </div>
            </FormGroup>
           <div className="paquetesRestantes mb-4"><span>Paquetes Restantes: {largopaquete}</span></div>
            <div className="botones">
                <Button onClick={handleFilterClick}>
                    
                    <i className="bi bi-funnel-fill"></i>
                    Filtrar
                </Button>
                <Button onClick={handleReset}>
                    <i className="bi bi-arrow-counterclockwise"></i>
                    Restablecer
                </Button>
            </div>
        </Form>
    );
};

export default Filtros;
