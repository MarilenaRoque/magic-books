import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { title, category } = book;
  return (

    <div>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => handleRemoveBook(book)}> X </button></td>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;

Book.propTypes = {
  handleRemoveBook: PropTypes.func.isRequired,
};
