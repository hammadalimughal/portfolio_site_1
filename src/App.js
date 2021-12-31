import React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import MyLifeStruggle from './components/MyLifeStruggle';
import OurServices from './components/OurServices';
import Portfolio from './components/Portfolio';
import ExperienceCounter from './components/ExperienceCounter';
import Testimonials from './components/Testimonials';
import AvailableFreelancing from './components/AvailableFreelancing';
import BlogsHome from './components/BlogsHome';
import Footer from './components/Footer';

import {
  BrowserRouter as Router
} from "react-router-dom";
const App = () => {
  const [name] = React.useState("Hammad Ali")
  return (
    <>
    <Router>
        <Header />
        <HomeBanner name={name} />
          <MyLifeStruggle />
          <OurServices />
          <Portfolio />
          {/* <Testimonials /> */}
          <AvailableFreelancing />
          <BlogsHome />
        <ExperienceCounter />
        <Footer />
        </Router>
    </>
  )
}

export default App
