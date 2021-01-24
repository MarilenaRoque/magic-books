import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function BooksList({ bookList }) {
  return (
    <h1 className="books-list">
      {bookList}
    </h1>
  );
}

const mapStateToProps = state => ({ bookList: state.allIds.join() });

export default connect(mapStateToProps)(BooksList);

BooksList.propTypes = {
  bookList: PropTypes.string.isRequired,
};
