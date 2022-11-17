import React from 'react';
import HeroImage from '../assets/IMG_4423.jpg';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
        name='home'
        className='h-screen w-full bg-gradient-to-b  from-blue-500 to-cyan-500 text-white'>
            
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'am a Website Developer
                </h2>
                <p className='text-white py-4 max-w-md'>
                     Hello, my name is Dzagar(Jagar). Welcome to my portfolio website. I am happy to share with you some of my projects I was doing recently and many of them will appear soon
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'> 
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img 
                    src={HeroImage} 
                    alt="my profile"
                    className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home