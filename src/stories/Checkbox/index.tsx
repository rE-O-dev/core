import React from "react";
import { CheckBoxContainer } from "./styled";
import Typography, { TypographyProps } from "../Typography";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  labelPosition?: "left" | "right";
  labelStyle?: TypographyProps;
  indeterminated?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { labelPosition = "right", label, ...rest } = props;
  return (
    <label>
      {labelPosition === "left" && label && (
        <Typography.Text>{label}</Typography.Text>
      )}
      <CheckBoxContainer {...rest} />
      {labelPosition === "right" && label && (
        <Typography.Text>{label}</Typography.Text>
      )}
    </label>
  );
};

export default Checkbox;
