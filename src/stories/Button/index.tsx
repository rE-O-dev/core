import React from "react";
import { ButtonContainer } from "./styled";
import Typography from "../Typography";
import { cn } from "@/utils/classNames";

export type ButtonSize = "small" | "large" | "default";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
  primary?: boolean;

  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, primary, size = "default", ...reset } = props;
  return (
    <ButtonContainer className={cn(primary && "primary", size)} {...reset}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
