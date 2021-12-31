import React from 'react'

const HomeBanner = (props) => {
    return (
        <>
            <div className="home_banner">
                <div>
                <div className="bio">
                    <h3>Hello, I am</h3>
                    <h2>Mr. <span>{props.name}</span></h2>
                    <h5>A Professional Web Developer and UI/UX Designer.</h5>
                </div>
                <div className="banner_links">
                    <a href="/">Download CV</a>
                    <a href="/">My Work</a>
                </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
