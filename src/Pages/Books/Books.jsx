import React, {} from 'react';
import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
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
       <div className='grid grid-cols-3 gap-10'>
         {
            data.map((singleBook) =><Book key={singleBook.bookId} singleBook={singleBook} ></Book>)
        }
       </div>
          </Suspense>

        </div>
    );
};

export default Books;