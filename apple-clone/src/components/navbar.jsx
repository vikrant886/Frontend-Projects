import React from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../Values/val';

const Navbar = () => {
    console.log(navLists);
    return (
        <header>
            <nav className='flex flex-row gap-16 justify-center p-4'>
                <img src={appleImg} className='max-sm:mr-auto' width={18} height={18} alt="Apple" />
                <div className='text-white flex gap-16 max-sm:hidden'>
                    {
                        navLists.map((names, index) => (
                            <div key={index} className='text-gray text-sm cursor-pointer hover:text-white transition-all'>
                                {names}
                            </div>
                        ))
                    }
                </div>
                <div className='flex max-sm:gap-12 text-gray gap-16'>
                    <img src={searchImg} width={18} height={18} alt="" />
                    <img src={bagImg} width={18} height={18} alt="" />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
