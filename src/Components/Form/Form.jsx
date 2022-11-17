import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [bookInfos, setBookInfos] = useState({
    title: '',
    author: '',
  });

  const booksArrayLength = useSelector((state) => state.books.length);

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'book-title':
        setBookInfos({ ...bookInfos, title: e.target.value });
        break;
      case 'book-author':
        setBookInfos({ ...bookInfos, author: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: booksArrayLength === 0 ? 0 : booksArrayLength + 1,
      title: bookInfos.title,
      author: bookInfos.author,
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
          id="book-title"
          placeholder="Book title..."
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="author-input input"
          placeholder="Author name..."
          id="book-author"
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
