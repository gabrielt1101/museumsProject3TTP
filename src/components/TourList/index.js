import React, { useState, Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

 
export default class TourList extends Component {



    state = {
        tours: tourData,
        display: false
    };

    removeTour = id => {
        const { tours } = this. state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState ({
            tours: sortedTours
        });
    };

    close = () => {
        this.setState({
            display: !this.state.display
        });
    };

    render() {
        // console.log(this.state.tours);
        const { tours } = this.state;

        return (

            
            <section className="tourlist">
               

                <div className="popUp">
                    <span class="close" >&times;</span>
                    <div className="gallery">

                        <div className="popUp-content">

                            Hello

                        </div>
                    </div>


                </div>

                {tours.map(tour => (
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                ))}



            </section>
        );
    }
}