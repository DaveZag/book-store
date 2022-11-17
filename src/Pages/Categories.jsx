import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const message = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="categories">
      <div>
        <button className="check-btn" type="button" onClick={handleClick}>
          Check Status
        </button>
        <h1>{message}</h1>
      </div>
    </section>
  );
};

export default Categories;
