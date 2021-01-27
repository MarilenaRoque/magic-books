import React, { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Kids');

  const handleChangeTitle = input => {
    setTitle(input);
  };

  const handleChangeCategory = input => {
    setCategory(input);
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
      <button type="button" className="add-book">
        Submit
      </button>
    </form>
  );
};

export default BooksForm;
