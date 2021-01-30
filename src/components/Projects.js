import React from 'react'

const Projects = () => {
    return (
        <section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">
                My projects</h2>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                        <img src="Koala.PNG" alt="" />
                        <div className="text">
                            <a className="project-img" href="https://canahuate16.github.io/koala-sanctuary/">Koala
                                Sanctuary</a></div>


                        <p>
                            Fully Responsive Website utilizing HTML/CSS and JavaScript.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="Note-taker.PNG" alt="Note-Taker" />
                        <div className="text">
                            <a className="project-img" href="https://note-taker-proj.herokuapp.com/">Note Taker</a></div>
                        <p>
                            Application that can be used to write, save, and delete notes..</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="Burger.PNG" alt="" />
                        <div className="text">
                            <a className="project-img" href="https://burger-logger-proj.herokuapp.com/">Burger Logger</a>
                        </div>
                        <p>
                            Full Stack web application usign MySQL, Node, Handlebars and ORM.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="Template-engine.PNG" alt="" />
                        <div className="text">
                            <a className="project-img"
                                href="https://github.com/canahuate16/Template-Engine-Employee-Summary"> Template
                                Engine</a></div>
                        <p>
                            CMS Command line application to manage employee roles.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <img src="weather.PNG" alt="" />
                        <div className="text">
                            <a className="project-img" href="https://canahuate16.github.io/Weather-Dashboard/">Weather
                                Dashboard</a></div>
                        <p>
                            App that connects to a weather API and displays a 5 day forecast.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Projects
