import React from 'react'   
import $  from "jquery";
import Slider from "react-slick";
import testimonials_api from '../api/testimonials_api';


// console.log(a);
const Testimonials = () => {
    
    
    
    const [testimonialsstate] = React.useState(testimonials_api);
    var settings = {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: "280px",
        arrows: false,
        autoplay: true,
        dots: true,
        dotsClass: 'testimonials_dots',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    }
    return (
        <>
            <div className="testimonials_comp">                
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-12">
                        <div className="testimonials_title">
                            <h2>Testimonials</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials_slider">
                    <Slider {...settings}>
                    {testimonialsstate.map((curElem)=>{
                        return(
                            <div className="testimonials_slide_item" key={curElem.id}>
                                <div className="testimonials_slide">
                                    <div className="testimonials_slide_img">
                                        <img src={curElem.Image} alt="" />
                                    </div>
                                    <div className="testimonials_slide_content">
                                        <h4>{curElem.name}</h4>
                                        <h5>{curElem.Designation}</h5>
                                        <p>{curElem.Description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonials
