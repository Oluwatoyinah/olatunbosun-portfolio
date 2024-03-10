import React from 'react';
import Bosun from '../assets/me.jpg';

const About = () => {
  return (
    <section className="container-fluid about" id="about">
        <div className="container"> 
            <div className="row">
                <h1 className="col-md-12">.about me</h1>

                <div className="row">
                    <div className="col-md-4 bosun-box">
                        <img src={Bosun} className="bosun" alt="A picture will be here" />
                    </div>
                    <div className="col-lg-8 py-3" style={{display: "grid", placeContent: "center"}}>
                        {/* <p className="">Hi, I'm Olulode Olatunbosun. I am a software Developer from Nigeria. Passionate Fullstack
                            Developer with 3+ years experience developing web applications and API using php (Laravel/Codeigniter),
                            Javascript, Nodejs and Wordpress. Looking to join your deployment team where my skills will be utilized
                            in the design of scalable, data-driven, modular products that can be adapted to meet changing business
                            requirements.</p> */}
                            <p>Hi, I'm Olulode Olatunbosun. I am a software Developer from Nigeria. Passionate Backend
                            Developer who is proficient working with Tools and Technologies
                                such as JavaScript, PHP, Larevel, Codeigniter, Java SpringBoot, SQL,
                                PostgreSQL, MySQL, Linux, Shell Commands (Windows and Unix), and Git
                                (Version Control). Experienced with all stages of the software development
                                cycle, and agile methodology. With hands-on experience in building APIs
                                and applications that drive business growth. My passion lies in continuous
                                learning and improvement.</p>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default About