import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook, removeBook } from '../actions/index';
import { categories } from '../constants';
import styles from '../stylesheets/BooksForm.module.css';

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
    <>
      <hr className={styles.line} />
      <p className={styles.title}>ADD NEW BOOK</p>
      <form className={styles.form}>
        <input className={styles.inputText} type="text" placeholder="Book Title" name="title" value={title} onChange={e => handleChangeTitle(e.target.value)} />

        <select className={styles.categoryInput} name="categories" id="categories" value={category} onChange={e => handleChangeCategory(e.target.value)}>
          {categories.map(item => <option key={item} value={item}>{item}</option>)}
        </select>

        <button type="button" className={styles.addButton} onClick={handleSubmit}>
          <span className={styles.addButtonText}>ADD BOOK</span>
        </button>
      </form>
    </>
  );
};

export default connect(null, { createBook, removeBook })(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
