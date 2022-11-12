import Book from './book/singleBook';

const Books = () => {
  const bookArray = [
    {
      id: 1,
      genre: 'Action',
      title: 'In Search of Lost Time',
      author: 'Marcel Proust',
      percentageCompleted: '80%',
      currentChapter: 'Chapter 6',
    },
    {
      id: 2,
      genre: 'Adventure',
      title: ' One Hundred Years of Solitude',
      author: 'Gabriel Garcia Marquez',
      percentageCompleted: '10%',
      currentChapter: 'Chapter 2',
    },
  ];

  return (
    <section className="books-container">
      <div className="book-list">
        {bookArray.map((book) => (
          <Book
            key={book.id}
            genre={book.genre}
            title={book.title}
            author={book.author}
            percentageCompleted={book.percentageCompleted}
            currentChapter={book.currentChapter}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;
