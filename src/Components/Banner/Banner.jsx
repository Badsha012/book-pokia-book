import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center border-0.5 bg-gray-200 rounded-2xl'>
            <div className='px-10'>
                <h1 className='text-5xl text-black font-semibold '>Books to freshen up <br></br> your bookshelf</h1>
                <br></br>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img src="https://i.ibb.co.com/nKGc7N2/books.webp" className='h-100 p-10 w-130 ' alt="Book" srcset="" />

            </div>
        </div>
    );
};

export default Banner;