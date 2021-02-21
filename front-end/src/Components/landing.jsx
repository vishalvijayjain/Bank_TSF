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
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-md-10 col-12 mx-auto">
                            <div class="col-md-12 col-12 m-auto justify-content-center">
                                <div class="row justify-content-center">
                                    <h1>Welcome to Banking!</h1>
                                    {/* <div><span class="bold-style"><p>Check old transactions or perform new transaction</p></span></div> */}
                                    {/* <div><button class="btn btn-primary">Click here!</button></div> */}
                                </div>
                            </div>
                            <div class="row">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={image2} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={image1} alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={image2} alt="Third slide" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5><button class="btn btn-primary"><a href="/user"></a>Click Here</button></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
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