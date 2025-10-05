import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center border-0.5 bg-gray-200 rounded-2xl '>
            <div className='px-10'>
                <h1 className='md:text-5xl text-2xl text-black font-semibold '>Books to freshen up <br></br> your bookshelf</h1>
                <br></br>
                <button className='btn text-white  bg-green-500 rounded-lg'>View The List</button>
            </div>
            <div>
                <img src="https://i.ibb.co.com/nKGc7N2/books.webp" className='md:h-100 p-10 md:w-130 h-60 w-100 rounded-2xl ' alt="Book" srcset="" />

            </div>
        </div>
    );
};

export default Banner;