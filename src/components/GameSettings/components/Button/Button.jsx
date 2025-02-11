import PropTypes from "prop-types";

const Button = ({ children, onClick }) => (
  <button
    className="bg-blue-600 w-full text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200"
    role="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
