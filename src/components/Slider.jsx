import React from "react";
import Slides from './Slides';
import Carousel from 'react-bootstrap/Carousel'
import "../styles/Slider.css"
// import bootstrap from 'bootstrap/dist/css/bootstrap.css';
const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>Mis Proyectos</h2>
            </div>

            {/* <Carousel
                arrows
                slidesPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides}
            /> */}
            <Carousel >
                <Carousel.Item arrows
                slidesPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides} />
            </Carousel>
        </div>

        // <div className="carousel-container">
        //     <div className="carousel-title">
        //         <h2>Mis Proyectos</h2>
        //     </div>
        //     <Carousel>
        //         <Carousel.Item>
        //             <img
        //                 className="slide-continer"
        //                 src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        //                 alt="First slide"
        //             />
        //             <Carousel.Caption className="slide-desc">
        //                 <h3>Registro-de-Datos</h3>
        //                 <h4>Python</h4>
        //                 <p>Registro de Datos en Python con MYSQL</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //                 className="slide-continer"
        //                 src="https://www.zbw-mediatalk.eu/wp-content/uploads/2015/09/github-cover.jpg"
        //                 alt="First slide"
        //             />
        //             <Carousel.Caption className="slide-desc">
        //                 <h3>Gestion-Pedidos</h3>
        //                 <h4>Python</h4>
        //                 <p>Registro de Datos en Python con MYSQL</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>

       
    )
}

export default Slider;