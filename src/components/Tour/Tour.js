import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
    state = {
        showInfo: false,
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };


    render() {
        const { id, city, img, name, info } = this.props.tour;
        // New York Transit Museum - nearby subway lines
        const { train2color,train2, train4color,train4, trainCcolor,trainC, trainFcolor,trainF, trainGcolor,trainG, trainRcolor, trainR } = this.props.tour;
        // MoMA - nearby subway lines
        const { trainDcolor,trainD, trainEcolor,trainE, trainMcolor,trainM, trainQcolor,trainQ } = this.props.tour;
        // Intrepid - nearby subway lines
        const { train1color,train1, trainAcolor,trainA, trainNcolor, trainN } = this.props.tour;
        // Museum of Illusions - nearby subway lines
        const { trainLcolor, trainL } = this.props.tour;
        const { removeTour, openMe } = this.props;

        return (

    
            <article className="tour">
                <div className="img-container" >
                    <img src={img}  alt="city tour" onClick={() => openMe(id)}/>
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{" "}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    <div className="subwayStyle">
                    <h6>Nearby Subway Lines</h6>
                    <a href="https://moovitapp.com/index/en/public_transit-line-1-NYCNJ-121-855111-513445-0"><span className={train1color}>{train1}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-2-NYCNJ-121-855111-513446-0"><span className={train2color}>{train2}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-4-NYCNJ-121-855111-400159-0"><span className={train4color}>{train4}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-D-NYCNJ-121-855111-513451-0"><span className={trainDcolor}>{trainD}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-F-NYCNJ-121-855111-513453-0"><span className={trainFcolor}>{trainF}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-M-NYCNJ-121-855111-530600-1"><span className={trainMcolor}>{trainM}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-G-NYCNJ-121-855111-513454-0"><span className={trainGcolor}>{trainG}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-N-NYCNJ-121-855111-400173-0"><span className={trainNcolor}>{trainN}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-Q-NYCNJ-121-855111-400174-0"><span className={trainQcolor}>{trainQ}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-R-NYCNJ-121-855111-400175-0"><span className={trainRcolor}>{trainR}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-A-NYCNJ-121-855111-513448-0"><span className={trainAcolor}>{trainA}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-C-NYCNJ-121-855111-513450-0"><span className={trainCcolor}>{trainC}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-E-NYCNJ-121-855111-513452-0"><span className={trainEcolor}>{trainE}</span></a>
                    <a href="https://moovitapp.com/index/en/public_transit-line-L-NYCNJ-121-855111-513456-0"><span className={trainLcolor}>{trainL}</span></a>
                    </div>
                    {this.state.clsNames}
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        );
    }
}