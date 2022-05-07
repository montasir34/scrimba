
import Content from './Content';
import Footer from './Footer';
import Navbar from './Navbar';


import React from 'react';

const Main = () => {
    return (
        <div  className='bg-[#282D35]'>
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
}

export default Main;
