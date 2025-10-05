import React, { useEffect, useState } from 'react';

const Books = () => {
 const [allBooks,setAllbooks]=useState([]);

 useEffect(() =>{
 fetch("bookData.json")
 .then(res =>res.json())
 .then(data =>{
   console.log(data); 
 })

 } ,[])

    return (
        <div>
            <h1>I am a book</h1>
        </div>
    );
};

export default Books;