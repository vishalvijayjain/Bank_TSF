import React, { Component } from 'react';
import Navbar from './navbar';
import image1 from "../Images/1.jpg";
import image2 from "../Images/2.jpg";
import image3 from "../Images/3.jpg";

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
                                <div className="row justify-content-center pb-5">
                                    {/* <h1>Welcome to Banking!</h1> */}
                                    <div className="jumbotron ">
                                        <div className="shadow p-3 mb-5 bg-light rounded">
                                            <h1 className="display-4 text-info">Welcome to Banking!</h1>
                                            <p className="lead">This is a simple Dynamic Banking Web Page. Click on the links on the navbar, or the carousel images for more information.</p>
                                        </div>
                                        {/* <<hr className="my-4"/> */}
                                        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div id="carouselExampleIndicators" className="carousel slide shadow p-3 mb-5 bg-white rounded" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={image3} alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div>
                                                <h5><a href="/Customers" className="btn btn-success btn-lg active" role="button" aria-pressed="true">List of Customers</a></h5>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={image1} alt="Second slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5><a href="/Transaction" className="btn btn-success btn-lg active" role="button" aria-pressed="true">Previous Transactions</a></h5>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={image2} alt="Third slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5><a href="/Transfer" className="btn btn-success btn-lg active" role="button" aria-pressed="true">New Transfer</a></h5>
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
                    <div>
                    <>
                        <hr/>
                        <p className="text-center text-info">Created by Vishal Jain as a TSF task. Check out my <a href="https://github.com/vishalvijayjain/Doodles" target="_blank">Github</a></p>
                    </>
                    </div>
                </div>
            </>
        );
    }
}

export default Landing;