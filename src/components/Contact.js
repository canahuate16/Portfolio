const Contact = () => {
    return (
        <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">
                Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">
                        Get in Touch</div>
                    <p>
                        Have any questiosn? reach out to me via email, raven pidgeon or any other method.</p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">
                                    Name</div>
                                <div className="sub-title">
                                    Luis Canahuate</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">
                                    Address</div>
                                <div className="sub-title">
                                    Norristown, PA</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">
                                    Email</div>
                                <div className="sub-title">
                                    luis.canahuate16@gmail.com</div>

                            </div>
                        </div>
                        <div className="row">
                            <i className="fab fa-github-square"></i>
                            <div className="info">
                                <div className="head">
                                    GitHub</div>
                                <div className="sub-title">
                                    <a href="https://github.com/canahuate16">canahuate16</a></div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fab fa-linkedin-in"></i>
                            <div className="info">
                                <div className="head">
                                    LinkedIn</div>
                                <div className="sub-title">
                                    <a href="https://www.linkedin.com/in/luis-canahuate-3aa23610a/">Profile</a></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="column right">
                    <div className="text">
                        Message me</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div className="field textarea">
                            <changeit cols="30" rows="10" placeholder="Message.." required></changeit>
                        </div>
                        <div className="button">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact
