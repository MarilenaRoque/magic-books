import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../constants';
import store from '../store';

const CategoryFilter = ({ handleFilterChange }) => (
  <select
    name="filter"
    id="filter"
    onChange={e => {
      handleFilterChange(e.target.value);
      console.log(store.getState().filter);
    }}
  >
    <option key="all" value="all">All</option>
    {categories.map(item => <option key={item} value={item}>{item}</option>)}
  </select>
);

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
