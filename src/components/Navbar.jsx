

import logo from '../images/logo192.png';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-[#21222A] p-5'>
                <div className="container mx-auto flex items-center justify-between gap-x-3">
                  <div className='flex items-center gap-x-3'>
                    <img className='text-[#61DAFB] ' width='50px'src={logo} alt="logo" />
                    <h1 className='text-[#61DAFB] text-3xl' >ReactFacts</h1>
                  </div>
                  <h3 className='text-[#DEEBF8] text-2xl'>React Course=Project-1</h3>
                </div>           
            </nav>
        </div>
    );
}

export default Navbar;
