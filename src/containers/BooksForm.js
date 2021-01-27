import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <label htmlFor="title">
      Title
      {' '}
      <br />
      <input type="text" name="title" />
      <br />
    </label>
    <br />
    <label htmlFor="categories">
      Category
      {' '}
      <br />
      <select name="categories" id="categories">
        {categories.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
      <br />
    </label>
    <br />
    <button type="button" className="add-book">
      Submit
    </button>
  </form>
);

export default BooksForm;
