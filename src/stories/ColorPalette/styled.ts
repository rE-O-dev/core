import styled from "styled-components";

interface PaletteProps {
  bg: string;
  index: number;
}

export const Palette = styled.article<PaletteProps>`
  display: flex;
  background-color: ${(props) => props.bg};
  justify-content: space-between;
  padding: 12px;
  color: ${(props) => (props.index > 4 ? "white" : "black")};

  & > .hex {
    display: none;
  }

  &:hover > .hex {
    display: inline-block;
  }
`;

export const PaletteContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 10fr);
  grid-gap: 10px;
`;

export const LightThemePaletteContainer = styled(PaletteContainer)`
  background-color: white;
`;

export const DarkThemePaletteContainer = styled(PaletteContainer)`
  background-color: black;

  h3 {
    color: white;
  }
`;
