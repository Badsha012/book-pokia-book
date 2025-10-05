import React, {} from 'react';

const Book = ({singleBook}) => {
    // const data=use(bookPrimise);
    // console.log(data);

//     Object
// author
// : 
// "F. Scott Fitzgerald"
// bookId
// : 
// 1
// bookName
// : 
// "The Great Gatsby"
// category
// : 
// "Classic"
// image
// : 
// "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
// publisher
// : 
// "Scribner"
// rating
// : 
// 4.5
// review
// : 
// "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
// tags
// : 
// (2) ['Fiction', 'Romance']
// totalPages
// : 
// 192
// yearOfPublishing
// : 
// 1925

const {bookName,author,category,image}=singleBook

    console.log(singleBook);
    return (
     <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Booka" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Book;