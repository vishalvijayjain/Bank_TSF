import React, { Component } from 'react';
import Navbar from './navbar';
import image1 from "../Images/1.jpg";
import image2 from "../Images/2.jpg";


class Landing extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">
                            <div className="col-md-12 col-12 m-auto justify-content-center">
                                <div className="row justify-content-center">
                                    <h1>Welcome to Banking!</h1>
                                    {/* <div><span className="bold-style"><p>Check old transactions or perform new transaction</p></span></div> */}
                                    {/* <div><button className="btn btn-primary">Click here!</button></div> */}
                                </div>
                            </div>
                            <div className="row">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={image2} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={image1} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={image2} alt="Third slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5><button className="btn btn-primary"><a href="/user"></a>Click Here</button></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Landing;