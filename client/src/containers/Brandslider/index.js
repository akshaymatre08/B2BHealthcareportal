import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cat1 from "../../images/cadila.jpg";
import cat2 from "../../images/cipla.jpg";
import cat3 from "../../images/lupin.jpg";
import cat4 from "../../images/vaidyanath.jpg";
import cat5 from "../../images/himalaya.jpg";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    }
};

class Brandslider extends Component {
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
                <div class="card" style={{width: "12rem", height: "12rem"}}>
                    <img src={cat1} style={{width: "100%", height: "9rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Cadila</h5>
                        </div>
                </div>
                <div class="card" style={{width: "12rem", height: "12rem"}}>
                    <img src={cat2} style={{width: "100%", height: "9rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Cipla</h5>
                        </div>
                </div>
                <div class="card" style={{width: "12rem", height: "12rem"}}>
                    <img src={cat3} style={{width: "100%", height: "9rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Lupin</h5>
                        </div>
                </div>
                <div class="card" style={{width: "12rem", height: "12rem"}}>
                    <img src={cat4} style={{width: "100%", height: "9rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Dr.Vaidyanath</h5>
                        </div>
                </div>
                <div class="card" style={{width: "12rem", height: "12rem"}}>
                    <img src={cat2} style={{width: "100%", height: "9rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Cipla</h5>
                        </div>
                </div>
                <div class="card" style={{width: "12rem", height: "12rem"}}>
                    <img src={cat5} style={{width: "100%", height: "9rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Himalaya</h5>
                        </div>
                </div>
                <div class="card" style={{width: "12rem", height: "12rem"}}>
                    <img src={cat4} style={{width: "100%", height: "9rem"}} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Dr.Vaidyanath</h5>
                        </div>
                </div>
            </Carousel>
        );
    }
};
export default Brandslider;