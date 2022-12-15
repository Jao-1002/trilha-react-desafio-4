import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, id, disabled}: IButtonProps) => {
  return <ButtonContainer onClick={onClick} id={id} disabled>{title}</ButtonContainer>;
};

export default Button;
