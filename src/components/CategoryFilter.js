import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../constants';
import styles from '../stylesheets/CategoryFilter.module.css';
import img from '../profile.svg';

const CategoryFilter = ({ handleFilterChange }) => (
  <nav className={styles.panelBg}>
    <div className={styles.navLeft}>
      <h3 className={styles.bookstoreCMS}>Bookstore CMS</h3>
      <span className={styles.books}>BOOKS</span>

      <select
        className={styles.books}
        name="filter"
        id="filter"
        onChange={e => {
          handleFilterChange(e.target.value);
        }}
      >
        <option key="all" value="all">All</option>
        {categories.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
    <div className={styles.roundProfile}>
      <img className={styles.mask} src={img} alt="profile-icon" />
    </div>
  </nav>
);

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
