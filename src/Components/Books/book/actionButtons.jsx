import { PropTypes } from 'prop-types';

const Button = ({ title, handleEvent, className }) => (
  <button type="button" className={className} onClick={{ handleEvent }}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
};

export default Button;
