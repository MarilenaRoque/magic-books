import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = props => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleChangeTitle = input => {
    setTitle(input);
  };

  const handleChangeCategory = input => {
    setCategory(input);
  };

  const handleSubmit = () => {
    setTitle('');
    setCategory('Action');
    const book = {
      title,
      category,
    };
    if (title) { props.createBook(book); }
  };

  return (
    <form>
      <label htmlFor="title">
        Title
        <br />
        <input type="text" name="title" value={title} onChange={e => handleChangeTitle(e.target.value)} />
        <br />
      </label>
      <br />
      <label htmlFor="categories">
        Category
        {' '}
        <br />
        <select name="categories" id="categories" value={category} onChange={e => handleChangeCategory(e.target.value)}>
          {categories.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        <br />
      </label>
      <br />
      <button type="button" className="add-book" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default connect(null, { createBook })(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
