import React, { Component } from 'react';
import "./style.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cat1 from "../../images/homeCare.jpg";
import cat2 from "../../images/ayurveda.jpg";
import cat3 from "../../images/ethical.jpg";
import cat4 from "../../images/medicines.jpg";
import cat5 from "../../images/surgical.jpg";
import cat6 from "../../images/veternary.jpg";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

class Multicarousel extends Component {
    render() {
        return (
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div class="card" style={{width: "15rem", height: "15rem"}}>
                    <img src={cat1} style={{width: "100%", height: "11rem",}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Home Care</h5>
                        </div>
                </div>
                <div class="card" style={{width: "15rem", height: "15rem"}}>
                    <img src={cat2} style={{width: "100%", height: "11rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Ayurveda</h5>
                        </div>
                </div>
                <div class="card" style={{width: "15rem", height: "15rem"}}>
                    <img src={cat3} style={{width: "100%", height: "11rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Ethical</h5>
                        </div>
                </div>
                <div class="card" style={{width: "15rem", height: "15rem"}}>
                    <img src={cat4} style={{width: "100%", height: "11rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Medicines</h5>
                        </div>
                </div>
                <div class="card" style={{width: "15rem", height: "15rem"}}>
                    <img src={cat5} style={{width: "100%", height: "11rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Surgical</h5>
                        </div>
                </div>
                <div class="card" style={{width: "15rem", height: "15rem"}}>
                    <img src={cat6} style={{width: "100%", height: "11rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Veternary</h5>
                        </div>
                </div>
            </Carousel>
        );
    }
};
export default Multicarousel;
