import React from 'react'

export default function MidData() {
    return (
        <div>
        <div className="row" id='intro'>
            <img src="./image/newprofile.jpeg" className=" col-md-3 card-img-top" alt="Manish Singh" />
            <div className="col-md-7 m-auto mid-data-text"><p className='i-m'>I'm</p><p className='manish-singh'>Manish Singh</p>
            {/* <p className='job-title'>I Am a Software Developer</p> */}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval='2000'>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className=" mid-data-text title-ext-size">I am a Software Developer</div>
                    </div>
                    <div className="carousel-item">
                        <div className=" mid-data-text title-ext-size">I am a Data Analyst</div>
                    </div>
                    <div className="carousel-item">
                        <div className=" mid-data-text title-ext-size">I am a Front End Developer</div>
                    </div>
                </div>
                <button className="carousel-control-prev ar-style" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next ar-style" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            
        </div>
        <button type="button"  className='resume-btn btn btn-outline-primary btn-lg' ><a href="https://drive.google.com/file/d/16nt_OVyJqNWBHzkjIwKDSiU57x8XnHy8/view?usp=sharing" target="_">Resume</a></button>
        </div>
    )
}
