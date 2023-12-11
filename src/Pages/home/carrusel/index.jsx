import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OfferCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { renderStars, formatFecha, agregarPuntos } from '../../../Components/utils';



function OfferCard({ paquete, cardsToShow, VITE_PATH_IMAGES, handleBuy}) {
  
  const fechaInicio = new Date(paquete.fechainit);
    const fechaFin = new Date(paquete.fechafin);
    

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaFin - fechaInicio;

    // Calcula la diferencia en días
    const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

  // Limpia la cadena de imÃ¡genes, elimina corchetes y espacios en blanco
  const cleanedImages = paquete.imagenes ? paquete.imagenes.replace(/[{}]/g, '').split(',').map(image => image.trim()) : [];

  // Toma la primera imagen si existe
  const firstImage = cleanedImages.length > 0 ? cleanedImages[0] : '';

  // Construye la URL completa de la primera imagen
  const imageUrl = `${VITE_PATH_IMAGES}${firstImage}`;
  
  

  return (
    <div className={`col-md-${8 / cardsToShow} col-xl-${9 / cardsToShow}  mt-2 mb-2 me-5 ms-5 `}>
      <div className="card mb-2 " style={{ height: '100%', width:"350px" }}>
        <img src={imageUrl} alt={paquete.title} className="card-img-top "  />
        
        <div className="card-body">
        <div className='ValoracionUsuarios d-flex mb-5'> <p className='fw-bold'>4.7</p></div>
          <div className="Package-info">
          </div>
          <h2 className="card-title">{paquete.nombre}</h2>
          <div className='estrellas d-flex justify-conten-btween'>
            <p className='w-50 me-5 justify-content-end mx-auto' >{paquete.info_paquete.hotel_info.nombre_hotel} </p>
            {renderStars(paquete.info_paquete.hotel_info.valoracion_hotel)}
          </div>
          <div className="d-flex justify-content-between">
          <div className="fecha"> <div className="d-flex justify-content-between ">
              <div className="bg-secondary text-white fw-bold rounded p-2 ida me-2">{formatFecha(paquete.fechainit)} </div>
              <div className="bg-primary text-white fw-bold rounded p-2"> {formatFecha(paquete.fechafin)}</div>  
            </div>
            <div className="bg-secondary-subtle w-100 rounded fw-bold p-2 mt-1" style={{color :"black"}}> Para {paquete.total_personas} Personas</div>
            </div>
          <div className="Information d-flex flex-column align-items-end">
            <h3 className='fw-bold'>{`CLP$${agregarPuntos(paquete.precio_vuelo * paquete.total_personas + paquete.precio_noche * diferenciaEnDias)}`}</h3>
            
          </div></div>
          <div className='d-flex justify-content-end'><button className="btn btn-primary btn-card " onClick={() => handleBuy(paquete)} >Ver Paquete</button></div>
          
        </div>
      </div>
    </div>
  );
}
function OfferCarousel({ paquetes, handleBuy }) {
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1600) {
        setCardsToShow(3);
      } else if (screenWidth >= 1300) {
        setCardsToShow(2);
      } else if (screenWidth >= 1100) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    window.addEventListener('resize', updateCardsToShow);
    updateCardsToShow();

    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const VITE_PATH_IMAGES = import.meta.env.VITE_PATH_IMAGES;
  const chunkedPaquetes = chunkArray(paquetes, cardsToShow);

  return (
    <div className="offer"> 
      <div className="container" style={{}}>
        <Carousel interval={null}>
          {chunkedPaquetes.map((paqueteGroup, groupIndex) => (
            <Carousel.Item className='justify-content-center ' key={`carousel-item-${groupIndex}`}>
              <div className="row aling-items-center justify-content-center">
                {paqueteGroup.map((paquete) => (
                  <OfferCard  key={paquete.id} paquete={paquete} handleBuy={handleBuy} cardsToShow={cardsToShow} VITE_PATH_IMAGES={VITE_PATH_IMAGES} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default OfferCarousel;