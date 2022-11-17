import { useSelector } from 'react-redux';
import Book from './book/singleBook';

const Books = () => {
  const bookArray = useSelector((state) => state.books);
  return (
    <section className="books-container">
      <div className="book-list">
        {bookArray.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;
