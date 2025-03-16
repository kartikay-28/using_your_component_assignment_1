// write the book component code here
import React from 'react';


const BookCard = ({ title, author, description, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>{description}</strong></p>
      </div>
    </div>
  );
};

export default BookCard;
