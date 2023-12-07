import React, { useEffect } from 'react';
import './NotFound.css'; // Importa el archivo de estilos

const NotFound = () => {
    useEffect(() => {
        // Al montar el componente, aplicar la clase no-scroll al body
        document.body.classList.add('no-scroll');

        // Al desmontar el componente, quitar la clase no-scroll del body
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    const currentPath = window.location.pathname;
    const currentDomain = window.location.hostname;
    const currentProtocol = window.location.protocol;
    const currentPort = window.location.port;
    const fullURL = `${currentProtocol}//${currentDomain}:${currentPort}${currentPath}`;

    return (
        <div className="not-found-container">
            <div className="not-found-message">
                <h2>Ups... no hemos encontrado la página :(</h2>
                <p>
                    {`La página que buscas `}
                    <a href={fullURL} target="_blank" rel="noopener noreferrer">
                        {fullURL}
                    </a>
                    {` no existe.`}
                </p>
                <div className="imagen-container">
                    <img src="/ups.png" alt="Imagen de error" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
