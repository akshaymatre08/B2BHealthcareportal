import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../images/carousel1.jpg";
import img2 from "../../images/carousel2.jpg";
import img3 from "../../images/carousel3.jpg";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs= {false} showStatus={false} showArrows={false} autoPlay={true} 
             infiniteLoop={true}>
                <div>
                    <img style={{width: "100%", height: "265px"}} src={img1} alt="img1" />
                </div>
                <div>
                    <img style={{width: "100%", height: "265px"}} src={img2} alt="img2"/>
                </div>
                <div>
                    <img style={{width: "100%", height: "265px"}} src={img3} alt="img3"/>
                </div>
            </Carousel>
        );
    }
};
export default DemoCarousel
