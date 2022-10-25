const Button = ({ onClick, content }) => (
  <button onClick={onClick} data-testid='button' className='btn btn-color'>
    {content}
  </button>
);

export default Button;
