import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';

const removeBookX = () => {
  store.dispatch({ type: 'REMOVE_BOOK', payload: { id: 1 } });
};

function BooksList({ bookList }) {
  return (
    <>
      <h1 className="books-list">
        {bookList}
      </h1>
      <button type="button" onClick={removeBookX}>Hello</button>
    </>
  );
}

const mapStateToProps = state => ({ bookList: state.books.join() });

export default connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  bookList: PropTypes.string.isRequired,
};
