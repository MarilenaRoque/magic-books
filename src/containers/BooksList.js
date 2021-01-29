import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, handleFilterChange } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ bookList, removeBook, handleFilterChange }) => (
  <>
    <br />
    <br />
    <CategoryFilter handleFilterChange={handleFilterChange} />
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {bookList && bookList.length
          ? bookList.map(book => (
            <Book
              key={Math.random + book.id}
              book={book}
              handleRemoveBook={removeBook}
            />
          ))
          : (<tr><td>No books yet! :(</td></tr>)}
      </tbody>
    </table>
  </>
);

const getBooksByFilter = state => {
  const { books, filter } = state;
  if (filter !== 'all') {
    return books.filter(book => (book.category === filter));
  }
  return books;
};

const mapStateToProps = state => ({ bookList: getBooksByFilter(state) });

export default connect(mapStateToProps, { removeBook, handleFilterChange })(BooksList);

BooksList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
