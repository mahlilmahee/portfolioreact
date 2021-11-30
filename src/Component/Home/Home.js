import React from 'react';
import Navber from './../Navbar/Navber';
import Partone from '../HomePart/Partone';
import Footer from '../Footer';
import About from '../HomePart/About/About';
const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Partone></Partone>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;