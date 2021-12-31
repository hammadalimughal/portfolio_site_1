import React from 'react'
import blogs_api from '../api/blogs_api'

const BlogsHome = () => {
    const [blogs_apistate] = React.useState(blogs_api)
    return (
        <>

            <div className="blogs_home_comp">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-12">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <div className="blogs_home_title">
                                    <h2>Lates Blogs</h2>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="home_blogs_cards">
                            <div className="row justify-content-center px-5">
                                {blogs_apistate.map((curElem) => {
                                    return(
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 px-4" key={curElem.id}>
                                            <div className="home_blogs_card">
                                                <div className="home_blogs_card_img">
                                                    <img className="img-fluid" src={curElem.image} alt="" />
                                                </div>
                                                <div className="home_blogs_card_content">
                                                    <h5>{curElem.date}</h5>
                                                    <h4>{curElem.content}</h4>
                                                    <a href="/">Learn More <i className="fas fa-long-arrow-alt-right ms-auto me-3"></i></a>
                                                </div>
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
        </>
    )
}

export default BlogsHome
