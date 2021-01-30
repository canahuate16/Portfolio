import React from 'react'

const Services = () => {
    return (
        <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">
                My services</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <i className="fas fa-code "></i>
                        <div className="text">
                            Web Developer</div>
                        <p>
                            Junior Web Developer experienced using APIs and MySQL databases to create captivating full
                            stack web applications.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-chart-line"></i>
                        <div className="text">
                            Business Analyst</div>
                        <p>
                            4 years of experience working on agile development and leading problem solving initiatives
                            to enhance business processes.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-paint-brush"></i>
                        <div className="text">
                            Web Design</div>
                        <p>
                            Experience working with CSS frameworks and creating fully responsive web aplications with
                            CSS/HTML/JS.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Services
