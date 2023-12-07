import React from 'react';
import './paqueteCard.css';  // Asegúrate de tener el archivo CSS correspondiente
import Slider from 'react-slick'; // Importa el Slider de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { renderStars, renderServiceIcons, formatFechaA, agregarPuntos  } from '../utils.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const PaqueteCard = ({ paquete, handleBuy }) => {
    const { nombre, fechainit, fechafin, descripcion, precio_vuelo, precio_noche, imagenes, total_personas, info_paquete } = paquete;
    const { nombre_opcion_hotel, descripcion_habitacion, servicios_habitacion, hotel_info } = info_paquete;
    const { nombre_hotel, direccion_hotel, valoracion_hotel, descripcion_hotel, servicios_hotel, telefono_hotel, correo_electronico_hotel, sitio_web_hotel } = hotel_info;

    // Convierte las fechas a objetos Date
    const fechaInicio = new Date(fechainit);
    const fechaFin = new Date(fechafin);
    

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaFin - fechaInicio;

    // Calcula la diferencia en días
    const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);


    // Convierte la cadena de imágenes en un arreglo
    const imagesArray = imagenes ? imagenes.substring(1, imagenes.length - 1).split(',') : [];

    // Construye las URLs de las imágenes usando la variable VITE_PATH_IMAGES
    const VITE_PATH_IMAGES = import.meta.env.VITE_PATH_IMAGES;
    const imageUrls = imagesArray.map(image => `${VITE_PATH_IMAGES}${image.trim()}`);

    // Configuraciones para el Slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };


    return (
        <div className="paqueteCard">
            
            
            <div className="paqueteCardImages">
                <Slider key={`slider-${paquete.id}`} {...sliderSettings}>
                    {imageUrls.map((url, index) => (
                        <div key={index}> {/* <-- Here's the potential issue */}
                            <img src={url} alt={`Imagen ${index + 1}`} />
                            
                        </div>
                    ))}

                </Slider>
            </div>
            <div className="paqueteContent">
                <div className="paqueteCardHeader">
                    <h2>{nombre}</h2>
                    <div className="w-100">
                        <p>
                         <span className='bg-secondary text-white fw-bold rounded p-2 ida me-2'>{formatFechaA(fechainit)}
                         </span>
                            
                         <span className='bg-primary text-white fw-bold rounded p-2'>{formatFechaA(fechafin)}</span>
                       

                     </p>
                     </div>
                    
                    <div className="paqueteCardValoracion" style={{ borderTop: "" }}>
                        <p style={{ fontSize: '1.7rem' }} className="mt-4"> {nombre_hotel} </p>
                        <div className="Estrellas mt-4" style={{ fontSize: '3rem' }}>
                            {renderStars(valoracion_hotel)}
                        </div>
                    </div>
                </div>
                <div className="paqueteCardBody">
                    <div className="paqueteCardServicios">
                        {renderServiceIcons(info_paquete.hotel_info.servicios_hotel)}
                        {renderServiceIcons(info_paquete.servicios_habitacion)}
                    </div>
                    <div className="paqueteCardPrice">
                        <p>{`Vuelo $${precio_vuelo}`} {}</p>
                        <p>{`Noche $${precio_noche}`}</p>
                    </div>
                    <div className="paqueteCardPriceTotal">
                        <div className="aerolinea fs-5">
                           <div className="row"> <p>Viajando con </p> </div>
                            <div className="row">  </div>
                        </div>
                        <div className="paqueteCardPriceTotalPersona ">
                            <p className=' w-100 rounded fw-bold p-2 mt-1'>{`Final ${total_personas} personas`}</p>
                            <div className="TotalPersona fw-bold">
                                <p> {`$${agregarPuntos(precio_vuelo * total_personas + precio_noche * diferenciaEnDias)}`} </p>
                            </div>
                        </div>
                        <div className="buyButton">
                            <div className=' '>
                            <button onClick={() => handleBuy(paquete)}>Comprar</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaqueteCard;
