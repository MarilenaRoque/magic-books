import React from 'react';
import { categories } from '../constants';

const CategoryFilter = () => (
  <select name="filter" id="filter">
    <option key="all" value="all">All</option>
    {categories.map(item => <option key={item} value={item}>{item}</option>)}
  </select>
);

export default CategoryFilter;
