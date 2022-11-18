import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book/singleBook';
import { fetchBooks } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      dispatch(fetchBooks());
    }
  }, []);

  const bookArray = useSelector((state) => state.books);

  if (bookArray.length > 0) {
    return (
      <section className="books-container">
        <div className="book-list">
          {bookArray.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author="Mary Smith"
              category={book.category}
            />
          ))}
        </div>
      </section>
    );
  }

  return '';
};

export default Books;
