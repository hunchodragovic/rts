type ButtonProps = {
  handleClick: () => void;
};
const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>Button</button>;
};

export default Button;
