import React from 'react'

export default function About() {
    return (
        <div className='about_body' id='about'>
            <h1>About</h1>
            <hr className='break' />
        
            <div className="row about-row">
            <img src="./image/aboutimg.jpg" className=" col-md-3 about-img-top" alt="Manish Singh" />
            <div className="col-md-7 m-auto about-text"><span style={{fontWeight:"bold", fontSize:"150%"}}>Hi</span>, I am Manish Singh a hard working engineering student with an innovative mind
             set. Pursuing my degree of Bachelor's of Technology specialised in Electronics Engineering with an average CGPA of 8.47.
              I have completed Python, Java, HTML, CSS, Bootstrap, JavaScript, React, My SQL, MATLAb and also worked on arduinos.
               Apart from academics and skills I also like to participate in Extra ciricular actvities.
                I have also coordinated a virtual gaming event in my college fest and I have also been appointed as Graphics Designer
                 at Training and Placement Cell IERT, Prayagraj. I also like to explore new technologies and their working.
                  I am a quick learner and good team player and I also like to learn new skills to enhance my learning and keep myself
                   updated with the upcoming technologies as, I am an Engineer and I can never stop learning.</div>
        </div>
        </div>
    )
}
