import React from 'react'
import img_life_struggle from './../images/my_life_struggle.png'
import lights_camera_action from './../images/light_camera_action.png'

const MyLifeStruggle = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-11">
                        <div className="row mb-5">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 px-4">
                                <div className="img_life_struggle">
                                    <img className="img-fluid img_life_" src={img_life_struggle} alt="" />
                                    <div className="light_camera_img">
                                        <img className="img-fluid" src={lights_camera_action} alt="" />
                                        <div className="light_camera_txt">
                                            <h2>06</h2>
                                            <h4>Years of Experience</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 px-4">
                                <div className="col-11">
                                    <div className="life_struggle_story">
                                        <div className="life_struggle_story_title">
                                            <h3>Read About My Life <br /> Struggle Story!</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                        <div className="skills_bar_container">
                                            <div className="React_skills">
                                                <h4>React 60%</h4>
                                                <div className="skills_bar"><div className="fill" ></div></div>
                                            </div>
                                            <div className="HTML_skills">
                                                <h4>HTML 90%</h4>
                                                <div className="skills_bar"><div className="fill"></div></div>
                                            </div>
                                            <div className="javascript_skills">
                                                <h4>javaScript 80%</h4>
                                                <div className="skills_bar"><div className="fill"></div></div>
                                            </div>
                                            <div className="Css_skills">
                                                <h4>CSS 85%</h4>
                                                <div className="skills_bar"><div className="fill"></div></div>
                                            </div>
                                        </div>
                                        <div className="life_struggle_story_anchor">
                                            <a href="/">Hire Me</a>
                                            <a href="/">About Me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyLifeStruggle
