import React from "react";
import { TitleContainer, TextContainer } from "./styled";

/**
 * Typography component
 * Todo: line-height and ellipsis and other styled be a dybamic props
 */

export interface TypographyProps
  extends React.ComponentPropsWithoutRef<"span"> {
  children?: React.ReactNode;

  bold?: boolean;
  regular?: boolean;

  level?: number;
}

const Title: React.FC<TypographyProps> = (props) => {
  const { children, bold, regular, level = 2, ...rest } = props;

  const fontWeight = React.useMemo(() => {
    return bold ? "bold" : regular ? "regular" : "normal";
  }, [bold, regular]);

  return (
    <TitleContainer fontWeight={fontWeight} level={level} {...rest}>
      {children}
    </TitleContainer>
  );
};

const Text: React.FC<TypographyProps> = (props) => {
  const { children, bold, regular, level = 4, ...rest } = props;

  const fontWeight = React.useMemo(() => {
    return bold ? "bold" : regular ? "regular" : "normal";
  }, [bold, regular]);

  return (
    <TextContainer fontWeight={fontWeight} level={level} {...rest}>
      {children}
    </TextContainer>
  );
};

const Typography = {
  Title,
  Text,
};

export default Typography;
