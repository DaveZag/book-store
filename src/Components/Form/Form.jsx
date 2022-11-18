import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uniqueId } from 'uuid';

import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [bookInfos, setBookInfos] = useState({
    title: '',
    category: '',
  });

  const handleChange = (e) => {
    setBookInfos({ ...bookInfos, [e.target.id]: e.target.value });
    console.log(bookInfos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uniqueId(),
      title: bookInfos.title,
      author: 'Marcel Proust',
      category: bookInfos.category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div className="form-container flex flex-col">
      <h2 className="form-title">Add new Book</h2>
      <form className="form flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="book-name-input input"
          id="title"
          placeholder="Book title..."
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="category-input input"
          placeholder="Genre/Category..."
          id="category"
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Add book
        </button>
      </form>
    </div>
  );
};
export default Form;
