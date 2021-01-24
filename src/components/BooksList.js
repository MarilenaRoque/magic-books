import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';

function BooksList({ bookList }) {
  return (
    <>
      <h1 className="books-list">
        {bookList}
      </h1>
      <button type="button" onClick={() => store.dispatch({ type: 'CREATE_BOOK', payload: { title: 'Hello', category: 'some' } })}>Hello</button>
    </>
  );
}

const mapStateToProps = state => ({ bookList: state.allIds.join() });

export default connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  bookList: PropTypes.string.isRequired,
};
