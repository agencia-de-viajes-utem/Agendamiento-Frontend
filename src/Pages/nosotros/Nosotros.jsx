import React from 'react';
import "./Nosotros.css";
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';
import Equipo from '../../Components/Equipo';

const Nosotros = () => {
    return (
        <>
            <Header />
            <div className='contenedor-pagina'>
                <div className='quienes-somos'>
                    <h1>¿Quiénes somos?</h1>
                    <p>En <span style={{ color: '#FB8500' }}>Utem Travels</span>, somos un equipo apasionado de estudiantes de la
                        <span style={{ color: '#219EBC' }}> Universidad Tecnológica Metropolitana</span> comprometidos en llevar tus
                        viajes a nuevas alturas. Como aprendices en constante evolución,
                        fusionamos nuestra creatividad y habilidades técnicas para
                        ofrecerte <span style={{ color: '#F4BA41', textDecoration: 'underline' }}>experiencias</span> de viaje únicas y memorables.</p>
                </div>
                <img className='logo-utem-travels' src="/logo.png" alt="logo" />
                <div className='contenedor-tarjetas'>
                    <Equipo />
                </div>
                </div>
            <Footer />
        </>
    );
};

export default Nosotros;
