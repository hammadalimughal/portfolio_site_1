import React from 'react'
import services_api from './../api/services_api'


const OurServices = () => {
    const [services] = React.useState(services_api);
    console.log(services.title);
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-12">
                        <div className="our_services_comp">
                            <div className="row justify-content-center">
                                <div className="col-9">
                                    <div className="our_services_title">
                                        <h3>Our Services</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="our_services_service">
                                <div className="row justify-content-center">
                                    {services.map((curElem) => {
                                        return (
                                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-4"  key={curElem.id}>
                                                <div className="service_field">
                                                    <div className="service_field_img">
                                                        <img className="img-fluid" src={curElem.image} alt="" />
                                                    </div>
                                                    <h4>{curElem.title}</h4>
                                                    <i className="fas fa-long-arrow-alt-right ms-auto me-3"></i>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="view_all">
                                    <a href="/">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices
