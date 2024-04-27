import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s;
  background-color: var(--white);
  border: 1px solid var(--gray-5);

  &:hover {
    background-color: var(--gray-3);
  }
  &:active {
    background-color: var(--gray-4);
  }

  &.primary {
    color: white;
    background-color: var(--red-5);

    &:hover {
      background-color: var(--red-6);
    }

    &:active {
      background-color: var(--red-7);
    }
  }
  &:disabled {
    color: var(--gray-4);
    cursor: not-allowed;
    background-color: var(--gray-2);
    &:hover {
      background-color: var(--gray-2);
    }
  }
`;
