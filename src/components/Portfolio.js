import React from 'react'
import portfolio_api from '../api/portfolio_api'

const Portfolio = () => {
    const [portfolio_state] = React.useState(portfolio_api);
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <div className="our_portfolio_comp">
                            <div className="row justify-content-center">
                                <div className="col-10">
                                    <div className="our_portfolio_title">
                                        <h3>Our Portfolio</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et is the quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                </div>
                                <div className="our_portfolio_cards">
                                    <div className="row justify-content-center px-5">
                                        {portfolio_state.map((curElem) => {
                                            return (
                                                <div className="col-lg-4 col-12" key={curElem.id}>
                                                    <div className="our_portfolio_card mt-4">
                                                        <div className="portfolio_card_img">
                                                            <img src={curElem.image} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="portfolio_card_content">
                                                            <h3>{curElem.heading}</h3>
                                                            <h4>{curElem.sub_heading}</h4>
                                                            <p>{curElem.content}</p>
                                                            <span><i className="fas fa-long-arrow-alt-right ms-auto me-3"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    
                                <div className="view_all mx-auto mt-md-5 mt-3">
                                    <a href="/">View All</a>
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

export default Portfolio
