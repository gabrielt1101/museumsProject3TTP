import React, { useState, Component } from "react";
import Tour from "../Tour";

import "./tourlist.scss";
import { tourData } from "../../tourData";
import "./carousel.scss";
import img1 from "../TourList/images/1.jpg"
import img2 from "../TourList/images/2.jpg"
import img3 from "../TourList/images/3.jpg"
import img4 from "../TourList/images/4.jpg"
import img5 from "../TourList/images/5.jpg"
import img6 from "../TourList/images/6.jpg"


export default class TourList extends Component {
    
    state = {
        tours: tourData,
        display: false,
        clsName: "popUpClose",
        currCity: 0,
    };


    removeTour = id => {
        const { tours } = this. state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState ({
            tours: sortedTours
        });
    };


    // VINCE WAS HERE

    clickMe = () => {

        this.setState({ clsName: "popUpClose" });

    }

    changeMe = cityID => {
        this.setState({ clsName: "popUp" });
    };

    // VINCE IS NOT HERE


    render() {
        // console.log(this.state.tours);
        const { tours } = this.state;

        return (

            
            <section className="tourlist">

                <div className={this.state.clsName} >
                    <span class="close" onClick={this.clickMe}>&times;</span>

                    <div class="css-carousel">

                        {/* <!-- carousel controls --> */}
                        <input type="radio" name="carousel" id="carousel-1" checked/>
                        <input type="radio" name="carousel" id="carousel-2" checked/>
                        <input type="radio" name="carousel" id="carousel-3" checked/>
                        <input type="radio" name="carousel" id="carousel-4" checked/>
                        <input type="radio" name="carousel" id="carousel-5" checked/>
                        <input type="radio" name="carousel" id="carousel-6" checked/>

                        {/* <!-- carousel navigation --> */}
                        <div class="carousel-nav">
                            <label for="carousel-1"></label>
                            <label for="carousel-2"></label>
                            <label for="carousel-3"></label>
                            <label for="carousel-4"></label>
                            <label for="carousel-5"></label>
                            <label for="carousel-6"></label>
                        </div>


                        {/* <!-- carousel slides --> */}
                        <div class="carousel-slides">
                            <div class="carousel-inner">
                                <div class="carousel-item"><img src={img1} className="imageUwU" alt="imgUwU" /></div>
                                <div class="carousel-item"><img src={img2} className="imageUwU" alt="imgUwU" /></div>
                                <div class="carousel-item"><img src={img3} className="imageUwU" alt="imgUwU" /></div>
                                <div class="carousel-item"><img src={img4} className="imageUwU" alt="imgUwU" /></div>
                                <div class="carousel-item"><img src={img5} className="imageUwU" alt="imgUwU" /></div>
                                <div class="carousel-item"><img src={img6} className="imageUwU" alt="imgUwU" /></div>
                                
                            </div>
                        </div>

                    </div>

                    <div className="gallery">

                        <div className="popUp-content" >
                


                        </div>
                    </div>


                </div>

                {tours.map(tour => (
                    <Tour key={tour.id} 
                    tour={tour} 
                    removeTour={this.removeTour}
                    openMe = {this.changeMe}
                    />
                ))}



            </section>
        );
    }

}
