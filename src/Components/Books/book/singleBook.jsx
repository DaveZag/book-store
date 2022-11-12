import { PropTypes } from 'prop-types';
import Button from './actionButtons';

const Book = ({
  genre,
  title,
  author,
  percentageCompleted,
  currentChapter,
}) => {
  const buttonsArray = [
    {
      id: 1,
      title: 'Comments',
    },
    {
      id: 2,
      title: 'Remove',
    },
    {
      id: 3,
      title: 'Edit',
    },
  ];

  return (
    <div className="book-container flex">
      <div className="first-block flex">
        <div className="book-description flex flex-col">
          <p className="book-genre">{genre}</p>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>

          <ul className="action-buttons flex">
            {buttonsArray.map((button) => (
              <Button
                key={button.id}
                className="action-btn"
                title={button.title}
                onclick={() => {}}
              />
            ))}
          </ul>
        </div>
        <div className="book-progress flex">
          <div className="progress" />

          <div className="progess-details">
            <p className="percentage">{percentageCompleted}</p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </div>

      <div className="second-block flex flex-col">
        <div className="progress-details">
          <h3>Current Chapter</h3>
          <p>{currentChapter}</p>
        </div>

        <Button
          title="Update progress"
          onclick={() => {}}
          className="progress-btn"
        />
      </div>
    </div>
  );
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentageCompleted: PropTypes.string.isRequired,
  currentChapter: PropTypes.string.isRequired,
};

export default Book;
