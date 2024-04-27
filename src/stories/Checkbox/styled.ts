import { cn } from "@/utils/classNames";
import styled from "styled-components";
interface CheckboxProps {
  indeterminated?: boolean;
}

function attrsCheckBox(props: CheckboxProps & React.ComponentProps<"input">) {
  const { className, indeterminated } = props;
  return {
    className: cn(indeterminated && "indeterminated", className),
    type: "checkbox",
  };
}

export const CheckBoxContainer = styled.input.attrs(
  attrsCheckBox
)<CheckboxProps>`
  width: 14px;
  min-width: 14px;
  height: 14px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid var(--red-5);
  background-color: #ffffff;
  appearance: none;

  &.indeterminated {
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      height: 70%;
      background: var(--red-5); // primary;
      border-radius: 0;
      transform: translate(-50%, -50%);
      content: "";
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 13%;
    height: 50%;
    top: 25%;
    left: 56%;
    transform: rotate(45deg);
    border-radius: 10px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 13%;
    top: 50%;
    left: 17%;
    transform: rotate(45deg);
    border-radius: 10px;
  }

  &:checked {
    border-color: var(--red-5);
    background-color: var(--red-5);
    transition: 0.2s all ease 0s;

    &::before,
    &::after {
      background-color: #fff;
    }
  }

  &:disabled {
    background: var(--gray-2);
    border-color: var(--gray-3);
    cursor: default;
    &::before,
    &::after {
      background-color: var(--gray-3);
    }
    transition: 0.2s all ease 0s;
  }
`;
