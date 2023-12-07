import React, { useEffect, useState } from 'react';
import { MdAirplanemodeInactive, MdFilterAltOff } from 'react-icons/md';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './NoPaquetesDisp.css';
import Filtros from '../Filtros';

const NoPaquetesDisponibles = ({ onNewSearch, showFilterButton, showFilterMessage }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleNewSearchClick = () => {
    setShowFilterModal(true);
  };

  const renderMessage = () => {
    if (showFilterMessage) {
      return (
        <div className='info'>
          <h1>
            <i className='icono'>
              <MdFilterAltOff />
            </i>
            No hay paquetes disponibles para ese filtrado
          </h1>
          <p>Vuelve a filtrar tus paquetes o haz una nueva búsqueda.</p>
        </div>
      );
    } else {
      return (
        <div className='info'>
          <h1>
            <i className='icono'>
              <MdAirplanemodeInactive />
            </i>
            No hay paquetes disponibles para esta búsqueda
          </h1>
          <p>Como alternativa, te recomendamos seleccionar destino o fecha diferente.</p>
        </div>
      );
    }
  };

  return (
    <div className='contenedor-pag'>
      {showFilterButton && (
        <button type='button' className='btn' onClick={handleNewSearchClick}>
          Filtros
        </button>
      )}

      <div className="no-paquetes">
        {renderMessage()}
        <div className="imagen-container">
          <img src="/error.png" alt="Imagen de error" />
        </div>
      </div>

      {showFilterButton && (
        <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}>
          <Modal.Body>
            <Filtros
              show={showFilterModal}
              onClose={() => setShowFilterModal(false)}
              filtrarPaquetes={onNewSearch}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default NoPaquetesDisponibles;
