import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './actionButtons';
import { removeBook } from '../../../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemove = (bookId) => {
    dispatch(removeBook({ id: bookId }));
  };

  return (
    <div className="book-container flex">
      <div className="first-block flex">
        <div className="book-description flex flex-col">
          <p className="book-genre">Adventure</p>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>

          <div className="action-buttons flex">
            <Button
              className="action-btn"
              title="Comments"
              handleClick={() => {}}
            />
            <Button
              className="action-btn"
              title="Remove"
              handleClick={() => {
                handleRemove(id);
              }}
            />
            <Button
              className="action-btn"
              title="Edit"
              handleClick={() => {}}
            />
          </div>
        </div>
        <div className="book-progress flex">
          <div className="progress" />

          <div className="progress-details">
            <p className="percentage">50%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </div>

      <div className="second-block flex flex-col">
        <div className="progress-details">
          <h3>Current Chapter</h3>
          <p>Chapter 3</p>
        </div>

        <Button
          title="Update progress"
          handleClick={() => {}}
          className="progress-btn"
        />
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
