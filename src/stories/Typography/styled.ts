import styled from "styled-components";

interface TypographyStyleProps {
  fontWeight: "bold" | "regular" | "normal";
  level: number;
}

export const TitleContainer = styled.h1<TypographyStyleProps>`
  font-size: ${({ level }) => {
    switch (level) {
      case 1:
        return "2.5rem";
      case 2:
        return "2rem";
      case 3:
        return "1.75rem";
      case 4:
        return "1.5rem";
      case 5:
        return "1.25rem";
      case 6:
        return "1rem";
      default:
        return "2.5rem";
    }
  }};
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : fontWeight === "regular" ? 400 : "normal"};
`;

export const TextContainer = styled.span<TypographyStyleProps>`
  font-size: ${({ level }) => {
    switch (level) {
      case 1:
        return "2rem";
      case 2:
        return "1.5rem";
      case 3:
        return "1.25rem";
      case 4:
        return "1rem";
      case 5:
        return "0.875rem";
      case 6:
        return "0.75rem";
      default:
        return "1rem";
    }
  }};
  font-weight: ${({ fontWeight }) =>
    fontWeight === "bold" ? "bold" : fontWeight === "regular" ? 400 : "normal"};
`;
