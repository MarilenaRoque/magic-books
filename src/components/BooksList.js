import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';

const removeBookX = () => {
  store.dispatch({ type: 'REMOVE_BOOK', payload: { id: 1 } });
};

function BooksList({ bookList }) {
  console.log(bookList);
  return (
    <>
      <h1 className="books-list">HhHH</h1>
      <button type="button" onClick={removeBookX}>Hello</button>
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
