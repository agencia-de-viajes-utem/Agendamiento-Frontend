import React from 'react';
import './paqueteCard.css';  // Asegúrate de tener el archivo CSS correspondiente
import Slider from 'react-slick'; // Importa el Slider de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { renderStars, renderServiceIcons, formatFechaA, agregarPuntos, aerolinea  } from '../utils.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 



const PaqueteCard = ({ paquete, handleBuy }) => {
    const { nombre, fechainit, fechafin, descripcion, precio_vuelo, precio_noche, imagenes, total_personas, info_paquete } = paquete;
    const { nombre_opcion_hotel, descripcion_habitacion, servicios_habitacion, hotel_info } = info_paquete;
    const { nombre_hotel, direccion_hotel, valoracion_hotel, descripcion_hotel, servicios_hotel, telefono_hotel, correo_electronico_hotel, sitio_web_hotel } = hotel_info;

    // Convierte las fechas a objetos Date
    const fechaInicio = new Date(fechainit);
    const fechaFin = new Date(fechafin);

    const aerolineaSeleccionada = 'JetSmart';
    

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
        arrows: false ,
        autoplay: true, // Configuración para el autoplay
    autoplaySpeed: 1800,
    };


    return (
        <div className="paqueteCard ">
            
            <div className='ValoracionUsuarios d-flex'> <p className='fw-bold'>4.7</p></div>
            
            <div className="paqueteCardImages">
                <Slider key={`slider-${paquete.id}`} {...sliderSettings}>
                    {imageUrls.map((url, index) => (
                        <div key={index}> {/* <-- Here's the potential issue */}
                            <img src={url} alt={`Imagen ${index + 1}`} />
                            
                        </div>
                       
                       
                    ))}

                </Slider>
            </div>
            <div className="paqueteContent ">
                <div className="paqueteCardHeader mx-auto d-flex flex-column ">
                    <h2 className='text-center'>{nombre}</h2>
                    <div className="fechaContainer mx-auto gap-4 d-flex">

                         <span className='bg-secondary text-white fw-bold rounded p-2 ida px-4 text-center'>Ida {formatFechaA(fechainit)}
                         </span>

                         <span className='bg-primary text-white fw-bold rounded p-2 px-4 text-center '>Vuelta {formatFechaA(fechafin)}</span>

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
                    <div className="paqueteCardPrice text-center">
                       
                    </div>
                    <div className="paqueteCardPriceTotal">
                        <div className="aerolinea fs-5">
                           <div className="row"> <p>Viajando con </p>  </div>
                            <div className="row"> <img style={{width:"200px"}} className='img-fluid' src={aerolinea(aerolineaSeleccionada)} alt={aerolineaSeleccionada} /> </div>
                        </div>
                        <div className="paqueteCardPriceTotalPersona ">
                            <p className=' w-100 rounded fw-bold p-2 mt-1'>{`Final ${total_personas} personas`}</p>
                            <div className="TotalPersona fw-bold">
                                <h2 className=' me-5 fw-bold black'> {`CLP$${agregarPuntos(precio_vuelo * total_personas + precio_noche * diferenciaEnDias)}`} </h2>
                                
                            </div>
                        </div>
                        <div className=" buyButton">
                            
                            <button className='btn-lg' onClick={() => handleBuy(paquete)}>Comprar</button>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaqueteCard;
