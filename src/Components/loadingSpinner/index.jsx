// LoadingSpinner.jsx
import React from 'react';
import './LoadingSpinner.css'; // Archivo de estilos para personalizar la apariencia

const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loading-overlay">
                <div className="spinner-container">
                    {/* Imagen webp con border-radius 50% */}
                    <img
                        className="spinner-image"
                        src="/taoppload.webp"
                        alt="Loading Spinner"
                    />
                    {/* Spinner giratorio */}
                    <div className="spinner"></div>
                </div>
                {/* Texto "Cargando..." con efecto de rebote */}
                <div className="loading-text">
                    <h1 className="text_bounce" style={{color:'#EFEFEF'}}>Cargando...</h1>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
