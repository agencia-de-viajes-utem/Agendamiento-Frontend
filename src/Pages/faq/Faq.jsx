import React from 'react';
import "./Faq.css";
import Header from '../../utils/Header';
import Footer from '../../utils/Footer';

const Faq = () => {
  return (
    <div>
      <Header />
      <div style={{width:"85%", margin: "0 auto"}}>
      <div className="faq-header">Preguntas Frecuentes</div>

      <div className="faq-content">
        <div className="faq-question">
          <input id="q1" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q1" className="panel-title">¿Qué es Utem Travels?</label>
          <div className="panel-content">Utem Travels es un proyecto desarrollado por estudiantes de la Universidad Tecnológica Metropolitana que simula una agencia de viajes. Nos enfocamos en ofrecer experiencias de viaje únicas y memorables.</div>
        </div>

        <div className="faq-question">
          <input id="q2" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q2" className="panel-title">¿Ofrecen servicios de viaje reales?</label>
          <div className="panel-content">En nuestro proyecto, ofrecemos una variedad de destinos simulados para brindarte una experiencia completa. Puedes explorar estos destinos en la sección de inicio.</div>
        </div>

        <div className="faq-question">
          <input id="q3" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q3" className="panel-title">¿Cómo puedo reservar un viaje en Utem Travels?</label>
          <div className="panel-content">Dado que Utem Travels es un proyecto simulado, no se realizan reservas reales. Puedes explorar las opciones de viaje y aprender más sobre los destinos, pero las reservas no están disponibles.</div>
        </div>

        <div className="faq-question">
          <input id="q4" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q4" className="panel-title">¿Qué tipo de proyectos desarrollan los estudiantes en Utem Travels?</label>
          <div className="panel-content">Los estudiantes de Utem Travels trabajan en equipos para desarrollar diferentes aspectos del proyecto, como el diseño del sitio web, la implementación de funciones, la gestión de datos y la experiencia del usuario.</div>
        </div>

        <div className="faq-question">
          <input id="q5" type="checkbox" className="panel" />
          <div className="plus">+</div>
          <label htmlFor="q5" className="panel-title">¿Puedo unirme al equipo de Utem Travels como estudiante?</label>
          <div className="panel-content">Actualmente, Utem Travels es un proyecto académico específico para el curso de Taller de Sistemas de Software en la Universidad Tecnológica Metropolitana. Si eres estudiante de la UTEM, puedes consultar con tu profesor para obtener más información sobre cómo participar.</div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
