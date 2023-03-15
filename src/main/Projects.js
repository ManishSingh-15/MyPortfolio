import React from "react";

export default function Projects() {
    return (
        <div className="projects-body" id="projects">
            <h1>Projects</h1>
            <hr className='break' />
            <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-size" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-indicators" >
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active indicate" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="indicate" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="indicate" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="indicate" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" className="indicate" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" className="indicate" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" className="indicate" aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner " >
                    <div className="carousel-item active " >
                        <h3 className="projecttitle">Password Manager and generator GUI app using Python</h3>
                        <div className="carousel-caption d-none d-md-block projects-parts">
                            <h5>Python personal project</h5>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <h3 className="projecttitle">MS Excell sheet compare using Python</h3>

                        <div className="carousel-caption d-none d-md-block projects-parts" >
                            <h5>Python personal project</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h3 className="projecttitle">Weather prediction using API and Python</h3>

                        <div className="carousel-caption d-none d-md-block projects-parts">
                            <h5>Python personal project</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h3 className="projecttitle">Habit tracker using API and Python</h3>

                        <div className="carousel-caption d-none d-md-block projects-parts">
                            <h5>Python personal project</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h3 className="projecttitle">Quiz GUI app using API and Python</h3>

                        <div className="carousel-caption d-none d-md-block projects-parts">
                            <h5>Python personal project</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h3 className="projecttitle">Turtle game using tkinter and Python</h3>

                        <div className="carousel-caption d-none d-md-block projects-parts">
                            <h5>Python personal project</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <h3 className="projecttitle">Distance measuring device with display using Arduino</h3>

                        <div className="carousel-caption d-none d-md-block projects-parts">
                            <h5>Arduino personal project</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}