import React, { useState, useEffect } from "react";
import { getComentario } from "../../api/getComentario.js";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import Footer from "../../utils/Footer/index.jsx";
import Header from "../../utils/Header/index.jsx";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
//import TarjetaContacto from "./tarjetaContacto/TarjetaContacto.jsx";
import "./verDetalle.css";
import TarjetaDescripcion from "./tarjetaDescripcion";
import TarjetaCompra from "./tarjetaComprar/index.jsx";
import Comentario from "./comentario/Index.jsx";


// Esta línea es necesaria para la accesibilidad del modal
Modal.setAppElement("#root");

const VerDetalle = () => {
  const [comentarios, setComenario] = useState([]);
  const [Loading, setLoading] = useState();
  const [error, setError] = useState();
  const location = useLocation();
  const paquete = location.state;

  if (!paquete) {
    return <div>No se ha proporcionado un paquete para ver detalles.</div>;
  }

  // Desestructuración de las propiedades del paquete
  const {
    imagenes,
    info_paquete: { hotel_info },
  } = paquete;

  const { nombre_hotel } = hotel_info;

  // Convertir cadena de imágenes en array y construir las URLs
  const imagesArray = imagenes
    ? imagenes.substring(1, imagenes.length - 1).split(",")
    : [];
  const VITE_PATH_IMAGES = import.meta.env.VITE_PATH_IMAGES;
  const imageGalleryItems = imagesArray.map((image) => ({
    original: `${VITE_PATH_IMAGES}${image.trim()}`,
  }));


  useEffect(() => {
    const fetchComentarios = async () => {
        try {
            const data = await getComentario(paquete.id);
            setComenario(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchComentarios();
}, []);



  return (
    <div className="">
      <div className="header">
        <Header />
        <div className="detalle mt-3 mx-auto" style={{width:"90%"}} >
        <h1 className="col-xxl-2 mt-2 mb-2" style={{width:"90%"}}>{paquete.nombre}</h1>
        <div className="d-flex justify-content-center mt-2 mx-auto verDetalleContainer w-100">
          <div className="galeria-container" >
            <ImageGallery items={imageGalleryItems} />
          </div>
          <div className="tarjeta-compra-container ms-2 ">
            <TarjetaCompra paquete={paquete} />
          </div>
        </div>
        <div className="d-flex justify-content-center mx-auto tarjeta-descripcion-container mt-3 ">
          <TarjetaDescripcion />
          </div>
          <div>
      {comentarios.length > 0 ? (
        // Si hay comentarios, mapea sobre cada uno y renderiza el componente Comentario
        comentarios.map((comentario, index) => (
          <Comentario
            key={index}
            usuario={comentario.usuario}
            texto={comentario.texto}
            imagenPerfil={comentario.imagenPerfil}
            valoracion={comentario.valoracion}
          />
        ))
      ) : (
        
        <div className="d-flex align-items-center  justify-content-center">
        <div className="mt-5 align-items-center w-50 ">
            <h4 className='ms-4'>No hay comentarios todavia...</h4>
        </div>
        <div className="d-flex mt-4">
        <img
           src="/error.png"
           alt="yamsha"
           className="img-fluid"
           style={{
           width: '100%', // Hace que la imagen sea completamente responsiva
           maxWidth: '50vh',
           borderRadius: '50%', // Establece el radio de borde al 50% para formar un círculo
      
           }}
  />
</div>

    </div>
      )}
    </div>
           
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default VerDetalle;
