import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';
import Book from './Book';

const removeBookX = () => {
  store.dispatch({ type: 'REMOVE_BOOK', payload: { id: 1 } });
};

function BooksList({ bookList }) {
  return (
    <>
      <button type="button" onClick={removeBookX}>Hello</button>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {bookList && bookList.length
            ? bookList.map(book => {
              const { id, title, category } = book;
              return <Book key={Math.random + id} id={id} title={title} category={category} />;
            })
            : 'No books yet! :( '}
        </tbody>
      </table>
    </>
  );
}

const mapStateToProps = state => ({ bookList: state.books });

export default connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};
