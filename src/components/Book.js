import React from 'react';
import PropTypes from 'prop-types';
import styles from '../stylesheets/Book.module.css';
import progress from '../progress.svg';

const Book = ({ book, handleRemoveBook }) => {
  const { title, category } = book;
  return (

    <div className={styles.bookPanel}>
      <div>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.blueText}>Author</p>
        <button type="button" className={styles.buttons}>
          {' '}
          <span className={styles.blueText}>Comments </span>
        </button>
        <div className={styles.verticalLine} />
        <button type="button" onClick={() => handleRemoveBook(book)} className={styles.buttons}>
          {' '}
          <span className={styles.blueText}>Remove </span>
        </button>
        <div className={styles.verticalLine} />
        <button type="button" className={styles.buttons}>
          {' '}
          <span className={styles.blueText}>Edit </span>
        </button>
      </div>
      <div className={styles.progress}>
        <div className={styles.bookProgress}>
          <img src={progress} alt="progress graph" className={styles.progressImage} />
          <div className={styles.progressInfo}>
            <p className={styles.percentage}>100%</p>
            <p className={styles.completed}>Completed</p>
          </div>
        </div>
        <div className={styles.verticalDivision} />
        <div>
          <p className={styles.currentChapter}>CURRENT CHAPTER</p>
          <p className={styles.currentChapterNumber}>Chapter 20</p>
          <button type="button" className={styles.buttonUpdate}>
            <span className={styles.update}>UPDATE PROGRESS</span>
          </button>
        </div>
      </div>
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
