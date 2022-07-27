import React from "react";
import "../styles/Slider.css"
import Carousel from 'react-bootstrap/Carousel'
const slidesInfo = [
  // {
  //   src:
  //     "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
  //   alt: "Project 1",
  //   desc: "Project 1",
  // },
  // {
  //   src:
  //     "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
  //   alt: "Project 2",
  //   desc: "Project 2",
  // },
  // {
  //   src:
  //     "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
  //   alt: "Project 3",
  //   desc: "Project 3",
  // },
  {
    title: "Registro-de-Datos",
    subtitle: "Python",
    description: "Registro de Datos en Python con MYSQL",
    src:"https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "AppCronometro ",
    subtitle: "Python",
    description: "Cronometro desarrollado en Python con tkinter",
   // src: "https://www.zbw-mediatalk.eu/wp-content/uploads/2015/09/github-cover.jpg"
  },
  {
    title: "Gestion-Pedidos",
    subtitle: "Python",
    description: "Aplicación de Escritorio para gestionar pedidos desarrollada en PYTHON",
    //src: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }


];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;