import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand my-name" href="/MyPortfolio">{props.name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a activeClassName="active-section" className="nav-link  nav-text" aria-current="page" href="#intro" >Home</a>
                        </li>                        
                        <li className="nav-item">
                            <a activeClassName="active-section" className="nav-link nav-text" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a activeClassName="active-section" className="nav-link nav-text" href="#skill">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a activeClassName="active-section" className="nav-link nav-text" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a activeClassName="active-section" className="nav-link nav-text" href="#contact">Contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
