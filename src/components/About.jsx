import React from 'react';
import Bosun from '../assets/Bosun_nanmbl.png';

const About = () => {
  return (
    <section className="container-fluid about" id="about">
        <div className="container"> 
            <div className="row">
                <h1 className="col-md-12">.about me</h1>

                <div className="row">
                    <div className="col-md-4">
                        <img src={Bosun} className="bosun" alt="A picture will be here" />
                    </div>
                    <div className="col-md-8 py-3" style={{display: "grid", placeContent: "center"}}>
                        <p className="">Hi, I'm Olulode Olatunbosun. I am a software Developer from Nigeria. Passionate Fullstack
                            Developer with 3+ years experience developing web applications and API using php (Laravel/Codeigniter),
                            Javascript, Nodejs and Wordpress. Looking to join your deployment team where my skills will be utilized
                            in the design of scalable, data-driven, modular products that can be adapted to meet changing business
                            requirements.</p>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default About