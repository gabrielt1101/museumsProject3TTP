import React, { useState, Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";


export default class TourList extends Component {
    
    state = {
        tours: tourData,
        display: false,
        clsName: "popUpClose"
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

    changeMe = () => {
        this.setState({ clsName: "popUp" });
    };

    // VINCE IS NOT HERE


    render() {
        // console.log(this.state.tours);
        const { tours } = this.state;

        return (

            
            <section className="tourlist">

                <div className={this.state.clsName} id = "pop">
                    <span class="close" onClick={this.clickMe}>&times;</span>
                    <div className="gallery">

                        <div className="popUp-content" >
                
                            Hello World


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
