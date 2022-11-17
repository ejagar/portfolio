import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Computers and its digital world always fascinates me since when I got in touched with. It helped me to increase my logic and language skills. But I discover my hidden curiosity about coding very late and its about since covid hit. Its never to late right :) Pandemic tooks a lot but also it gaves a lot. During this hard time I began experimenting with my computer and followed many instructions and tutorials, that I was able to build and deploy my first payed project from scratch</p>
            <br />
            <p className='text=xl'>Every day is a different day. Every day I learn new things from many variety of programing languages and its syntaxes. Step by step I'm closer to be qualified enough and become part of this exciting coding world</p>
        </div>
    </div>
  )
}

export default About