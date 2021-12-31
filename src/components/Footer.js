import React from 'react'
import behance from './../images/behance.png'
import dribbble from './../images/dribbble.png'
import instagram from './../images/insta.png'
import linkedin from './../images/linked in.png'
import pinterest from './../images/pinterest.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_main">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-12">
                                <div className="row">
                                    <div className="col-lg-5 col-12 pe-5">
                                        <h3>Contact Us</h3>
                                        <p>Let's make something new, different and more meaningful or make thing more visual or conceptual?</p>
                                        <ul>
                                            <li>
                                                <div className="contact_icon">
                                                    <i className="fal fa-phone-alt"></i>
                                                </div>
                                                <div className="contact_info">
                                                    <h6>Call Me</h6>
                                                    <h5>+123 456 7890</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="contact_icon">
                                                    <i className="far fa-envelope"></i>
                                                </div>
                                                <div className="contact_info">
                                                    <h6>Email</h6>
                                                    <h5>info@coder.com</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="contact_icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div className="contact_info">
                                                    <h6>Address</h6>
                                                    <h5>27 Division St, New York, <br />
                                                        NY 10002, USA</h5>
                                                </div>
                                            </li>
                                        </ul>
                                        <h6 className="mt-4">Find me On</h6>
                                        <div className="social_links">
                                            <ul>
                                                <li><a href="/"><img src={behance} alt="" /></a></li>
                                                <li><a href="/"><img src={dribbble} alt="" /></a></li>
                                                <li><a href="/"><img src={instagram} alt="" /></a></li>
                                                <li><a href="/"><img src={linkedin} alt="" /></a></li>
                                                <li><a href="/"><img src={pinterest} alt="" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-12">
                                        <h3>Drop a Line</h3>
                                        <div className="footer_form">
                                            <form action="">
                                                <div className="row">
                                                    <div className="col-md-6 col-12">
                                                        <div className="input_field">
                                                            <input type="text" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="input_field">
                                                            <input type="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="input_field">
                                                            <input type="text" placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="input_field">
                                                            <input type="number" min="25000" placeholder="Budget" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="input_field">
                                                            <textarea rows="3" placeholder="Message" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-6">
                                                        <button className="submit">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_copyright">
                    <h5>Copyright ©2019Coder. All Rights Reserved.</h5>
                </div>
            </footer >
        </>
    )
}

export default Footer
