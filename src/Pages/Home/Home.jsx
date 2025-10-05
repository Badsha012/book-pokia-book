import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data=useLoaderData();
  console.log(data);

    return (
        <div className='py-10 '>
            
            <Banner></Banner>
            <Books></Books>
            
        </div>
    );
};

export default Home;