import React, {} from 'react';
import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = () => {
//  const [allBooks,setAllbooks]=useState([]);

//  useEffect(() =>{
//  fetch("bookData.json")
//  .then(res =>res.json())
//  .then(data =>{
//    console.log(data); 
//  })

//  } ,[])

// const bookPrimise=fetch('./bookData.json').then(res=>res.json())

    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
          <Suspense fallback={<span>loading...</span>}>
        <Book></Book>
          </Suspense>

        </div>
    );
};

export default Books;